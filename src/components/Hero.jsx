import React from 'react'
import {logoo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-5'>
            {/* <img src = "src\assets\ARTICLE-SUM.png" alt = "sumz_logo" className= "w-28 object-contain" /> */}
            {/* <img src = ></img> */}
            <img src={logoo} alt='sumz_logo' className='w-28 object-contain' />
            <button type = "button" onClick={()=> window.open('https://github.com/dakshh04')} className='black_btn'> 
                Github 
            </button>
        </nav>

        <h1 className='head_text'> 
            Summarize Articles With <br
            className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAi GPT-4</span>
        </h1>

        <h2 className= "desc font-bold red_gradient">
            Simplify Your Work By Summarizing Your Articles
            <br className='max-md:hidden'/><span className='red_gradient'>No Signup or Login Required </span>
        </h2>
    </header>
  )
}

export default Hero