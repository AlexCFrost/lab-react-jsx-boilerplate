import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';
// import elephant from "./images/elephant.jpeg";

// const imageData = ()=>{
//   let data = [
//     {
//       id:1,
//       img:elephant
//     },
//     {
//       id:2,
//       img:elephant
//     },
//     {
//       id:3,
//       img:elephant
//     },
//     {
//       id:4,
//       img:elephant
//     }
//   ]
//   return data;
// }


function App() {

  const pic = DataComponent()

  return(
    <div id='grid'>
    {pic.map((el)=>{
      return ( <div key={el.id}>
        <img src={el.img}/>
      </div> )
    })} 
    </div>
  )

}

export default App;
