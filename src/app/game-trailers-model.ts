export interface GameTrailers {
    count: number
    next: any
    previous: any
    results: Result[]
  }
  
  export interface Result {
    id: number
    name: string
    preview: string
    data: Data
  }
  
  export interface Data {
    "480": string
    max: string
  }
  