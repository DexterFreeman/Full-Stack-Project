import React from 'react'
import './Home.scss';
import beatboxers from "../../data/data"
import BeatboxerCard from '../../components/BeatboxerCard/BeatboxerCard';
const Home = () => {
  console.log(beatboxers)
  const test = beatboxers[0]
  const test2 = beatboxers[1]
  return (
    <div className="home-page">
        <header className='home-page__header'>
          <h1>Home page</h1>
        </header>
        <div className="home-page__cards">
          <BeatboxerCard name={test.name} nationality={test.nationality} realName={test.real_name} achievements={test.achievements} sounds={test.notable_sounds} />
          <BeatboxerCard name={test2.name} nationality={test2.nationality} realName={test2.real_name} achievements={test2.achievements} sounds={test2.notable_sounds} />
        </div>
       
    </div>
  )
}

export default Home