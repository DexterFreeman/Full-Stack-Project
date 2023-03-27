import React, { useState } from 'react'
import { useEffect } from 'react';
import './Home.scss';
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import NavbarContainer from '../../containers/navbar/NavbarContainer';
import { Container } from 'react-bootstrap';
const Home = () => {
  let [cardJSX, setCardJSX] = useState(null); 
  
  useState(() => {
    fetch("http://localhost:8081/beatboxers")
    .then((response) => response.json())
    .then((data) => {
      setCardJSX(data.map((beatboxer) => {
        return <BeatboxerCard key={beatboxer.id} id={beatboxer.id} name={beatboxer.name} nationality={beatboxer.nationality} realName={beatboxer.realName} sounds={beatboxer.notableSounds} achievements={beatboxer.achievements} image={beatboxer.thumbnail}/>
      }))
    })
  }, [])

  const [animationParent] = useAutoAnimate(); 

  return (
    
    <div className="home-page">
        <NavbarContainer />
        <Container>
      
        <div className="home-page__cards" ref={animationParent}>
          {cardJSX && cardJSX}
        </div>
        </Container>
    </div>
  )
}

export default Home