import { CardType } from "~/types/utils";

import { Card, CardContent, CardHeader } from "../ui/card";

const CardsGrid: React.FC<{ cards: CardType[] }> = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id}>
          <CardContent>
            {card.description}
          </CardContent>
          <CardHeader>{card.title}</CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CardsGrid;
