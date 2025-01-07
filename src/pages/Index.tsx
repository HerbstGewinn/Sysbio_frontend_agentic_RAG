import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Upload, Database } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  // Fetch validation data
  const { data: validationData, isLoading } = useQuery({
    queryKey: ['validation-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('validation_data')
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
      
      // Upload file to storage
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('clinical_studies')
        .upload(`studies/${file.name}`, file);

      if (uploadError) throw uploadError;

      // Create record in uploaded_studies table
      const { error: dbError } = await supabase
        .from('uploaded_studies')
        .insert({
          filename: file.name,
          file_path: fileData.path
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
        description: "Failed to upload file",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
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
              Validation Data Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? "Loading..." : validationData?.length || 0}
            </div>
            <p className="text-muted-foreground">Total Records</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Validation Data</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Study Identifier</TableHead>
                  <TableHead>Disease</TableHead>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Gene</TableHead>
                  <TableHead>ORDO Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : validationData?.map((row) => (
                  <TableRow key={row.Study_identifier}>
                    <TableCell>{row.Study_identifier}</TableCell>
                    <TableCell>{row.disease}</TableCell>
                    <TableCell>{row.treatment}</TableCell>
                    <TableCell>{row.gene}</TableCell>
                    <TableCell>{row.ORDO_code}</TableCell>
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