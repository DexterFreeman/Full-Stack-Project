import React from 'react'
import './BeatboxerInfo.scss'
import { Container } from 'react-bootstrap'; 
const BeatboxerInfo = ({beatboxer}) => {
    console.log(beatboxer)

const achievementsJSX = beatboxer.achievements.map((achievement) => {
        return <li>{achievement.placement + ": "  + achievement.title + " (" + achievement.year  + ") " + achievement.battle_type}</li>;
      });
  return (
    <div className='beatboxInfo-page'>
        <Container>
          <div className="container__titleAndDescription">
          <h1 className='beatboxInfo-page__title'>
              {beatboxer.name}
          </h1>
          <p className="beatboxInfo-page__description">{beatboxer.description}</p>
          </div>
         
          <img src={beatboxer.thumbnail} alt="image of beatboxer" srcset="" className='beatboxInfo-page__image' />
        </Container>
        <h3>Achievements:</h3>
          <ul>{achievementsJSX}</ul>
    </div>
  )
}

export default BeatboxerInfo