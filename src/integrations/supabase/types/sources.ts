export type Source = {
  id: number
  acronym: string | null
  name: string | null
  description: string | null
  status: number | null
}

export type SourceToStudy = {
  source_id: number
  study_id: number
}