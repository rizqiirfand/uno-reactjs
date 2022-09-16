import React, { useEffect } from "react";

function Card(props) {
  const type = props.type;
  const action = props.action;
  const bgCard = props.color === "black" ? "bg-black" : `bg-${props.color}`;
  const id = props.id;
  useEffect(() => {
    document.getElementById(id).classList.add(bgCard);
  }, []);
  return (
    <div
      className={`${bgCard} rounded flex min-h-[200px] min-w-[150px] p-4 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all`}
      onClick={() => action && action()}
      id={id}
    >
      <div className="border-2 text-xl font-bold font-serif flex flex-col flex-1 justify-between text-white border-white rounded">
        <p className={`self-start -ml-4 -mt-4 p-2 ${bgCard} transition-all`}>{props.number}</p>
        <p className={`self-center`}>TES</p>
        <p className={`self-end -mr-4 -mb-4 p-2 ${bgCard} transition-all`}>{props.number}</p>
      </div>
    </div>
  );
}

export default Card;
