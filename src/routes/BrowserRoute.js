import React from 'react'
import { useSelector } from 'react-redux';
import GptSeachPage from '../components/GptSeachPage';
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'

const BrowserRoute = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  return (
    <>
    { showGptSearch ? 
      (<GptSeachPage/>)
      :
      (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )
    }  
    </>  
  )
}

export default BrowserRoute