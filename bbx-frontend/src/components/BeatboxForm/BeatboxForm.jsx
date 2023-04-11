import React from "react";
import { Button } from "react-bootstrap";
import "./BeatboxForm.scss";
const BeatboxForm = ({
  handleSubmit,
  setName,
  setDescription,
  setNationality,
  setImage,
  setRealName,
  setSounds,
  setFeatureVideo,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="create-page__input-container">
        <label for="name"> Name </label>
        <input
          type="text"
          required
          id="name"
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
          onChange={(e) => {
            setFeatureVideo(e.target.value);
          }}
        ></input>
      </div>
      <div className="form__achievement-inputs">
        <h2>Add achievements:</h2>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" required />

        <label htmlFor="placement">Placement:</label>
        <input type="text" id="placement" name="placement" required />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="battle_type">Battle Type:</label>
        <select
          id="battle_type"
          defaultValue={"Select a battle type"}
          name="battle_type"
          required
        >
          <option value="">Select a battle type</option>
          <option value="Solo">Solo</option>
          <option value="Tag Team">Tag Team</option>
          <option value="Loop Station">Loop Station</option>
          <option value="7 To Smoke">7 To Smoke</option>
        </select>
        <Button className="btn" type="submit">
          Add Achievement
        </Button>
      </div>
    </form>
  );
};

export default BeatboxForm;
