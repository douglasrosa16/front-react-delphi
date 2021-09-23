import { useEffect, useState } from 'react';
import api from '../../services/api';

import Table from '../../component/Users/table/index';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  async function getUsers(){
    const response  = await api.get('/users').then((response) => {
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      }     
    });        
  }

  return (
    <div className="App">      
      <Table user={users}/>        
    </div>
  );
}

export default UsersList;
