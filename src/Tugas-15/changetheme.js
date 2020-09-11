import React from "react"
import {ThemeProvider} from "./tugas15context.js"
import SwictTheme from "./tugas15form"
//import "./tugas15.css"

const ChangeTime = () =>{
  return(
    <>
      <ThemeProvider>
        <SwictTheme/>
      </ThemeProvider>
    </>
  )
}

export default ChangeTime