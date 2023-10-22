interface OtherLanguages {
  [key: string]: number
}

export type RepoType = {
  full_name: string
  description: string
  language: string
  languages: OtherLanguages
  updated_at: string
  created_at: string
  size: number
  stargazers_count: number
}
