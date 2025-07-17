import React from 'react'
import { useSelector } from 'react-redux';
import language from '../utils/languageConstant';

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12'>
        <input 
        className='p-4 m-4 col-span-9'
        type='text' placeholder={language[lang].gptSearchPlaceholder}/>
        <button className='bg-red-600 text-white text-lg m-4 py-2 px-4 col-span-3 rounded-lg'>
          {language[lang].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar