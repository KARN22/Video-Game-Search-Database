export interface GameScreenshots {
    count: number
    next: any
    previous: any
    results: Result[]
  }
  
  export interface Result {
    id: number
    image: string
    width: number
    height: number
    is_deleted: boolean
  }
  