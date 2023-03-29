import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer'
import './Search.scss'
const Search = () => {


    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("This worked.")
    }
  return (
    <div className='search-page'>
        <NavbarContainer/>
        <Container>
            <h1>Search Beatboxer:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-search">Name</label>
                <input type="text" name="name" id="name-search" />
              
            </form>
        </Container>
    </div>
  )
}

export default Search