import "./App.css";
import { Suspense } from "react";
// import ThemeProvider from "./Hooks/ThemeProvider";
// const UseImperetiveHandle2 = lazy(() => import("./HooksWebDevSiplified/UseImperetiveHandle2"));
// const UseContext2 = lazy(() => import("./Hooks/UseContext"));
// import UseReducers2 from "./Hooks/UseReducers2";
// import Posts from "./DaveGrayReduxToolkit/features/posts/Posts"
// import AddPostForm from "./DaveGrayReduxToolkit/features/posts/AddPostForm";
import YoutubeForm from "./ReactReactHookForm/youtubeForm";
function App() {
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        {/* <Posts />
        <AddPostForm/> */}
        <YoutubeForm/>
      </Suspense>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//      <ThemeProvider>
//      <Suspense fallback="Loading....">
//         <UseContext />
//         <UseContext2 />
//       </Suspense>
//      </ThemeProvider>
//     </div>
//   );
// }

export default App;

// export const ThemeContext = createContext();
// function App() {
//   const [darkTheme, setDarkTheme] = useState();

//   const toggleTheme = () => {
//     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
//   };

//   return (
//     <div className="App">
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <Suspense fallback="Loading....">
//           <UseContext />
//           <UseContext2 />
//         </Suspense>
//       </ThemeContext.Provider>
//     </div>
//   );
// }

// export default App;
