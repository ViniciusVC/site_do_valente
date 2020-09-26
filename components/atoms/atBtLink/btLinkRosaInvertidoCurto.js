import React, { Children } from "react";


const btLinkRosaInvetidoCurto = props => {
  var varValue = props.value;
  var varHref = props.href;
  var varWidth = props.width;
  var varWidthMobile = props.mobilewidth;
  return (
      // Botão usado no minha Oi.
      <div>
        <a className="btLinkRosaInvetidoCurto" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosaInvetidoCurto {
		  box-sizing: border-box;
            display: inline-block;
            position: relative;
            width: ${varWidth};
            font-weight: 400;
            font-style: normal;
            font-size: 1rem;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            background-color: transparent;
            color: rgb(216, 36, 130);
            padding: 20px;
            margin-top: 25px;
            margin-bottom: 60px;
            border-width: 1px;
            border-style: solid;
            border-image: initial;
            border-radius: 4px;
            text-decoration: none;
            transition: all 0.3s ease 0s;
            outline: none;
            border-color: rgb(216, 36, 130);
          }
          .btLinkRosaInvetidoCurto:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #ffffff;
            border: solid 1px #d82482;
            background-color: #d82482;
          }
          @media (max-width: 520px) {
            .btLinkRosaInvetidoCurto {
              width: ${varWidthMobile};
            }
          }
        `}</style>
      </div>
  );
};
export default btLinkRosaInvetidoCurto;
