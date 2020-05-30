import { css } from 'emotion';

export const loginBox = css`
  position: relative;
  left: 43em;
  top: 12em;
`;

export const loginContainer = css`
  .LoginText {
      font-style: normal;
      margin-top: 11px;
      color: #2dbfbd;
      font-size: 14px;
      text-transform: capitalize;
  }
  .fields {
    width: 200%;
    margin-top: 2rem;
       button{
        background-image: linear-gradient(110deg, #2dbfbd -20%, #316f98 57%, #248ba5 210%);
        color:white;
        border-radius: 4px;
        height: auto;
        padding: 8px;
        margin-top: 0.5em;
        border: 0;
        position:unset!important;
        width:110%;
        &:hover{
            background:#2dbfbd;
       }
    }
    .field {
      width: 100%;
      .input {
        box-shadow: unset;
        font-family: 'Montserrat',sans-serif;
        border: solid 1px white;
        border-radius: 6px;
        padding: 21px 15px;
        background: #eaeaeaab;
        border: solid 1px rgba(45, 191, 189, 0.3);
        width:100%;
      }
    }
  }
}
`;
