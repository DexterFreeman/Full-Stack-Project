import React from "react";
import "./BeatboxerCard.scss";
const BeatboxerCard = ({
  name,
  nationality,
  realName,
  sounds,
  achievements,
  image
}) => {
  const achievementsJSX = achievements.map((achievement) => {
    return <li>{achievement.placement + ": "  + achievement.title + " (" + achievement.year  + ") " + achievement.battle_type}</li>;
  });
  const soundsJSX = sounds.map((sound) => {
    return <li>{sound}</li>;
  });

  return (
    <div className="beatboxer-card">
      <img src={image} alt="image of beatboxer" />
      <h1 className="beatboxer-card__title">{name}</h1>
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
