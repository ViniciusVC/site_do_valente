// header do codigo pré login
import React from 'react';
import HeaderPrimeiraCamada from '../../moleculas/codigo/moHeaders/moHeaderPrimeiraCamada';
import HeaderSegundaCamada from '../../moleculas/codigo/moHeaders/moHeaderSegundaCamada';
import Line from '../../atoms/atLine';
//import HeaderMenu from "../../moleculas/codigo/moHeaders/headerMenu";
import HeaderMenu2 from "../../moleculas/codigo/moHeaders/headerMenu2";
import * as Util from '../../../controller/util.js';
import Head from 'next/head';

const headerCodigo = props => {
    // var cidade = Util.validaProps(props.cidade,"Rio de Janeiro");
    var modo = Util.validaProps(props.modo,"html");
    
    return (
        <>      
        <header className="headerMinhaOi">
                <HeaderPrimeiraCamada modo={modo}/>
                <Line css="linhaDivisao"/>
                <HeaderSegundaCamada modo={modo}/>
        </header>
        <Line css="linhaDivisao"/>
                <HeaderMenu2 modo={modo}/>
        <Line css="linhaDivisao"/>
        <style jsx>{`
                .headerMinhaOi {
                    margin: 0 auto;
                    max-width: 1280px;
                }
                @media(max-width: 520px) {
                    padding: 0 1rem;
                }
        `}</style>
        </>
    )
}

export default headerCodigo