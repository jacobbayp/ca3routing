import '../App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

const URL = "http://localhost:8080/ca3";


function Endpoint3() {


    useEffect(() => {
  fetchItems();
    }, []);
  
    const [name, setName] = useState ([]);
  

  const fetchItems =  async () => { 
    const data = await fetch(URL + '/api/5things/teachersSolution'
    );
  
    const names = await data.json();
    //console.log(items);
    setName(names);
  
  
  }
  
    return (
      <div>
        <ReactBootStrap.Table striped bordered hover variant="sm" >
        <thead>
    <tr>
   
      <th>Name</th>
      <th>Height</th>
      <th>Gender</th>
    </tr>
    </thead><tbody>
  {name.map(test  => (
    <tr key={test.name}>
      
      
      <td>{test.name}</td> <td>{test.height}</td> <td>{test.gender}</td>
      </tr>
      
      
    
  ))}
  </tbody>
  </ReactBootStrap.Table>
      </div>
    );
  }

export default Endpoint3;
