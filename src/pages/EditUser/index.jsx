import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function CreateUser(props) {
  const history = useHistory()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState([]);

  useEffect(()=> {
    const { id } = props.match.params;
    setId(id);

    getUser(id);          
  }, []);

  async function getUser(id){                
    const response = await api.get(`/users/${id}`);
    const { USERNAME, PASSWORD, STATUS, ID } = response.data;
    setUser(
      {
        id: ID,
        username: USERNAME,
        status: STATUS,
        password: PASSWORD
      }
    );
    setUsername(USERNAME);
    setPassword(PASSWORD);  
  }

  async function handleSubmit(event){
    event.preventDefault();
    const usuario = {
      id: id,
      username: username,
      status: status,
      password: password
    };
        
    const response  = await api.put(`/users/${id}`, usuario).then((response) => {
      history.push('/')
    });        
  }

  return (
    <div className="App">      
        <h1>Editar usuário</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nome</label>
            <input 
              type="text" 
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <label htmlFor="">Status</label>
            <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
              <option value="1">Ativo</option>
              <option value="2">Desativado</option>
            </select>
          </div>
          <div>            
            <input type="submit" />
          </div>
        </form>
    </div>
  );
}

export default CreateUser;
