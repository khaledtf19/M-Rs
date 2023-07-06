import { CardType } from "~/types/utils";

import { Card, CardContent, CardHeader } from "../ui/card";

const CardsGrid: React.FC<{ cards: CardType[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
      {cards.map((card) => (
        <Card key={card.id} className=" w-56">
          <CardContent>{card.description}</CardContent>
          <CardHeader>{card.title}</CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CardsGrid;
