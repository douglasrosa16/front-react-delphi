import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Table(props){    
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
                  <tr key={props.user.ID}>                
                    <td>{user.ID}</td>
                    <td>{user.USERNAME}</td>
                    <td>{user.STATUS}</td>
                    <td>                       
                        <Link to={`/editar-usuario/${user.ID}`}>                            
                            Editar
                        </Link>
                    </td>
                  </tr>     
                  ) 
                : '' }                
                </tbody>             
            </table>
        </div>
    )


}