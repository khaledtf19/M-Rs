import { useState } from "react";
import CardsGrid from "~/components/card/CardsGrid";
import { Input } from "~/components/ui/input";
import { CardType } from "~/types/utils";
import { SmallPoster } from "~/utils/utils";

const fakeData = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },{
    id: "2",
    title: "Title 2",
    description: "Description 2",
    image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },{
    id: "3",
    title: "Title 3",
    description: "Description 3",
    image:"8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },{
    id: "4",
    title: "Title 4",
    description: "Description 4",
    image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },{
    id: "5",
    title: "Title 5",
    description: "Description 5",
    image:"8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  }
] as CardType[];

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <CardsGrid cards={fakeData} />
    </div>
  );
};

export default SearchPage;
