import React, { useState } from 'react'
import { useEffect } from 'react';
import './Home.scss';
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';
import { Container } from 'react-bootstrap';
const Home = () => {
  let [cardJSX, setCardJSX] = useState(null); 
  let [fetchedData, setFetchedData] = useState(); 
  let [filteredCardJSX, setFilteredCardJSX] = useState(""); 
  useState(() => {
    fetch("http://localhost:8081/beatboxers")
    .then((response) => response.json())
    .then((data) => {
      setFetchedData(data);
      setCardJSX(data.map((beatboxer) => {
        return <BeatboxerCard key={beatboxer.id} id={beatboxer.id} name={beatboxer.name} nationality={beatboxer.nationality} realName={beatboxer.realName} sounds={beatboxer.notableSounds} achievements={beatboxer.achievements} image={beatboxer.thumbnail}/>
      }))
    })
  }, [])

  const handleChange = (e) => {
    console.log(e.target.value)
    setFilteredCardJSX(fetchedData.filter((beatboxer) => {
        return beatboxer.name.includes(e.target.value)
    }).map((beatboxer) => {
      return <BeatboxerCard key={beatboxer.id} id={beatboxer.id} name={beatboxer.name} nationality={beatboxer.nationality} realName={beatboxer.realName} sounds={beatboxer.notableSounds} achievements={beatboxer.achievements} image={beatboxer.thumbnail}/>
    }))
  }

  const [animationParent] = useAutoAnimate(); 

  return (
    
    <div className="home-page">
        <NavbarContainer />
        <Container>
        <div className='home-page__searchbar'>
        <label className='home-page__label'>Search 🔎</label>
        <input type="text" name="search" id="search" className='home-page__input' onChange={handleChange}/>
        </div>
        
        <div className="home-page__cards" ref={animationParent}>
          {filteredCardJSX ? filteredCardJSX : cardJSX}
        </div>
        </Container>
    </div>
  )
}

export default Home