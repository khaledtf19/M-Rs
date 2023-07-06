import Image from "next/image";
import { CardType } from "~/types/utils";
import { SmallPoster } from "~/utils/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardsGrid: React.FC<{ cards: CardType[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 items-center content-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5">
      {cards.map((card) => (
        <Card key={card.id} className=" w-56 justify-center ">
          <CardHeader className="p-0">
            <div className="relative  h-80  ">
              <Image
                alt={card.title}
                className="rounded-t-md"
                fill
                src={SmallPoster + card.image}
                sizes="(max-width: 500px) 100px, (max-width: 900px) 200px, (max-width: 1200px) 300px, "
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsGrid;
