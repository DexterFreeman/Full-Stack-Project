import React, { useState } from 'react'
import { useEffect } from 'react';
import './Home.scss';
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';

const Home = () => {


  let [data, setData] = useState(null); 
  let [cardJSX, setCardJSX] = useState(null); 
  
  useState(() => {
    fetch("http://localhost:8081/beatboxers")
    .then((response) => response.json())
    .then((data) => {
      setCardJSX(data.map((beatboxer) => {
        return <BeatboxerCard key={beatboxer.id} name={beatboxer.name} nationality={beatboxer.nationality} realName={beatboxer.realName} sounds={beatboxer.notableSounds} achievements={beatboxer.achievements} image={beatboxer.thumbnail}/>
      }))
    })
  }, [])


  return (
    <div className="home-page">
        <header className='home-page__header'>
          <h1>Home page</h1>
        </header>
        <div className="home-page__cards">
          {cardJSX && cardJSX}
        </div>
       
    </div>
  )
}

export default Home