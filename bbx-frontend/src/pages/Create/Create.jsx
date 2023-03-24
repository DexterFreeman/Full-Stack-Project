import React from 'react'
import './Create.scss'
const Create = () => {
  return (
    <div className='create-page'>
        
         <form>
         <h1 className='create-page__title '>Create new beatboxer </h1>
        <label for="name"> Name </label>
        <input type="text" id="name"></input>
        <label for="nationality">Nationality</label>
        <input type="text" id="nationality"></input>
        <label for="realName">Real name</label>
        <input type="text"  id="realName"></input>
        <button >Go back</button>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Create