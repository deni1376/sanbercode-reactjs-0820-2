import React, {useContext,useEffect} from "react"
import {ThemeProvider,ThemeContext} from "./tugas15context"

const SwictTheme = () =>{
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(()=>{
    if (theme === ""){
      setTheme('nav-light')
    }
})

  const handleChange = (event) =>{
    setTheme(event.target.value)
  }
    
  return(
      <div style={{textAlign:'center'}}>
          <input onChange={handleChange} type='radio' name='theme' value='nav-light'/>Light
          <br/>
          <input onChange={handleChange} type='radio' name='theme' value='nav-dark'/>Dark
      </div>
  )
}


export default SwictTheme