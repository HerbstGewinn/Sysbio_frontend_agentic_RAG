import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Upload, Database, Sun, Moon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "next-themes";

const Index = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fetch analysis results data
  const { data: analysisData, isLoading } = useQuery({
    queryKey: ['analysis-results'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('analysis_results')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  // Handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      setUploading(true);
      
      // Sanitize filename
      const fileExt = file.name.split('.').pop();
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const sanitizedFilename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const filePath = `studies/${sanitizedFilename}`;

      // Upload file to storage
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('clinical_studies')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Create record in uploaded_studies table
      const { error: dbError } = await supabase
        .from('uploaded_studies')
        .insert({
          filename: file.name,
          file_path: filePath
        });

      if (dbError) throw dbError;

      toast({
        title: "Success",
        description: "File uploaded successfully",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Error",
        description: "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Clinical Study
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-6">
              <Button
                disabled={uploading}
                className="relative"
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {uploading ? "Uploading..." : "Select File"}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileUpload}
                />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Analysis Results Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? "Loading..." : analysisData?.length || 0}
            </div>
            <p className="text-muted-foreground">Total Records</p>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Study Identifier</TableHead>
                  <TableHead>Publication Database</TableHead>
                  <TableHead>DOI</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Disease</TableHead>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Gene</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : analysisData?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.study_identifier}</TableCell>
                    <TableCell>{row.puplication_database}</TableCell>
                    <TableCell>{row.doi}</TableCell>
                    <TableCell>{row.year_of_publication}</TableCell>
                    <TableCell>{JSON.stringify(row.disease)}</TableCell>
                    <TableCell>{JSON.stringify(row.treatment)}</TableCell>
                    <TableCell>{JSON.stringify(row.gene)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;