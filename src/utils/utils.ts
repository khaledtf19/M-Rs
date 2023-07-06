import { auth } from "@clerk/nextjs/dist/types/server-helpers.server";
import { Film, Home, Search, Star, Tv, UserCircle2 } from "lucide-react";

export const PosterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
export const SmallPoster = "https://www.themoviedb.org/t/p/w220_and_h330_face/"

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
