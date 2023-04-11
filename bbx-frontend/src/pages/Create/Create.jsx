import React from "react";
import "./Create.scss";
import { useState } from "react";
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BeatboxForm from "../../components/BeatboxForm/BeatboxForm";

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
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShow(true);
    const formData = new FormData(event.target);
    if (
      formData.get("year") === "" ||
      formData.get("placement") === "" ||
      formData.get("title") === "" ||
      formData.get("battle_type") === "Select a battle type"
    ) {
      alert("Please fill in all the required fields.");
      return;
    } else if (
      formData.get("year") > new Date().getFullYear() ||
      formData.get("year") < 2000
    ) {
      alert("Please enter a valid year");
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
    navigate("/home");
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
        <BeatboxForm
          handleSubmit={handleSubmit}
          setName={setName}
          setNationality={setNationality}
          setDescription={setDescription}
          setImage={setImage}
          setRealName={setRealName}
          setSounds={setSounds}
          setFeatureVideo={setFeatureVideo}
        />
        <h3>Saved achievements:</h3>
        {formInputs.length > 0 && (
          <div className="create-page__achievements">
            {formInputs.map((input, index) => (
              <ul key={index} className="create-page__achievement">
                <li>
                  <p>Year: {input.year}</p>
                  <p>Placement: {input.placement}</p>
                  <p>Title: {input.title}</p>
                  <p>Battle Type: {input.battle_type}</p>
                </li>
                <Button
                  className="btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </ul>
            ))}
          </div>
        )}
        <Button
          className={show ? "btn-primary btn-submit" : "btn-primary disabled btn-submit"}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Create;
