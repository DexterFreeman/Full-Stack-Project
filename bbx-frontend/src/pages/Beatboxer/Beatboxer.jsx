import React, { useState } from 'react';
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';
import { useParams, useNavigate } from 'react-router-dom';
import './Beatboxer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap'; 
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
          const stringSplit = data.highlightVideo.split(",");
          setVideoURL(stringSplit[0])
          setVideoTitle(stringSplit[1])
        })
      }, [])
      const navigate = useNavigate(); 
      const handleEdit = () => {
        console.log("EDIT")
      }
      const handleDelete = () => {
        fetch(`http://localhost:8081/beatboxer/delete/${id}`, {
          method: "DELETE"
        })
        .then((response) => {
          if (response){
            navigate("/home");
            
          }
          else{
            console.log("Error didnt delete")
          }
        })
      }

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

        <Button className="btn btn-primary" onClick={handleEdit}>Edit</Button>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
        </Container>
    </div>
  )
}

export default Beatboxer