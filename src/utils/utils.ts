import { auth } from "@clerk/nextjs/dist/types/server-helpers.server";
import { Film, Home, Search, Star, Tv, UserCircle2 } from "lucide-react";

export const PosterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
export const SmallPoster = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

export const mainNavLinks = [
  {
    name: "Home",
    url: "/",
    icon: Home,
    auth: false,
  },
  {
    name: "Search",
    url: "/search",
    icon: Search,
    auth: false,
  },
  {
    name: "Movies",
    url: "/movies",
    icon: Film,
    auth: false,
  },
  {
    name: "TV",
    url: "/tv",
    icon: Tv,
    auth: false,
  },
  {
    name: "Review",
    url: "/review",
    icon: Star,
    auth: true,
  },
  {
    name: "Profile",
    url: "/profile",
    icon: UserCircle2,
    auth: true,
  },
];

export const AllGenres = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
