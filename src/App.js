import "./App.css";
import baner from "./assets/baner.png";
import { useState } from 'react';


let nextId = 1;

function App() {

   const [fName, setFName] = useState("");
   const [lName, setLName] = useState("");
   const [users, setUsers] = useState([]);
   const [hidden, setHidden] = useState(false);


  return (
    <>            
    <img src={baner}></img>
      <div className="form">
         <div className="parent">
            <input placeholder='Imię'
            value={fName}
            onChange={e => setFName(e.target.value)}
            />
            <input placeholder='Nazwisko'
            value={lName}
            onChange={e => setLName(e.target.value)}
            />
            <button onClick={() => {
               if(lName != "" && fName != ""){
                  setUsers([
                  ...users,
                  {id: nextId++, firstName: fName, lastName: lName}
                  ]);
                  setFName("");
                  setLName("");
                  setHidden(false);
               }
               else{
               setHidden(true);
               }
            }}>Dodaj nowego użytkownika</button>
            {hidden ? <span id="hide">Wszystkie pola muszą być wypełnione</span>:""}
         </div>
      </div>
         
      <hr/>
      <div className="table">
         <table>
         <tr>
            <th>Id</th>
            <th>Imię</th>
            <th>Nazwisko</th>
         </tr>
         {users.map(users => (
            <tr key={users.id}>
               <td>{users.id}</td>
               <td>{users.firstName}</td>
               <td>{users.lastName}</td>
            </tr>
         ))}
         </table>
      </div>
      
   </>
 );
}


export default App;