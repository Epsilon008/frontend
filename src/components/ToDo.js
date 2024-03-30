import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { useState } from "react";

const ToDo = ({ text, updateMode, deleteToDo }) => {
    const [toDoId, setToDoId] = useState(""); // Utilisation correcte du hook useState
    const [_id, setId] = useState(""); // Utilisation correcte du hook useState
    const [description, setDescription] = useState ("")

    const handleUpdateMode = () => {
        updateMode(toDoId, text,description, setDescription, setToDoId); // Appel de la fonction updateMode avec les nouveaux paramètres
    };

    const handleDeleteToDo = () => {
        deleteToDo(_id, setToDoId); // Appel de la fonction deleteToDo avec les nouveaux paramètres
    };

    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="description">{description}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={handleUpdateMode} /> {/* Utilisation de onClick pour les événements de clic */}
                <AiFillDelete className="icon" onClick={handleDeleteToDo} /> {/* Utilisation de onClick pour les événements de clic */}
            </div>    
        </div>
    );
};

export default ToDo;


// import React from 'react'
// import { BiEdit } from "react-icons/bi"
// import { AiFillDelete } from "react-icons/ai"
// import { useState } from "react";
// import { useEffect } from 'react';
// import { getAllToDo, deleteToDo, updateToDo, addToDo } from '../utils/HandleApi';

// const ToDo = () => {
//     const [toDo, setToDo] = useState([])
//     const [text, setText] = useState("")
//     const [isUpdating, setIsUpdating] = useState(false)
//     const [toDoId, setToDoId] = useState("")
//     const _id = useState("")

//   useEffect(()=> {
//     getAllToDo(setToDo)}, [])
  
//     const updateMode= (_id, text) => {
//       setIsUpdating(true)
//       setText(text)
//       setToDoId(_id)
//     }
//     const handleUpdateMode = () => {
//         updateMode(_id, text); // Appel de la fonction updateMode avec les nouveaux paramètres
//     };

//     const handleDeleteToDo = () => {
//         deleteToDo(_id, setToDo); // Appel de la fonction deleteToDo avec les nouveaux paramètres
//     };

//     return (
//         <div className="App">

//         <div className = "container">
  
//           <h1>ToDo App</h1>
  
//           <div className = "top">
  
//             <input type = "text" 
//             placeholder= "Add ToDo"
//             value={text}
//             onChange={(e) =>setText(e.target.value)}
//             />
            
//            <div 
//             className="add" 
//             onClick={ isUpdating ? 
//               () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating, () => {
//                 getAllToDo(setToDo)
//               setIsUpdating(false)
//               }) 
//             : () => addToDo(text, setText, setToDo)}>
//               {isUpdating ? "Update" : "Add"} 
//            </div>
//            </div>
//           <div className="list">
  
//         {toDo.map((item)=> <ToDo 
//         key={item._id} 
//         text={item.text}
//         updateMode = {() => updateMode(item._id, item.text)} 
//         deleteToDo= {() => deleteToDo(item._id, setToDo)} />)}
            
          
//           </div>
//         </div>
//         <div className="todo">
//             <div className="text">{text}</div>
//             <div className="icons">
//                 <BiEdit className="icon" onClick={handleUpdateMode} /> {/* Utilisation de onClick pour les événements de clic */}
//                 <AiFillDelete className="icon" onClick={handleDeleteToDo} /> {/* Utilisation de onClick pour les événements de clic */}
//             </div>    
//         </div>
//       </div>
//     );
// };
// export default ToDo;

/* eslint-disable react/jsx-no-undef */
// import React from 'react'
// import {BiEdit} from "react-icons/bi"
// import {AiFillDelete} from "react-icons/ai"
// import { useEffect, useState } from "react";




// const ToDo = ({text, updateMode, deleteToDo}) => {
// const  setToDo = useState([])
// const setText = useState("")
// const  setIsUpdating = useState(false)
// const toDoId = useState("")
// const _id = useState("")
//     return (
//         <div className="todo">
//         <div className="text">{text}</div>
//         <div className="icons">
//             <BiEdit className="icon" onclick={updateMode((toDoId, text, setToDo, setText, setIsUpdating))}/>
//             <AiFillDelete className="icon" onclick={deleteToDo(_id, setToDo)}/>
//             </div>    
//         </div>
//     )
// }

// // export default ToDo