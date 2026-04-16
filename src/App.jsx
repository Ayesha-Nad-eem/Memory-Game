import { useEffect } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader"
import { useState } from "react";

const cardValues = [
"🐶",
"🐱",
"🦁",
"🐧",
"🐙",
"🦋",
"🐢",
"🦕",
"🐶",
"🐱",
"🦁",
"🐧",
"🐙",
"🦋",
"🐢",
"🦕",
];
function App() {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

    const initializeGame = () => {

      const finalCards= cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
      setCards(finalCards);
    };

    useEffect(() => {
    initializeGame();
    }, []);

    const handleCardClick = (card) => {
      if(card.isFlipped || card.isMatched){
        return;
      }

      const newCards = cards.map((c) => {
        if(c.id === card.id){
          return {...c, isFlipped: true};
        }
        return c;
      });
      setCards(newCards);

      const newFlippedCards = [...flippedCards, card.id];
      setFlippedCards(newFlippedCards);

      if(newFlippedCards.length === 1){
        const firstCard = cards[newFlippedCards[0]];
      }
    }

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  )

}
export default App;
