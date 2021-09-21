import React, { useEffect, useState } from 'react';
import './index.css';

export default function Table(props){
    
    return (
        <div className="container">
            <table className="table-main">
                <thead>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Status</th>
                </thead>
                <tbody>
                {props.user != null ? props.user.map(user =>    
                  <tr>                
                    <td>{user.ID}</td>
                    <td>{user.USERNAME}</td>
                    <td>{user.STATUS}</td>
                  </tr>               
                  ) 
                : '' }                
                </tbody>             
            </table>
        </div>
    )


}