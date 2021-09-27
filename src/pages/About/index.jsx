import { useEffect, useState } from 'react';
import api from '../../services/api';

import Table from '../../component/Users/table/index';

function About() {
  const [users, setUsers] = useState([]);
  
  async function handleSubmit(){
    const response  = await api.post('/users').then((response) => {
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      }     
    });        
  }

  return (
    <div className="App">      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni temporibus nemo quas, dolores est impedit iste tempore ducimus sint voluptatem provident magnam molestias laboriosam sed hic, qui doloremque minus?</p>        
    </div>
  );
}

export default About;
