export type ValidationData = {
  Study_identifier: string | null
  disease: string | null
  treatment: string | null
  gene: string | null
  ORDO_code: string | null
  treatment_ID: string | null
}

export type UploadedStudy = {
  id: string
  filename: string
  file_path: string
  uploaded_at: string
  Study_identifier: string | null
}