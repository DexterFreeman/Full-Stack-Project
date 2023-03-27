import React, { useState } from 'react';
import NavbarContainer from '../../containers/navbar/NavbarContainer';
import { useParams } from 'react-router-dom';
import './Beatboxer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 
import BeatboxerInfo from '../../containers/BeatboxerInfo/BeatboxerInfo';
const Beatboxer = () => {
    let {id} = useParams(); 
    let [beatboxerJSX, setBeatboxerJSX] = useState(null); 
    let [videoURL, setVideoURL] = useState(null);
    let [videoTitle, setVideoTitle] = useState(null);
    useState(() => {
        fetch(`http://localhost:8081/beatboxer/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setBeatboxerJSX(
            <BeatboxerInfo key={data.id} beatboxer={data}/>
          )
          console.log(data.highlightVideo)
          const stringSplit = data.highlightVideo.split(",");
          setVideoURL(stringSplit[0])
          setVideoTitle(stringSplit[1])
        })
      }, [])

  return (
    <div className='beatboxer-page'>
      <NavbarContainer /> 
        <Container>
        
        <div className='beatboxer-page__maincontent'>
            {beatboxerJSX && beatboxerJSX}
            <div className="ratio ratio-16x9">
              <iframe width="1280" height="720" src={videoURL} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>  
        </div>
        </Container>
    </div>
  )
}

export default Beatboxer