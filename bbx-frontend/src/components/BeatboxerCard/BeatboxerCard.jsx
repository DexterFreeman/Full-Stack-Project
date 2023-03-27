import React from "react";
import { NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BeatboxerCard.scss";
const BeatboxerCard = ({
  name,
  nationality,
  realName,
  sounds,
  achievements,
  image, 
  id
}) => {
  const achievementsJSX = achievements.map((achievement) => {
    return <li>{achievement.placement + ": "  + achievement.title + " (" + achievement.year  + ") " + achievement.battle_type}</li>;
  });
  const soundsJSX = sounds.map((sound) => {
    return <li>{sound}</li>;
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); 
    navigate(`/beatboxer/${id}`)
  }

  return (
    <div className="beatboxer-card" onClick={(e) => handleClick(e)}>
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
