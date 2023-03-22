import React from "react";
import "./BeatboxerCard.scss";
const BeatboxerCard = ({
  name,
  nationality,
  realName,
  sounds,
  achievements,
}) => {
  const achievementsJSX = achievements.map((achievement) => {
    return <li>{achievement.placement + ": "  + achievement.title + " (" + achievement.year  + ") " + achievement.battle_type}</li>;
  });
  const soundsJSX = sounds.map((sound) => {
    return <li>{sound}</li>;
  });

  return (
    <div className="beatboxer-card">
      <h1>{name}</h1>
      <h1>{nationality}</h1>
      <h2>({realName})</h2>
      <h3>Famous Sounds:</h3>
      <ul>{soundsJSX}</ul>
      <h3>Achievements:</h3>
      <ul>{achievementsJSX}</ul>
    </div>
  );
};

export default BeatboxerCard;
