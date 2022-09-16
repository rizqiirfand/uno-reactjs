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
  const [playerDeck, setPlayerDeck] = useState({ player1: [], player2: [] });
  const [baseCard, setBaseCard] = useState();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => setStack(cards), []);

  //   const Deck = () => {
  //     let wrapper = [];
  //     for (const color in stack) {
  //       if (stack.hasOwnProperty(color)) {
  //         stack[color].forEach((number) => {
  //           wrapper.push(<Card color={color} number={number} />);
  //         });
  //       }
  //     }
  //     return wrapper;
  //   };
  const PickCard = (setCardState, cardState = false) => {
    const tempStack = stack;
    let givenCard;
    const randIdx = getRandomInt(stack.length);
    let randomCard = stack[randIdx];
    givenCard = randomCard;
    tempStack.splice(randIdx, 1);
    setStack([...tempStack]);
    if (!cardState) {
      setCardState(givenCard);
    } else {
      const temp = cardState;
      setCardState([...temp]);
    }
    // console.log(givenCard);
  };
  return (
    <div className="min-h-screen flex gap-2 flex-wrap justify-center items-center">
      <Card color="black" action={() => PickCard(setBaseCard)} id="pickCard" />
      <div>
        {baseCard && <Card color={baseCard.color} number={baseCard.number} id={`baseCard`} />}
      </div>
      {/* <Deck /> */}
      {/* {Object.keys(stack).forEach(
        (color) =>
          //   console.log(stack[color])
          // stack[color].forEach((number) => <Card color={color} number={number} />)
          stack[color].forEach((number) => (
            <p>
              {color}:{number}
            </p>
          ))
        // stack[color].forEach((number) => alert(`color ${color} : ${number}`))
      )} */}
    </div>
  );
}

export default GameLayout;
