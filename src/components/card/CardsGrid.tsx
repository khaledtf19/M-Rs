import { CardType } from "~/types/utils"

const CardsGrid:React.FC<{cards: CardType[]}> = ({cards}) => {
  return (
    <div>
    {cards.map((card) => (
      <div>{card.title}</div>      
    ))}
    </div>
  )
}

export default CardsGrid
