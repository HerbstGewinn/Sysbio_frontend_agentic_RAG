import { Study } from './studies'
import { Source, SourceToStudy } from './sources'
import { Type, H2S } from './types'
import { ValidationData, UploadedStudy } from './validation'
import { OrphanetDisease } from './disease'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      studies: {
        Row: Study
        Insert: Partial<Study>
        Update: Partial<Study>
      }
      sources: {
        Row: Source
        Insert: Partial<Source>
        Update: Partial<Source>
      }
      s2s: {
        Row: SourceToStudy
        Insert: SourceToStudy
        Update: Partial<SourceToStudy>
      }
      types: {
        Row: Type
        Insert: Partial<Type>
        Update: Partial<Type>
      }
      h2s: {
        Row: H2S
        Insert: H2S
        Update: Partial<H2S>
      }
      validation_data: {
        Row: ValidationData
        Insert: Partial<ValidationData>
        Update: Partial<ValidationData>
      }
      uploaded_studies: {
        Row: UploadedStudy
        Insert: Omit<UploadedStudy, 'id' | 'uploaded_at'>
        Update: Partial<UploadedStudy>
      }
      orphanet_disease: {
        Row: OrphanetDisease
        Insert: Partial<OrphanetDisease>
        Update: Partial<OrphanetDisease>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Insertable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type Updatable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']