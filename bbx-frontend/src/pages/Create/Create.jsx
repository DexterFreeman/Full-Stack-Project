import React from "react";
import "./Create.scss";
import { useState } from "react";
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";
import { Button, Container } from "react-bootstrap";

const Create = () => {
  const [formInputs, setFormInputs] = useState([]);
  const [name, setName] = useState();
  const [nationality, setNationality] = useState();
  const [realName, setRealName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [sounds, setSounds] = useState();
  const [featureVideo, setFeatureVideo] = useState();
  const [show, setShow] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShow(true)
    const formData = new FormData(event.target);

    if (
      formData.get("year") === "" ||
      formData.get("placement") === "" ||
      formData.get("title") === "" ||
      formData.get("battle_type") === "Select a battle type"
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    const postData = {
      year: formData.get("year"),
      placement: formData.get("placement"),
      title: formData.get("title"),
      battle_type: formData.get("battle_type"),
    };

    setFormInputs([...formInputs, postData]);

    event.target.elements.battle_type.value = "Select a battle type";
    event.target.elements.title.value = "";
    event.target.elements.placement.value = "";
    event.target.elements.year.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);

    fetch("http://localhost:8081/beatboxer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        nationality: `${nationality}`,
        realName: `${realName}`,
        description: `${description}`,
        highlightVideo: `${featureVideo}`,
        thumbnail: `${image}`,
        notableSounds: sounds.split(","),
        achievements: formInputs,
      }),
    });
  };

  const handleDelete = (index) => {
    const newBattles = [...formInputs];
    newBattles.splice(index, 1);
    setFormInputs(newBattles);
  };

  return (
    <div className="create-page">
      <NavbarContainer />
      <Container>
        <h1 className="create-page__title ">Create new beatboxer </h1>
        <form onSubmit={handleSubmit}>
          <div className="create-page__input-container">
            <label for="name"> Name </label>
            <input
              type="text"
              required
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="create-page__input-container">
            <label for="nationality">Nationality</label>
            <input
              type="text"
              required
              id="nationality"
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
              }}
            ></input>
          </div>
          <div className="create-page__input-container">
            <label for="realName">Real name</label>
            <input
              type="text"
              id="realName"
              value={realName}
              onChange={(e) => {
                setRealName(e.target.value);
              }}
            ></input>
          </div>
          <div className="create-page__input-container">
            <label for="desc">Description</label>
            <input
              type="text"
              id="desc"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <div className="create-page__input-container">
            <label for="image">Image</label>
            <input
              type="text"
              required
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            </div> 
            <div className="create-page__input-container">
            <label for="sounds">Sounds</label>
            <input
              type="text"
              required
              id="sounds"
              value={sounds}
              onChange={(e) => {
                setSounds(e.target.value);
              }}
            ></input>
            </div>
            <div className="create-page__input-container">
            <label for="video">Feature Video Embed</label>
            <input
              type="text"
              required
              id="video"
              value={featureVideo}
              onChange={(e) => {
                setFeatureVideo(e.target.value);
              }}
            ></input>
          </div>
          <div className="create-page__achievement-inputs">
            <h2>Add achievements:</h2>
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" name="year" required />

          <label htmlFor="placement">Placement:</label>
          <input type="text" id="placement" name="placement" required />

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="battle_type">Battle Type:</label>
          <select id="battle_type" name="battle_type" required>
            <option value="">Select a battle type</option>
            <option value="Solo">Solo</option>
            <option value="Tag Team">Tag Team</option>
            <option value="Loop Station">Loop Station</option>
            <option value="7 To Smoke">7 To Smoke</option>
          </select>
          <Button type="submit">Add Achievement</Button>
          </div>
          
        </form>
        <h3>Saved achievements:</h3>
        {formInputs.length > 0 && (
          <div>
            
            <ul>
              {formInputs.map((input, index) => (
                <div key={index} className="saved-achievement">
                  <li>
                    <p>Year: {input.year}</p>
                    <p>Placement: {input.placement}</p>
                    <p>Title: {input.title}</p>
                    <p>Battle Type: {input.battle_type}</p>
                  </li>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        )}
     
          <Button className={show ? "btn btn-primary" : "btn-primary disabled"}  onClick={handleFormSubmit}>
            Submit
          </Button>
    
      </Container>
    </div>
  );
};

export default Create;
