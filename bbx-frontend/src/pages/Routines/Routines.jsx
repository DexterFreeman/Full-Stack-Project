
import React, { useState } from 'react';
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';
import { useParams, useNavigate } from 'react-router-dom';
import './Routines.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap'; 
const Routines = () => {
    const [routinesJSX, setRoutinesJSX] = useState(); 

    useState(() => {
        fetch(`http://localhost:8081/beatboxer/videos`)
        .then((response) => response.json())
        .then((data) => {
            setRoutinesJSX(data.map((video) => { 
                return <div className="ratio ratio-16x9"><iframe width="1280" height="720" src={video.split(",")[0]} title={video.split(",")[1]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            })  
          )
        })

    
      }, [])

  return (
    <div className='routines-page'>
        <NavbarContainer />  
        <Container>
        <div className='routines-page__maincontent'>
            {routinesJSX && routinesJSX}
        </div>
        </Container>
    </div>
  )
}

export default Routines