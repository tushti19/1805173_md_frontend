import React from 'react';
import './SlidebarStyle.css'
import home from './home_w.svg'
import AboutMe from './aboutme_w.svg'

function Slidebar(props)  {

  function handleChange() {
      props.onChange("1");
  }
  function h1(){
    props.onChange("2")
  }
    return (
    <div className = "slidebar" >
        <h3>1805173</h3>
        <div className='homeImgDiv' onClick={handleChange} >
        <img className='homeImg' src={home} alt='Home'></img>
        Home
      </div>

      <div className='aboutMeImgDiv' onClick = {h1}>
        <img className='aboutMeImg' src={AboutMe} alt='About Me'></img>
        About Me
      </div>
    </div>
     );
}
export default Slidebar;