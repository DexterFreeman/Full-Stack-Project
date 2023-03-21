import React from 'react'
import './BeatboxerCard.scss'
const BeatboxerCard = ({name, nationality, realName, sounds, achievements}) => {
  return (
    <div className='beatboxer-card'>
        <h1>{name}</h1>
        <h1>{nationality}</h1>
        <h2>({realName})</h2>
        
                <p>{sounds[0]}</p>
           
          
               <p>{achievements[0].year}</p>
         
    </div>
  )
}

export default BeatboxerCard