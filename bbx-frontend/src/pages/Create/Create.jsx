import React from 'react'
import './Create.scss'
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';
const Create = () => {
  return (
    <div className='create-page'>
        <NavbarContainer />
         <form>
         <h1 className='create-page__title '>Add new beatboxer </h1>
         <div className="create-page__inputsContainer">
            <label for="name"> Name </label>
            <input type="text" required id="name"></input>
            <label for="nationality">Nationality</label>
            <input type="text" required id="nationality"></input>
            <label for="realName">Real name</label>
            <input type="text" id="realName"></input>
        </div>
        <div className="create-page__inputsContainer">
        <label for="myFile">Image</label>
        <input type="file" required id="myFile" name="filename"  className='create-page__upload'/>
            <label for="sounds">Sounds</label>
            <input type="text" required id="sounds"></input>
            <label for="achievements">Achievements</label>
            <input type="text" required id="achievements"></input>
        </div>
        <button >Go back</button>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Create