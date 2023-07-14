import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingCardsGrid: React.FC<{ cards: { id: number }[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5">
      {cards.map((card) => (
        <Card
          key={card.id}
          className=" w-56 flex flex-col justify-center gap-5 "
        >
          <CardHeader className="p-0">
            <div className="relative  h-80  ">
              <Skeleton className=" w-full h-full bg-gray-600 rounded-b-none" />
            </div>
          </CardHeader>
          <CardContent className="px-3 flex flex-col gap-2">
            <CardTitle className="  truncate">
              <Skeleton className="w-full h-6" />
            </CardTitle>
            <CardDescription className="flex flex-col gap-2 items-center text-sm  text-ellipsis  overflow-hidden  h-16">
              <Skeleton className="w-32 h-9" />
              <Skeleton className=" w-full h-full" />
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingCardsGrid;
