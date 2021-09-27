import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Header(){
  return (
    <div className="header-top">
      <div className="itens">
        <Link to={'/'}>
          Home
        </Link>        
      </div>
      <div className="itens">
        <Link to={'/about'}>
          Sobre
        </Link>                
      </div>
      <div className="itens">
        <Link to={'/cadastro-users'}>
          Cadastro
        </Link>        
      </div>      
    </div>
  )
}