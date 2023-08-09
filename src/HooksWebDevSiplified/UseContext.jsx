// import React, { useContext } from "react";
// import { ThemeContext } from "../App";
import {useTheme , useThemeUpdate} from "./ThemeProvider"

function UseContext() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Use Context</div>
    </>
  );
}

export default UseContext;


export function UseContext2() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
      backgroundColor: darkTheme ? "#333" : "#CCC",
      color: darkTheme ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
    return (
      <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>Use Context</div>
      </>
    );
  }



// export  function UseContext2(){
//     const darkTheme = useContext(ThemeContext);
//     const themeStyles = {
//         backgroundColor: darkTheme ? "#333" : "#CCC",
//         color: darkTheme ? "#CCC" : "#333",
//         padding: "2rem",
//         margin: "2rem",
//       };
//     return (
//         <>
//           <div style={themeStyles}>Use Context</div>
//         </>
//     )  
// }
