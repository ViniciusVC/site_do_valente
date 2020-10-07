
import React from 'react';
import Login from './index.js';


export const moLogin = (modo) => {
  return(
    <div >

      <div className="p"><h2>Login</h2></div>
        
        <Login modo={modo}/>
        <div>
          <p className="p">
            Codigo : {'<Login modo="'+modo+'"/>'}<br/>
            modo={modo}
          </p>
        </div>
        
        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
  )
};

export default moLogin;
