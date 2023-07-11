export type CardType = {
  id: number;
  title: string;
  image: string;
  description: string;
  type: MediaArrType;
};

export type SearchResultsType = {
  page: number
  results: ResultType[]
  total_pages: number
  total_results: number
}

export type ResultType = {
  title?: string
  name?: string
  backdrop_path?: string
  id: number
  original_name?: string
  original_language: string
  overview: string
  poster_path?: string
  media_type: MediaArrType 
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

export const MediaArr = ["movie", "tv"] as const
export type MediaArrType = (typeof MediaArr)[number] 
