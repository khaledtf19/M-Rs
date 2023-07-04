import { CardType } from "~/types/utils"

const Card:React.FC<{card: CardType}> = ({card})=>{
  return (
    <div>{card.title}</div>
  )
}

export default Card
