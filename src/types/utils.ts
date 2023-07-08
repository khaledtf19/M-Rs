export type CardType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export type SearchResultsType = {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export type Result = {
  title?: string
  name?: string
  adult: boolean
  backdrop_path?: string
  id: number
  original_name?: string
  original_language: string
  overview: string
  poster_path?: string
  media_type: "tv"| "movie" 
  genre_ids: number[]
  popularity: number
  first_air_date?: string
  vote_average: number
  vote_count: number
  origin_country?: string[]
  original_title?: string
  release_date?: string
  video?: boolean
}
