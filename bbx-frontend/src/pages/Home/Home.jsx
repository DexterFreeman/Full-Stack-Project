import React from 'react'
import './Home.scss';
import data from '../../data/data.json';
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
const Home = () => {
  const cardJSX = data.map((bbxObject) => {return <BeatboxerCard name={bbxObject.name} nationality={bbxObject.nationality} realName={bbxObject.real_name} achievements={bbxObject.achievements} sounds={bbxObject.notable_sounds} image={bbxObject.thumbnail} />})

  return (
    <div className="home-page">
        <header className='home-page__header'>
          <h1>Home page</h1>
        </header>
        <div className="home-page__cards">
          {cardJSX && cardJSX}
        </div>
       
    </div>
  )
}

export default Home