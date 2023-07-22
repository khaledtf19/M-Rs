import Image from "next/image";
import type { CardType } from "~/types/utils";
import { api } from "~/utils/api";
import { SmallPoster } from "~/utils/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRouter } from "next/router";

const CardsGrid: React.FC<{ cards?: CardType[] }> = ({ cards }) => {
  const router = useRouter();
  const mutateMedia = api.media.getOrCreateMedia.useMutation({onSuccess: (data)=>{
    router.push(`/media/${data.id}`);

  }});

  if (!cards) return null;
  return (
    <div className="grid grid-cols-1  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5">
      {cards.map((card) => (
        <Card
          key={card.id}
          className=" w-56 flex flex-col justify-center gap-5 "
        >
          <CardHeader className="p-0">
            <div className="relative  h-80  ">
              <Image
                alt={card.title}
                className="rounded-t-md"
                fill
                src={SmallPoster + card.image}
                sizes="(max-width: 900px) 300px, (max-width: 1200px) 400px "
              />
            </div>
          </CardHeader>
          <CardContent className="px-3 flex flex-col gap-2">
            <CardTitle
              className="truncate hover:cursor-pointer hover:text-blue-600"
              onClick={() => {
                mutateMedia.mutate({ MDBId: card.id, type: card.type });
              }}
            >
              {card.title}
            </CardTitle>
            <CardDescription className="flex flex-col gap-2 items-center text-sm  text-ellipsis  overflow-hidden  h-16">
              <span>{card.releaseDate ? card.releaseDate : "-"}</span>
              <span>{card.description}</span>
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsGrid;
