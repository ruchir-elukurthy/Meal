import React from "react";

var coinflip = require("coinflip");
const head = "head";
const tail = "tail";
function toss() {
  if (coinflip()) console.log("Heads!");
  else console.log("Tails!");
}

function CoinToss() {
  const [status, setStatus] = useState(false);

  return (
    <button onClick={() => setStatus(!status)}>
      {`Current status: ${status ? "on" : "off"}`}
    </button>
  );
}

export default CoinToss;
