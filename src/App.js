import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { getAllToDo, deleteToDo, updateToDo, addToDo } from "./utils/HandleApi.js";
import ToDo from './components/ToDo';
function App() {
    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [description, setDescription] = useState ("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [toDoId, setToDoId] = useState("")
  useEffect(()=> {
    getAllToDo(setToDo)}, [])
  
    const updateMode= (_id, text, description) => {
      setIsUpdating(true)
      setText(text)
      setDescription(description)
      setToDoId(_id)
    }

    return (
        <div className="App">

        <div className = "container">
  
          <h1>WebGenius App</h1>
  
          <div className = "top">
  
            <input type = "text" 
            placeholder= "Add ToDo"
            value={text}
            onChange={(e) =>setText(e.target.value)}
            />
           { /* <input type = "description" 
            placeholder= "Add description"
            value={description}
            onChange={(e) =>setDescription(e.target.value)}
            /> */}
           <div 
            className="add" 
            onClick={ isUpdating ? 
              () => updateToDo(toDoId, text,description, setDescription, setToDo, setText, setIsUpdating, () => {
                getAllToDo(setToDo)
              setIsUpdating(false)
              }) 
            : () => addToDo(text,description, setDescription, setText, setToDo)}>
              {isUpdating ? "Update" : "Add"} 
           </div>
           </div>
          <div className="list">
  
        {toDo.map((item)=> <ToDo 
        key={item._id} 
        text={item.text}
        description={item.description}
        updateMode = {() => updateMode(item._id, item.text, item.description)} 
        deleteToDo= {() => deleteToDo(item._id, setToDo)} />)}
            
          
          </div>
        </div>
      </div>
    );
};
export default App;
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import LoginPage from './components/login';
// import SignUpPage from './components/signup';
// import NoPage from './components/NotFoundPage';
// import Footer from './components/Footer';
// import FloatingButton from './components/FloatingButton';
// import WelcomePage from './components/WelcomeBackground';
// import ToDo from './components/ToDo';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/ToDo" element={<ToDo/>} /> 
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/" element={<SignUpPage />} />
//         <Route path="/mainApp" element={<MainApp />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </Router>
//   );
// }

// function MainApp() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="content-container">
//         <Sidebar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/welcomePage" element={<WelcomePage />} />
//           </Routes>
//         </div>
//       </div>
//       <FloatingButton />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// // import { useEffect, useState } from "react";
// // import ToDo from "../src/components/ToDo";
// // import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

// // function App() {

// //   const [toDo, setToDo] = useState([])
// //   const [text, setText] = useState("")
// //   const [isUpdating, setIsUpdating] = useState(false)
// //   const [toDoId, setToDoId] = useState("")

// // useEffect(()=> {
// //   getAllToDo(setToDo)}, [])

// //   const updateMode= (_id, text) => {
// //     setIsUpdating(true)
// //     setText(text)
// //     setToDoId(_id)
// //   }

// //   return (
// //     <div className="App">

// //       <div className = "container">

// //         <h1>ToDo App</h1>

// //         <div className = "top">

// //           <input type = "text" 
// //           placeholder= "Add ToDo"
// //           value={text}
// //           onChange={(e) =>setText(e.target.value)}
// //           />
          
// //          <div 
// //           className="add" 
// //           onClick={ isUpdating ? 
// //             () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating, () => {
// //               getAllToDo(setToDo)
// //             setIsUpdating(false)
// //             }) 
// //           : () => addToDo(text, setText, setToDo)}>
// //             {isUpdating ? "Update" : "Add"} 
// //          </div>
// //          </div>
// //         <div className="list">

// //       {toDo.map((item)=> <ToDo 
// //       key={item._id} 
// //       text={item.text}
// //       updateMode = {() => updateMode(item._id, item.text)} 
// //       deleteToDo= {() => deleteToDo(item._id, setToDo)} />)}
          
        
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
