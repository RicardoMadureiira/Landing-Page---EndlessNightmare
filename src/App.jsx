import React from 'react'
import './App.css'
import Nightmare from './assets/image.jpg'
import styled from 'styled-components'

const Background = styled.div`
    background-image: url(${Nightmare});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
`
function App() {

  return(
    <Background className=''>
    <div className="text-center pt-16">

      <h3 className='text-sm text-zinc-100'>the <span className="text-nightmare ">horror game</span> of the year</h3>
      <h1 className='text-nightmare font-normal text-6xl leading-lineExtra font-fontEmily'>ENDLESS <br/> NIGHTMARE </h1>
      <p className="text-xl text-slate-100 opacity-70 mb-20">You need to find the way out or your night will never end!</p>
      <a href="#" className="p-3 underline font-bold text-zinc-100 text-opacity-60  text-xl hover:text-black hover:bg-nightmare hover:text-opacity-100 hover:no-underline m-5">READ MORE</a>
      <a href="#" className="p-3 font-bold text-xl text-black bg-nightmare">PLAY NOW</a>
    </div>
    </Background>
  )
}

export default App
