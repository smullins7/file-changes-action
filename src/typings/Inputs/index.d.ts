export interface Inputs {
  githubRepo: string
  githubToken: string
  pushBefore: string
  pushAfter: string
  prNumber: number
  paths: [string]
  ignorePaths: [string]
  output: string
  fileOutput: string
  event: string
  [key: string]: string | number | [string]
}
