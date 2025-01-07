export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      h2s: {
        Row: {
          id: number
          study_id: number
          type_id: number
        }
        Insert: {
          id?: number
          study_id: number
          type_id: number
        }
        Update: {
          id?: number
          study_id?: number
          type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_h2s_study"
            columns: ["study_id"]
            isOneToOne: false
            referencedRelation: "studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_h2s_type"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
        ]
      }
      orphanet_disease: {
        Row: {
          orpha_code: string | null
          orpha_term: string | null
        }
        Insert: {
          orpha_code?: string | null
          orpha_term?: string | null
        }
        Update: {
          orpha_code?: string | null
          orpha_term?: string | null
        }
        Relationships: []
      }
      s2s: {
        Row: {
          source_id: number
          study_id: number
        }
        Insert: {
          source_id: number
          study_id: number
        }
        Update: {
          source_id?: number
          study_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_s2s_source"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_s2s_study"
            columns: ["study_id"]
            isOneToOne: false
            referencedRelation: "studies"
            referencedColumns: ["id"]
          },
        ]
      }
      sources: {
        Row: {
          acronym: string | null
          description: string | null
          id: number
          name: string | null
          status: number | null
        }
        Insert: {
          acronym?: string | null
          description?: string | null
          id?: number
          name?: string | null
          status?: number | null
        }
        Update: {
          acronym?: string | null
          description?: string | null
          id?: number
          name?: string | null
          status?: number | null
        }
        Relationships: []
      }
      studies: {
        Row: {
          ci_desc: string | null
          ci_grade: string | null
          ci_n: number | null
          ci_ocelm: number | null
          ci_omim_code: string | null
          ci_omim_term: string | null
          ci_ordo_code: string | null
          ci_ordo_term: string | null
          ci_type: string | null
          grm_37_end: number | null
          grm_37_pos: number | null
          grm_37_start: number | null
          grm_38_end: number | null
          grm_38_pos: number | null
          grm_38_start: number | null
          grm_cdna: string | null
          grm_chrm: string | null
          grm_ensemble_gene_id: string | null
          grm_ensemble_transcript_id: string | null
          grm_entrez_gene_id: string | null
          grm_hgnc_symbol: string | null
          grm_inheritance_code: string | null
          grm_inheritance_term: string | null
          grm_protein: string | null
          grm_reference: string | null
          grm_rnda_tag: string | null
          grm_transcript: string | null
          grm_var_type: string | null
          id: number
          pub_authors: string | null
          pub_code: string | null
          pub_db: string | null
          pub_doi: string | null
          pub_journal: string | null
          pub_title: string | null
          pub_year: number | null
          trt_bio_eff: string | null
          trt_cl_eff: string | null
          trt_code: string | null
          trt_comments: string | null
          trt_db: string | null
          trt_negative: string | null
          trt_term: string | null
        }
        Insert: {
          ci_desc?: string | null
          ci_grade?: string | null
          ci_n?: number | null
          ci_ocelm?: number | null
          ci_omim_code?: string | null
          ci_omim_term?: string | null
          ci_ordo_code?: string | null
          ci_ordo_term?: string | null
          ci_type?: string | null
          grm_37_end?: number | null
          grm_37_pos?: number | null
          grm_37_start?: number | null
          grm_38_end?: number | null
          grm_38_pos?: number | null
          grm_38_start?: number | null
          grm_cdna?: string | null
          grm_chrm?: string | null
          grm_ensemble_gene_id?: string | null
          grm_ensemble_transcript_id?: string | null
          grm_entrez_gene_id?: string | null
          grm_hgnc_symbol?: string | null
          grm_inheritance_code?: string | null
          grm_inheritance_term?: string | null
          grm_protein?: string | null
          grm_reference?: string | null
          grm_rnda_tag?: string | null
          grm_transcript?: string | null
          grm_var_type?: string | null
          id?: number
          pub_authors?: string | null
          pub_code?: string | null
          pub_db?: string | null
          pub_doi?: string | null
          pub_journal?: string | null
          pub_title?: string | null
          pub_year?: number | null
          trt_bio_eff?: string | null
          trt_cl_eff?: string | null
          trt_code?: string | null
          trt_comments?: string | null
          trt_db?: string | null
          trt_negative?: string | null
          trt_term?: string | null
        }
        Update: {
          ci_desc?: string | null
          ci_grade?: string | null
          ci_n?: number | null
          ci_ocelm?: number | null
          ci_omim_code?: string | null
          ci_omim_term?: string | null
          ci_ordo_code?: string | null
          ci_ordo_term?: string | null
          ci_type?: string | null
          grm_37_end?: number | null
          grm_37_pos?: number | null
          grm_37_start?: number | null
          grm_38_end?: number | null
          grm_38_pos?: number | null
          grm_38_start?: number | null
          grm_cdna?: string | null
          grm_chrm?: string | null
          grm_ensemble_gene_id?: string | null
          grm_ensemble_transcript_id?: string | null
          grm_entrez_gene_id?: string | null
          grm_hgnc_symbol?: string | null
          grm_inheritance_code?: string | null
          grm_inheritance_term?: string | null
          grm_protein?: string | null
          grm_reference?: string | null
          grm_rnda_tag?: string | null
          grm_transcript?: string | null
          grm_var_type?: string | null
          id?: number
          pub_authors?: string | null
          pub_code?: string | null
          pub_db?: string | null
          pub_doi?: string | null
          pub_journal?: string | null
          pub_title?: string | null
          pub_year?: number | null
          trt_bio_eff?: string | null
          trt_cl_eff?: string | null
          trt_code?: string | null
          trt_comments?: string | null
          trt_db?: string | null
          trt_negative?: string | null
          trt_term?: string | null
        }
        Relationships: []
      }
      types: {
        Row: {
          code: string | null
          id: number
          term: string | null
        }
        Insert: {
          code?: string | null
          id?: number
          term?: string | null
        }
        Update: {
          code?: string | null
          id?: number
          term?: string | null
        }
        Relationships: []
      }
      uploaded_studies: {
        Row: {
          file_path: string
          filename: string
          id: string
          Study_identifier: string | null
          uploaded_at: string
        }
        Insert: {
          file_path: string
          filename: string
          id?: string
          Study_identifier?: string | null
          uploaded_at?: string
        }
        Update: {
          file_path?: string
          filename?: string
          id?: string
          Study_identifier?: string | null
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "uploaded_studies_Study_identifier_fkey"
            columns: ["Study_identifier"]
            isOneToOne: false
            referencedRelation: "validation_data"
            referencedColumns: ["Study_identifier"]
          },
        ]
      }
      validation_data: {
        Row: {
          disease: string | null
          gene: string | null
          ORDO_code: string | null
          Study_identifier: string | null
          treatment: string | null
          treatment_ID: string | null
        }
        Insert: {
          disease?: string | null
          gene?: string | null
          ORDO_code?: string | null
          Study_identifier?: string | null
          treatment?: string | null
          treatment_ID?: string | null
        }
        Update: {
          disease?: string | null
          gene?: string | null
          ORDO_code?: string | null
          Study_identifier?: string | null
          treatment?: string | null
          treatment_ID?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
