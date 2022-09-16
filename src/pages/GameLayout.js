import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";

function GameLayout() {
  const cards = [
    { color: "red", number: "1" },
    { color: "red", number: "2" },
    { color: "red", number: "3" },
    { color: "red", number: "4" },
    { color: "red", number: "5" },
    { color: "red", number: "6" },
    { color: "red", number: "7" },
    { color: "red", number: "8" },
    { color: "red", number: "9" },
    { color: "red", number: "+2" },
    { color: "red", number: "+4" },
    { color: "green", number: "1" },
    { color: "green", number: "2" },
    { color: "green", number: "3" },
    { color: "green", number: "4" },
    { color: "green", number: "5" },
    { color: "green", number: "6" },
    { color: "green", number: "7" },
    { color: "green", number: "8" },
    { color: "green", number: "9" },
    { color: "green", number: "+2" },
    { color: "green", number: "+4" },
    { color: "yellow", number: "1" },
    { color: "yellow", number: "2" },
    { color: "yellow", number: "3" },
    { color: "yellow", number: "4" },
    { color: "yellow", number: "5" },
    { color: "yellow", number: "6" },
    { color: "yellow", number: "7" },
    { color: "yellow", number: "8" },
    { color: "yellow", number: "9" },
    { color: "yellow", number: "+2" },
    { color: "yellow", number: "+4" },
    { color: "blue", number: "1" },
    { color: "blue", number: "2" },
    { color: "blue", number: "3" },
    { color: "blue", number: "4" },
    { color: "blue", number: "5" },
    { color: "blue", number: "6" },
    { color: "blue", number: "7" },
    { color: "blue", number: "8" },
    { color: "blue", number: "9" },
    { color: "blue", number: "+2" },
    { color: "blue", number: "+4" },
  ];
  const [stack, setStack] = useState([]);
  const [playerDeck, setPlayerDeck] = useState({
    player1: [],
    player2: [],
  });
  const [baseCard, setBaseCard] = useState();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    setStack(cards);
  }, []);

  useEffect(() => {
    stack.length === 44 && setBaseCard(PickCard());
  }, [stack]);

  useEffect(() => {
    baseCard && shareCard();
  }, [baseCard]);

  const PickCard = () => {
    const tempStack = stack;
    let givenCard;
    const randIdx = getRandomInt(stack.length);
    let randomCard = stack[randIdx];
    givenCard = randomCard;
    tempStack.splice(randIdx, 1);
    setStack([...tempStack]);
    return givenCard;
  };

  const shareCard = () => {
    let player1Deck = playerDeck.player1;
    let player2Deck = playerDeck.player2;
    for (let i = 0; i < 8; i++) {
      i % 2 ? player1Deck.push(PickCard()) : player2Deck.push(PickCard());
    }
    setPlayerDeck({ player2: player2Deck, player1: player1Deck });
  };

  return (
    <div className="min-h-screen grid grid-rows-2 gap-2">
      <div className="grid grid-cols-2 w-full gap-2 relative justify-center items-center">
        <div className="flex flex-col items-center">
          {baseCard && <Card color={baseCard.color} number={baseCard.number} id={`baseCard`} />}
        </div>
        <div className="flex flex-col items-center">
          {stack.length && <Card color="black" id="pickCard" />}
          <p className="text-xs">Remaining Card : {stack.length}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col px-6">
          <p className="">P1 Decks</p>
          <div className="overflow-x-scroll flex gap-2 py-4">
            {playerDeck.player1.map((card, idx) => (
              <Card
                color={card.color}
                number={card.number}
                key={`player1-${idx}`}
                id={`player1-${idx}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col px-6">
          <p className="">P2 Decks</p>
          <div className="overflow-x-scroll flex gap-2 py-4">
            {playerDeck.player2.map((card, idx) => (
              <Card
                color={card.color}
                number={card.number}
                key={`player2-${idx}`}
                id={`player2-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLayout;
