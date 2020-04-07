import React from "react";
import * as Util from "../../../controller/util.js";

const btSubmit = props => {
  var varValue = Util.validaProps(props.value, "");
  var varHref = Util.validaProps(props.href, "www.oi.com.br");
  var varEstilo = Util.validaProps(props.estilo, "");
  var varCor = Util.validaProps(props.cor, "#000000");

  if (varEstilo == "LinkHeader") {
    return (
      // Botão do formulário Meus Documentos.
      <span>
        <a className="LinkHeader" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .LinkHeader {
            color: #d82482;
            background: transparent;
            -webkit-text-decoration: none;
            text-decoration: none;
            display: inline-block;
            border-radius: 0;
            text-align: left;
            padding: 0;
            border: 0;
            font: inherit;
            font-weight: inherit;
            line-height: 1em;
            -webkit-transition: 0.3s ease;
            transition: 0.3s ease;
            white-space: nowrap;
          }
          .LinkHeader:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
          }
          .LinkHeader:disabled,
          .LinkHeader.disabled {
            color: #909090;
          }
          .LinkHeader:hover {
            cursor: pointer;
          }
          .LinkHeader:focus {
            outline: none;
          }
          .LinkHeader:disabled,
          .LinkHeader.disabled {
            cursor: not-allowed;
            pointer-events: none;
          }
        `}</style>
      </span>
    );
    //transition: background-image: 2s, transform 2s;
    //-webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    //transition-delay: 0.5s //espera pra
    //transition: all 0.8s;
    //-webkit-transition: all 0.8s;
    //-moz-transition: all 0.8s;
    //-o-transition: all 0.8s;
  }else if (varEstilo=="Link2"){
    return(
      // Botão do formulário Meus Documentos.
      <span >
        <a className="Link2" href={varHref}>{varValue}</a>
        <style jsx>{`
            .Link2 {
              color: #d82482;
              background: transparent;
              display: inline-block;
              border-radius: 0;
              text-align: left;
              padding: 0;
              border: 0;
              line-height: 1em;
              -webkit-transition: 0.3s ease;
              transition: 0.3s ease;
              white-space: nowrap;
              font-family: "SimplonBP-Regular";
          }
          .Link2:hover {
              -webkit-text-decoration: underline;
              text-decoration: underline;
          }
          .Link2:disabled,
          .Link2.disabled {
              color: #909090;
          }
          .Link2:hover {
              cursor: pointer;
          }
          .Link2:focus {
              outline: none;
          }
          .Link2:disabled,
          .Link2.disabled {
              cursor: not-allowed;
              pointer-events: none;
          }
        `}</style>
    </span>
    )

  }else if(varEstilo=="LinkFooterNav"){
    return(
      // Botão do formulário Meus Documentos.
      <span>
        <a className="LinkFooterNav" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .LinkFooterNav {
            color: ${varCor};
            background: transparent;
            -webkit-text-decoration: none;
            text-decoration: none;
            display: inline-block;
            border-radius: 0;
            text-align: left;
            padding: 0;
            border: 0;
            font: inherit;
            font-weight: inherit;
            line-height: 1em;
            -webkit-transition: 0.3s ease;
            transition: 0.3s ease;
            white-space: nowrap;
            font-family: Simplon-light;
          }
          .LinkFooterNav:hover {
            -webkit-text-decoration: underline;
            text-decoration: none;
            color: #d82482;
          }
          .LinkFooterNav:hover {
            cursor: pointer;
          }
          .LinkFooterNav:focus {
            outline: none;
          }
          .LinkFooterNav:disabled,
          .LinkFooterNav.disabled {
            cursor: not-allowed;
            pointer-events: none;
          }
        `}</style>
      </span>
    );
    //transition: background-image: 2s, transform 2s;
    //-webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    //transition-delay: 0.5s //espera pra
    //transition: all 0.8s;
    //-webkit-transition: all 0.8s;
    //-moz-transition: all 0.8s;
    //-o-transition: all 0.8s;
  } else {
    return (
      //Sem padrão
      <a href={varHref}>
        <div className="btLink">{varValue}</div>
        <style jsx>{`
          .btLink {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #000000;
            cursor: pointer;
            border-radius: 6px;
            text-align: center;
            border: solid 1px #dbdbdb;
            background-color: #ffffff;
          }
        `}</style>
      </a>
    );
  }
};
export default btSubmit;
