import React, { useEffect, useState } from 'react';
import './App.css';


interface Itodo{
  userId : number;
  id : number;
  title : string;
  completed :boolean
}
   
      


function App() {
  const[data , setData] =useState<Itodo[]>([])

  useEffect(() =>{
    //using then
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response)
    .then((e) => e.json())
    .then((e) => {
      console.log(e)
      return setData(e as Itodo[])

     

    })

  },[])

  console.log("data : " , data)
  return (
    <div className="App">
      <header className="App-header">

        {
                 data.map(todo  => <div key={todo.id}>
                                        <p>{todo.userId}</p> 
                                        <li >{todo.title}</li>
                                    </div>                       
                
                 )              

        }
        
      </header>
    </div>
  );
}

export default App;
