import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Rahul", "Pant", "Jadeja", "Ashwin"];
  const evenTeam = ["Rohit", "Shreyas", "Bumrah", "Hardik", "Gill"];

  const [odd1, odd2, ...oddRest] = oddTeam;
  const [even1, even2, ...evenRest] = evenTeam;

  const T20players = ["Surya", "Hardik", "Pant"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {oddRest.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {evenRest.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
