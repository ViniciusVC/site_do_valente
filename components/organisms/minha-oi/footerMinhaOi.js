// layout dedo codigo pré login
import React from 'react'
import Line from '../../atoms/atLine';
import FooterPrimeiraCamada from '../../moleculas/codigo/moFooterPrimeiraCamada';
import FooterSegundaCamada from '../../moleculas/codigo/moFooterSegundaCamada';
import * as Util from '../../../controller/util.js';

const footerMinhaOi = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <footer className="footerMinhaOi">
           
            <FooterPrimeiraCamada modo={modo}/>
            <Line css="linhaDivisao"/>
            <FooterSegundaCamada modo={modo}/>
            <style jsx>{`
                .footerMinhaOi {
                    margin: 0 auto;
                    max-width: 1280px;
                    width: 100%;
                }
            `}</style>
        </footer>
    )
}
export default footerMinhaOi
