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

  console.log(name + nationality, realName, sounds, achievements, image, id);
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
      <div className="beatboxer-card__sounds">
      <ul>{soundsJSX}</ul>
      </div>
      <h3>Achievements:</h3>
      <div className="beatboxer-card__achievements">
        <ul>{achievementsJSX}</ul>
      </div>
      
    </div>
  );
};

export default BeatboxerCard;
