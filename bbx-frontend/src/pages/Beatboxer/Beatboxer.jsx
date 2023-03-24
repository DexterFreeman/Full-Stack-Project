import React, { useState } from 'react'
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
import NavbarContainer from '../../containers/navbar/NavbarContainer';
import { useParams } from 'react-router-dom';
import './Beatboxer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 
const Beatboxer = () => {
    let {id} = useParams(); 
    let [beatboxerJSX, setBeatboxerJSX] = useState(null); 
    
    useState(() => {
        fetch(`http://localhost:8081/beatboxer/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setBeatboxerJSX(
            <BeatboxerCard key={data.id} name={data.name} nationality={data.nationality} realName={data.realName} sounds={data.notableSounds} achievements={data.achievements} image={data.thumbnail}/>
          )
        })
      }, [])

  return (
    <div className='beatboxer-page'>
        <Container>
        <NavbarContainer /> 
        <div className='beatboxer-page__maincontent'>
            {beatboxerJSX && beatboxerJSX}
            <div className="ratio ratio-16x9">
                <iframe width="1863" height="770" src="https://www.youtube.com/embed/6ZHAoMYMHac" title="Colaps 🇫🇷 | Winner&#39;s Compilation | GRAND BEATBOX BATTLE 2021: WORLD LEAGUE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>  
        </div>
        </Container>
    </div>
  )
}

export default Beatboxer