import React from 'react'
import './TableStyle.css'

export default function Table() {
    return (
    <>
      <div id = "meeting">About Me</div>
      <div className = "aboutMeDiv">
          Name: Tushti Gulati
          <br></br>
          Roll: 1805173
          <br></br>
          Github profile: github.com/tushti19
          <br></br>
          Skills: Javascript, HTML, NodeJS, etc.
          <br></br><br></br>

          Projects:
          <br></br>
          1. My porfolio/personal website: Tech Enthusiast
          <br></br>
          2. Some project : Chit Chat App(Android Studio, Fireabse)
          <br></br>
          3. Some other project : Invoice Management App(React, redux, JDBC, Servlets)
          <br></br>

      </div>
      </>
    )
  }