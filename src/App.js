import { useState } from 'react';

function App() {
   let nextId = 0;
   const [fName, setFName] = useState("");
   const [lName, setLName] = useState("");
   const [users, setUsers] = useState([]);

   function handleAdd(){
      if(fName != null && lName != null) {
         setUsers([
            ...users,
            {id: nextId++, firstName: fName, lastName: lName}
         ]);
      }
   }

  return (
    <div>
      <form>
         <input type='text' placeholder='Imię'
         value={fName}
         onChange={e => setFName(e.target.value)}
         />
         <input type='text' placeholder='Nazwisko'
         value={lName}
         onChange={e => setLName(e.target.value)}
         />
         <button onClick={handleAdd()}>Dodaj nowego użytkownika</button>
      </form>
      <hr/>
      <table>
         <tr>
            <th>Id</th>
            <th>Imię</th>
            <th>Nazwisko</th>
         </tr>
         {users.map(users => (
            <tr key={users.id}>
               <td>{users.id}</td>
               <td>{users.fName}</td>
               <td>{users.lName}</td>
            </tr>
         ))}
      </table>
    </div>
 );
}


export default App;