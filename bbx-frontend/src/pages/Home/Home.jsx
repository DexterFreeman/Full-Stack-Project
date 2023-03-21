import React from 'react'
import './Home.scss';
import data from '../../data/data.json';
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
const Home = () => {
  console.log(data)
  return (
    <div className="home-page">
        <header className='home-page__header'>
          <h1>Home page</h1>
        </header>
        <div className="home-page__cards">
          <BeatboxerCard name={data[0].name} nationality={data[0].nationality} realName={data[0].real_name} achievements={data[0].achievements} sounds={data[0].notable_sounds} />
          <BeatboxerCard name={data[1].name} nationality={data[1].nationality} realName={data[1].real_name} achievements={data[1].achievements} sounds={data[1].notable_sounds} /> 
        </div>
       
    </div>
  )
}

export default Home