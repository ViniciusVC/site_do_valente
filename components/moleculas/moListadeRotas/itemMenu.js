import React from 'react'
import BtLink from '../../atoms/atBtLink'

//console.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const href = props.href;
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  //Layout luz verde
  return (
    <BtLink href={StringModo+href+"?regiao="+regiao} value={props.children} estilo="neonItem"/>
  )

//  //Layout escuro
//  return (
//       <li>
//         <a href={StringModo+href+"?regiao="+regiao}>
//           {props.children}
//         </a>
//       <style jsx>{`
//       a {
//         text-decoration: none;
//         font-style: normal;
//         color: #ffffff;
//         }
//         /*
//       .CssRotasProjeto {
//         width: 100%;
//         font-size: 17px;
//       }
//       summary {
//             border-radius: 8px;
//             color: #ffffff;
//             display: block;
//             font-size: 16px;
//             height: 25px;
//             width: 90%;
//             margin: 0;
//             padding: 0px;
//             padding-top: 5px;
//             padding-left: 5px;
//             -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//             -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//             box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//           }
//       summary:hover {
//         padding-left: 9px;
//         background-color: #1d2033;
//           } */
//       ol {
//             width: 100%;
//           }
//       li {
//             border-radius: 8px;
//             color: #ffffff;
//             display: block;
//             font-size: 16px;
//             height: 25px;
//             width: 85%;
//             margin-top: 4px;
//             margin-left: -9px;
//             padding: 0px;
//             padding-top: 5px;
//             padding-left: 5px;
//             -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//             -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//             box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
//           }
//       li:hover {
//         border: solid 2px blue;
//         padding-left: 9px;
//         background-color: #1d2033;
//           }
//     `}</style>
//     </li>
//   )
}

export default ListadeRotas
