import React from "react";
import * as Util from "../../../controller/util.js";

const btSubmit = props => {
  var varValue = Util.validaProps(props.value, "");
  var varHref = Util.validaProps(props.href, "www.oi.com.br");
  var varEstilo = Util.validaProps(props.estilo, "");
  var varCor = Util.validaProps(props.cor, "#000000");

  if (varEstilo == "LinkHeaderMinhaOi") {
    return (
      // Botão do formulário Meus Documentos.
      <span>
        <a className="LinkHeaderMinhaOi" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .LinkHeaderMinhaOi {
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
          .LinkHeaderMinhaOi:hover {
            -webkit-text-decoration: underline;
            text-decoration: underline;
          }
          .LinkHeaderMinhaOi:disabled,
          .LinkHeaderMinhaOi.disabled {
            color: #909090;
          }
          .LinkHeaderMinhaOi:hover {
            cursor: pointer;
          }
          .LinkHeaderMinhaOi:focus {
            outline: none;
          }
          .LinkHeaderMinhaOi:disabled,
          .LinkHeaderMinhaOi.disabled {
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

  }else if(varEstilo=="LinkFooterNavMinhaOi"){
    return(
      // Botão do formulário Meus Documentos.
      <span>
        <a className="LinkFooterNavMinhaOi" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .LinkFooterNavMinhaOi {
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
          .LinkFooterNavMinhaOi:hover {
            -webkit-text-decoration: underline;
            text-decoration: none;
            color: #d82482;
          }
          .LinkFooterNavMinhaOi:hover {
            cursor: pointer;
          }
          .LinkFooterNavMinhaOi:focus {
            outline: none;
          }
          .LinkFooterNavMinhaOi:disabled,
          .LinkFooterNavMinhaOi.disabled {
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
