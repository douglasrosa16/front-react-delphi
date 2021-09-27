import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


function CreateUser() {
  const history = useHistory()

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [status, setStatus] = useState([]);
  
  async function handleSubmit(event){
    event.preventDefault();
    const users = {        
        username: username,
        password: password,
        status: 1
      };

    const response  = await api.post('/users', users).then((response) => {
      history.push('/')
    });        
  }

  return (
    <div className="App">      
        <h1>Criar usuário</h1>
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
            <select name="" id="">
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
