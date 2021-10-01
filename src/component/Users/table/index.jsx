import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import api from '../../../services/api';

export default function Table(props){  
    
    async function handleDelete(id){
        const response = await api.delete(`users/${id}`);        
    }

    return (
        <div className="container">
            <table className="table-main">
                <thead>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Detalhes</th>
                </thead>
                <tbody>
                {props.user !== null ? props.user.map(user =>    
                  <tr key={user.ID}>                
                    <td>{user.ID}</td>
                    <td>{user.USERNAME}</td>
                    <td>{user.STATUS}</td>
                    <td>                       
                        <div>
                            <Link to={`/editar-usuario/${user.ID}`}>                            
                                Editar
                            </Link>                            
                        </div>
                        <div>                            
                            <Link to={'/'} onClick={() => handleDelete(user.ID)}>
                                Deletar
                            </Link>
                        </div>                        
                    </td>
                  </tr>     
                  ) 
                : '' }                
                </tbody>             
            </table>
        </div>
    )
}