export interface CountryDTO {
  cca3: string
  name: {
    common: string
    official: string
  }
  translations?: {
    [key: string]: {
      official?: string
      common?: string
    }
  }
  flags: {
    svg?: string
    png?: string
  }
  population?: number
  region?: string
  capital?: string[]
  borders?: string[]
}
