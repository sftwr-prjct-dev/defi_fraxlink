import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar__header">
            <img className="sidebar__logo" size={45} src="/img/FRAX_Logo_White.e2bdd44d.svg" alt="Logo img" />
            <div className="sidebar__logo-text">Frax Finance</div>
          </div>
          <div className="flex--center background--black border-bottom--gray">
            <div className="flex--center flex--9">
              <div className="icon-svg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" color="#F03D3D" size={10} height={10} width={10} xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(240, 61, 61)"}}><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>
              </div>
              <a target="_self" href="javascript:void(0)" className="text--red font--10" color="#F03D3D">Not Connected</a>
            </div>
            <div className="flex--center flex--3 border-left--gray">
              <div className="icon-svg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#F03D3D" size={14} height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(240, 61, 61)"}}><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
              </div>
              <a target="_blank" className="text--gray" href="#" color="#E8E8E8">-</a></div>
          </div>
          <div className="flex--center background--gray border-bottom--gray">
            <div className="flex--center flex--3 border-right--gray">
              <a target="_blank" className="text--blue font--13">FRAX</a>
            </div>
            <div className="flex--center flex--9">
              <div>
                <img width={11} height={11} src="/img/FRAX_Logo_White.7cc618db.png" alt="FRAX Logo" style={{"margin-right":"3px"}} />
              </div>
              <span className="text--gray">-</span>
            </div>
          </div>
          <div className="flex--center background--gray border-bottom--gray">
            <div className="flex--center flex--3 border-right--gray">
              <a target="_blank" className="text--blue font--13">FXS</a>
            </div>
            <div className="flex--center flex--9">
              <div>
                <img width={11} height={11} src="/img/FXS_Logo_White.a6e03692.png" alt="FXS Logo" style={{"margin-right":"3px","margin-top":"-1px"}} />
              </div>
              <span className="text--gray">-</span>
            </div>
          </div>
          <div className="sidebar-cta flex--center border-bottom--gray background--black">
            <button className="sidebar-cta__btn background--gray">Add tokens to Metamask</button>
          </div>
          <div className="sidebar-cta flex--center border-bottom--gray background--black">
            <div className="flex--center text--blue">MAX SLIPPAGE</div>
            <div className="flex-center" style={{"margin-left":"5px","margin-bottom":"-5px"}} data-for="slippage-tip" data-tip="The slippage tolerance is needed in case there are other Frax transactions in the same block." currentitem="false">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#C0C0C0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(192, 192, 192)"}}><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
            </div>
          </div>
          <div className="sidebar-cta  border-bottom--gray background--black flex--center-column">
            <div className="flex--center">
              <div className="flex--center text--blue">ALLOWANCE</div>
              <div className="flex-center" style={{"margin-left":"5px","margin-bottom":"-5px"}} data-for="slippage-tip" data-tip="The slippage tolerance is needed in case there are other Frax transactions in the same block." currentitem="false">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#C0C0C0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(192, 192, 192)"}}><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
              </div>
            </div>
            <div className="radio">
              <label className="text-white radio__label" htmlFor="min">
                <input type="radio" name="radio-group-redeem" id="min" className="radio__input" defaultValue />
                <div className="radio__radio" />Min (~5%)
              </label>
              {/* <br> */}
              <label className="text-white radio__label" htmlFor="max">
                <input type="radio" name="radio-group-redeem" className="radio__input" id="max" defaultChecked defaultValue />
                <div className="radio__radio" />Max
              </label>
            </div>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav__list">
              <li className="sidebar-nav__item">
                <a className="sidebar-nav__link sidebar-nav__link--active" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z" /><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" /></g></svg></div>
                  <div>Dashboard</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" /></svg></div>
                  <div>Mint</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path fillRule="nonzero" d="M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></g></svg></div>
                  <div>Redeem</div></a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M254.47 53.094s-4.808 37.12-49.5 49.5c-44.695 12.38-129.282 0-129.282 0L61.343 115.78l8.187 9.157-1.093 2.876-51.843 137.312L16 266.72v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.563 14.31 42.937 14.313 15.376.003 30.878-4.556 42.97-14.313 12.092-9.756 20.344-25.094 20.344-44v-1.843l-.688-1.688L86.97 130.28c23.946-3.003 80.866-8.54 115.5 1.532 23.064 6.71 36.151 20.345 43.436 31.97L210.78 354.468l21.407 30.31c-17.75 7.75-32.593 24.84-37.562 51.345-56.076 6.195-95.47 20.74-95.47 37.688h311.876c0-16.947-39.392-31.493-95.467-37.688-4.91-26.6-19.57-44.112-37.188-51.906l21-29.75L264 162.28c7.457-11.275 20.388-24.045 42.47-30.468 34.955-10.167 92.615-4.42 116.155-1.437l-50.875 134.75-.625 1.594v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.593 14.31 42.967 14.313 15.375.003 30.877-4.556 42.97-14.313 12.09-9.756 20.343-25.094 20.343-44v-1.843l-.688-1.688L441 127.562l-.938-2.28 8.782-8.438-15.594-14.25s-84.556 12.38-129.25 0-49.53-49.5-49.53-49.5zM77.53 156.656l44.22 108.375H36.594L77.53 156.657zm355.158 0l44.218 108.375H391.72l40.967-108.374z" /></svg></div>
                  <div>Buyback &amp; Recollateralize</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84 4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.914 47.914 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48 18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32zM176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm22-256h-38V64h106.89l41.15 96H198z" /></svg></div>
                  <div>Staking</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M256 26.2L52 135h408L256 26.2zM73 153v14h366v-14H73zm16 32v206h30V185H89zm101.334 0v206h30V185h-30zm101.332 0v206h30V185h-30zM393 185v206h30V185h-30zM73 409v30h366v-30H73zm-32 48v30h430v-30H41z" /></svg></div>
                  <div>Governance</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z" /></svg></div>
                  <div>Integrations</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" /></g></svg></div>
                  <div>Docs</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z" /></svg></div>
                  <div>Terms</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><div><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z" /></g></svg></div></div>
                  <div>Privacy</div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="sidebar__brand">
            <div className="font--10 text-white">Coverage Available</div>
            <div>
              <a href="#" target="_blank" className="brand-link" style={{"-webkit-flex-direction":"row","-ms-flex-direction":"row","flex-direction":"row","display":"flex","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center"}}>
                <svg viewBox="0 0 968 1106" fill="none" className="brand-icon1"><path d="M462.5 5c-8.2 4.5-82 35.3-111 46.4-20.1 7.7-72.2 26.1-86.1 30.5-34.1 10.6-77.2 21.4-112.9 28-26.5 4.9-97.2 15.2-114 16.6-32.6 2.6-32.7 2.7-36.4 6.6C0 135.4 0 135.5 0 219.2V303h167.3c111.9 0 168.4.4 170.9 1 5.5 1.6 9.1 5.1 12.4 12.2 2.4 5.3 2.8 7.6 2.9 14.8 0 7.7-.3 9.2-3.3 15.3-2.7 5.4-4.2 7.2-8 9.4l-4.7 2.8-166.7.3L4 359v3.1c0 1.7 2.2 19.8 5 40.3 2.7 20.4 6.5 49.5 8.5 64.6 1.9 15.1 3.8 29.2 4.1 31.2l.6 3.8 228.1.2c220.5.3 228.3.4 231.7 2.2 9 4.8 13.2 12.9 13.1 25.6-.1 13.2-4.2 21.9-12.4 26.3l-4.2 2.2-221.1.3-221.1.2 1.8 9.1c1.1 5 5.5 21.1 9.9 35.8 4.3 14.6 11.3 38.3 15.5 52.6 5.8 19.8 8.2 26.6 10.1 28.5l2.4 2.5 129.8.5c129.1.5 129.7.5 134.2 2.6 8.8 4.1 13.4 13.1 13.5 26.4 0 16.5-7.7 26.7-21.5 28.4-2.5.3-55.9.5-118.7.5-79.5.1-114.3.4-114.3 1.2 0 1.6 19.7 40.7 29 57.4 14.4 25.9 36 58.6 42.4 64.3 2 1.7 5.3 3.5 7.3 4.1 2.3.6 50.3 1 123.7 1l119.8.1 5 2.2c15 6.4 18.8 33.2 6.6 46.4-7.2 7.8-1.7 7.4-110.5 7.4H226l-1.2 2.6c-1.4 3-3.8.6 26.1 26.8 10.5 9.3 19.7 17.4 20.4 18 4.6 4.3 23.9 20.6 32 26.9 40.7 31.8 105.1 68.2 159.3 90 13.8 5.6 14.1 5.7 24.1 5.7 11.5 0 14.3-.8 38.7-11.2 52.1-22.2 111.6-58 156.6-94.2 51.6-41.6 97.7-91.7 132.9-144.4 31.5-47.3 50.6-85.5 79.9-160.2 19.3-49 24.7-65.6 36.1-110.6 6.1-24.5 8.4-35.9 17.1-87.9 7.6-45.1 9.7-61.4 13.5-103 5.6-62.3 5.7-64.7 6.2-161.3.5-99 .7-94.3-4.7-97.2-2.1-1.1-12.2-2.5-25.5-3.5-13.8-1.1-60.2-6.4-78.5-9.1-61.9-9-122.8-24.6-211.9-54.4-49.1-16.4-87.3-31.8-134-54l-18.8-9h-22.8l-9 5z" /></svg>
                <svg width={1200} height={186} viewBox="0 0 12000 1860" className="brand-icon2"><path d="M741 1799c-327-64-601-331-675-657-21-95-21-290 0-385C179 262 698-34 1180 122c127 41 250 115 250 150 0 18-167 267-209 310-16 17-21 15-110-30l-93-47H907c-106 0-116 2-179 33-168 82-257 242-246 443 5 74 11 100 41 164 46 96 114 165 205 208 56 26 82 32 158 35 107 5 166-10 258-65l58-35 24 23c50 51 204 284 204 310 0 21-11 34-50 59-65 42-173 86-267 110-82 22-285 26-372 9zM3035 1795c-320-70-575-315-655-629-78-308 11-620 241-842 101-97 194-154 324-199 576-196 1179 265 1142 873-7 120-28 203-77 309-119 256-338 431-612 488-85 18-281 18-363 0zm307-417c61-13 153-72 201-128 121-141 142-364 50-532-15-27-55-76-89-108-78-72-147-101-260-108-135-8-240 34-333 133-186 197-151 541 71 687 108 72 215 88 360 56zM5974 1782c-100-45-191-103-272-172l-76-65 169-5 170-5 3-34c2-18-1-38-7-44-5-5-90-10-208-10h-198l-25-27c-14-15-42-59-63-99l-38-71h190c185 0 190-1 205-22 18-26 19-37 6-58-8-12-48-16-226-20l-217-5-28-90c-16-49-29-93-29-97 0-5 159-8 353-8 261 0 356-3 365-12 18-18 15-66-5-76-10-5-178-10-373-11s-358-5-361-9c-6-6-29-168-29-200 0-9 69-12 270-12h270l11-24c8-17 8-29 0-45-12-21-16-21-286-21h-275V405c0-132 0-135 23-139 12-2 65-9 117-16 117-15 189-31 306-68 103-34 275-101 289-113 16-15 41-10 127 27 181 79 380 136 538 154 52 6 106 13 119 16l24 5-6 212c-17 652-227 1068-643 1276-109 54-119 56-190 23zM8262 1778c-9-9-12-207-12-830V130l24-15c20-14 93-15 600-13 559 3 578 4 592 22 20 28 20 324 0 352-14 18-32 19-395 22l-381 3v269h283c207 0 289 4 307 13 25 12 25 14 28 154 2 118 0 144-13 157-14 14-54 16-311 16h-294v290h393c292 0 396 3 405 12 15 15 17 330 2 359-10 18-28 19-613 19-456 0-606-3-615-12zM10616 1774c-14-14-16-102-16-823 0-682 2-810 14-827 14-18 30-19 433-19 368 0 426 2 482 18 184 50 332 189 393 365 31 93 32 229 1 327-36 113-143 249-239 303-15 8 2 44 136 298 84 159 157 293 161 298 13 14 11 50-3 64-9 9-74 12-230 12h-218l-20-32c-10-17-78-143-151-280l-132-248h-187v268c0 195-3 271-12 280s-68 12-204 12c-162 0-195-3-208-16zm769-930c94-49 134-179 83-273-52-96-116-121-320-121h-108v422l153-4c131-3 158-6 192-24z" /></svg>
              </a>
            </div>
          </div>
          <div className="sidebar__brand">
            <div className="font--10 text-white">Audited by</div>
            <div className>
              <a href="#" target="_blank" className="brand-link">
                <svg viewBox="0 0 135 32" fill="none" className="brand-icon3"><path clipRule="evenodd" d="M14.515 0l9.887 2.98a.627.627 0 11-.363 1.2l-9.523-2.87L5.02 4.18a.628.628 0 01-.364-1.2L14.516 0zM1.308 6.922c-.12 1.898-.098 4.945.753 8.334 1.228 4.892 4.183 10.498 10.976 14.414L6.286 16.614 1.308 6.922zM16 29.668c6.79-3.917 9.75-9.52 10.984-14.412.854-3.386.88-6.43.764-8.328l-4.975 9.687L16 29.668zm-1.482.132l6.665-12.846H7.874L14.517 29.8zm-7.29-14.1L1.501 4.55a.65.65 0 00-.628-.351.646.646 0 00-.587.533c-.105.6-.839 5.272.557 10.83 1.401 5.58 4.953 12.052 13.397 16.166l.275.134.276-.134c8.444-4.113 12.002-10.586 13.41-16.166 1.402-5.557.675-10.228.572-10.829a.646.646 0 00-.589-.534.65.65 0 00-.627.351L21.831 15.7H7.227zm30.53.572c.385.385.853.578 1.404.578h9.886v-1.337H39.16a.664.664 0 01-.463-.182.662.662 0 01-.181-.462V6.945c0-.176.06-.325.181-.446a.635.635 0 01.463-.198h9.886V4.964H39.16c-.55 0-1.02.192-1.405.578a1.91 1.91 0 00-.578 1.403v7.924c0 .55.193 1.018.578 1.403zM56.704 4.964V16.85h10.86v-1.337h-9.521v-3.93h7.653V10.23h-7.654V6.301h9.522V4.964h-10.86zM75.212 16.85V4.98h9.919c.55 0 1.02.198 1.405.595.385.385.578.847.578 1.386v3.484c0 .539-.193 1.007-.578 1.403a1.914 1.914 0 01-1.405.578h-1.819l3.736 4.407v.017H85.28l-3.719-4.424-5.009-.017v4.44h-1.339zm1.984-5.778h7.935c.176 0 .325-.06.446-.182a.606.606 0 00.182-.445V6.96a.606.606 0 00-.182-.445.582.582 0 00-.446-.198h-7.935a.635.635 0 00-.463.198.606.606 0 00-.182.445v3.484c0 .176.061.324.182.445a.664.664 0 00.463.182zM99.466 6.3V16.85h1.339V6.3h5.273V4.964H94.176V6.3h5.29zM113.15 16.85V4.964h1.355V16.85h-1.355zm9.519-11.886V16.85h1.355v-5.266h3.835l4.431 5.266h1.735v-.017l-4.992-5.926 4.976-5.927v-.016h-1.719l-4.431 5.266h-3.835V4.964h-1.355zM75.159 26.96V32h.569v-2.233h3.245v-.574h-3.245v-1.666h4.037v-.567H75.16zm6.069 4.795a.812.812 0 00.596.245h3.364a.812.812 0 00.596-.245.81.81 0 00.245-.595V27.8a.81.81 0 00-.245-.595.812.812 0 00-.596-.245h-3.364a.812.812 0 00-.596.245.81.81 0 00-.245.595v3.36a.81.81 0 00.245.595zm3.96-.322h-3.364a.282.282 0 01-.197-.077.281.281 0 01-.077-.196V27.8c0-.075.026-.138.077-.19a.27.27 0 01.197-.083h3.364c.075 0 .138.028.19.084a.246.246 0 01.084.189v3.36c0 .075-.028.14-.084.196a.258.258 0 01-.19.077zm3.226.567a.812.812 0 01-.596-.245.81.81 0 01-.245-.595v-4.2h.567v4.2c0 .075.026.14.077.196a.282.282 0 00.197.077h3.364a.258.258 0 00.19-.077.268.268 0 00.084-.196v-4.2h.567v4.2a.81.81 0 01-.245.595.812.812 0 01-.596.245h-3.364zm5.763-5.04V32h.567v-4.396L98.445 32h.779v-5.04h-.568v4.396l-3.701-4.396h-.778zm6.631 5.04v-5.04h4.206c.234 0 .432.081.596.245a.812.812 0 01.245.595v3.36a.812.812 0 01-.245.595.812.812 0 01-.596.245h-4.206zm.841-.567h3.365a.256.256 0 00.189-.077.269.269 0 00.084-.196V27.8a.246.246 0 00-.084-.19.246.246 0 00-.189-.083h-3.365a.268.268 0 00-.196.084.258.258 0 00-.077.189v3.36c0 .075.026.14.077.196a.28.28 0 00.196.077zm5.79-3.633V32h.568v-1.841h3.911V32h.568v-4.2a.812.812 0 00-.245-.595.812.812 0 00-.596-.245h-3.365a.814.814 0 00-.596.245.812.812 0 00-.245.595zm4.479 1.792h-3.911V27.8c0-.075.026-.138.077-.19a.27.27 0 01.196-.083h3.365c.075 0 .138.028.189.084a.246.246 0 01.084.189v1.792zM116.061 32v-4.473h-2.243v-.567h5.047v.567h-2.237V32h-.567zm4.085-5.04V32h.575v-5.04h-.575zm3.139 5.04a.814.814 0 01-.596-.245.812.812 0 01-.245-.595V27.8c0-.234.082-.432.245-.595a.814.814 0 01.596-.245h3.365c.234 0 .432.081.596.245a.812.812 0 01.245.595v3.36a.812.812 0 01-.245.595.812.812 0 01-.596.245h-3.365zm0-.567h3.365a.256.256 0 00.189-.077.269.269 0 00.084-.196V27.8a.246.246 0 00-.084-.19.246.246 0 00-.189-.083h-3.365a.27.27 0 00-.196.084.258.258 0 00-.077.189v3.36c0 .075.026.14.077.196a.282.282 0 00.196.077zm5.763-4.473V32h.568v-4.396L133.317 32h.778v-5.04h-.568v4.396l-3.701-4.396h-.778zm-91.802 2.48h30.236v-.522H37.246v.522z" /></svg>
              </a>
            </div>
          </div>
          <div className="sidebar__footer">
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg></a>
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a>
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
          </div>
        </aside>
        <main className="main">
        </main>
      </div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="css/style.css" />
      <title>FRAX Clone</title>
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar__header">
            <img className="sidebar__logo" size={45} src="/img/FRAX_Logo_White.e2bdd44d.svg" alt="Logo img" />
            <div className="sidebar__logo-text">Frax Finance</div>
          </div>
          <div className="flex--center background--black border-bottom--gray">
            <div className="flex--center flex--9">
              <div className="icon-svg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" color="#F03D3D" size={10} height={10} width={10} xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(240, 61, 61)"}}><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>
              </div>
              <a target="_self" href="javascript:void(0)" className="text--red font--10" color="#F03D3D">Not Connected</a>
            </div>
            <div className="flex--center flex--3 border-left--gray">
              <div className="icon-svg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#F03D3D" size={14} height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(240, 61, 61)"}}><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
              </div>
              <a target="_blank" className="text--gray" href="#" color="#E8E8E8">-</a></div>
          </div>
          <div className="flex--center background--gray border-bottom--gray">
            <div className="flex--center flex--3 border-right--gray">
              <a target="_blank" className="text--blue font--13">FRAX</a>
            </div>
            <div className="flex--center flex--9">
              <div>
                <img width={11} height={11} src="/img/FRAX_Logo_White.7cc618db.png" alt="FRAX Logo" style={{"margin-right":"3px"}} />
              </div>
              <span className="text--gray">-</span>
            </div>
          </div>
          <div className="flex--center background--gray border-bottom--gray">
            <div className="flex--center flex--3 border-right--gray">
              <a target="_blank" className="text--blue font--13">FXS</a>
            </div>
            <div className="flex--center flex--9">
              <div>
                <img width={11} height={11} src="/img/FXS_Logo_White.a6e03692.png" alt="FXS Logo" style={{"margin-right":"3px","margin-top":"-1px"}} />
              </div>
              <span className="text--gray">-</span>
            </div>
          </div>
          <div className="sidebar-cta flex--center border-bottom--gray background--black">
            <button className="sidebar-cta__btn background--gray">Add tokens to Metamask</button>
          </div>
          <div className="sidebar-cta flex--center border-bottom--gray background--black">
            <div className="flex--center text--blue">MAX SLIPPAGE</div>
            <div className="flex-center" style={{"margin-left":"5px","margin-bottom":"-5px"}} data-for="slippage-tip" data-tip="The slippage tolerance is needed in case there are other Frax transactions in the same block." currentitem="false">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#C0C0C0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(192, 192, 192)"}}><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
            </div>
          </div>
          <div className="sidebar-cta  border-bottom--gray background--black flex--center-column">
            <div className="flex--center">
              <div className="flex--center text--blue">ALLOWANCE</div>
              <div className="flex-center" style={{"margin-left":"5px","margin-bottom":"-5px"}} data-for="slippage-tip" data-tip="The slippage tolerance is needed in case there are other Frax transactions in the same block." currentitem="false">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" color="#C0C0C0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(192, 192, 192)"}}><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
              </div>
            </div>
            <div className="radio">
              <label className="text-white radio__label" htmlFor="min">
                <input type="radio" name="radio-group-redeem" id="min" className="radio__input" defaultValue />
                <div className="radio__radio" />Min (~5%)
              </label>
              <label className="text-white radio__label" htmlFor="max">
                <input type="radio" name="radio-group-redeem" className="radio__input" id="max" defaultChecked defaultValue />
                <div className="radio__radio" />Max
              </label>
            </div>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav__list">
              <li className="sidebar-nav__item">
                <a className="sidebar-nav__link sidebar-nav__link--active" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z" /><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" /></g></svg></div>
                  <div>Dashboard</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" /></svg></div>
                  <div>Mint</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path fillRule="nonzero" d="M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></g></svg></div>
                  <div>Redeem</div></a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M254.47 53.094s-4.808 37.12-49.5 49.5c-44.695 12.38-129.282 0-129.282 0L61.343 115.78l8.187 9.157-1.093 2.876-51.843 137.312L16 266.72v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.563 14.31 42.937 14.313 15.376.003 30.878-4.556 42.97-14.313 12.092-9.756 20.344-25.094 20.344-44v-1.843l-.688-1.688L86.97 130.28c23.946-3.003 80.866-8.54 115.5 1.532 23.064 6.71 36.151 20.345 43.436 31.97L210.78 354.468l21.407 30.31c-17.75 7.75-32.593 24.84-37.562 51.345-56.076 6.195-95.47 20.74-95.47 37.688h311.876c0-16.947-39.392-31.493-95.467-37.688-4.91-26.6-19.57-44.112-37.188-51.906l21-29.75L264 162.28c7.457-11.275 20.388-24.045 42.47-30.468 34.955-10.167 92.615-4.42 116.155-1.437l-50.875 134.75-.625 1.594v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.593 14.31 42.967 14.313 15.375.003 30.877-4.556 42.97-14.313 12.09-9.756 20.343-25.094 20.343-44v-1.843l-.688-1.688L441 127.562l-.938-2.28 8.782-8.438-15.594-14.25s-84.556 12.38-129.25 0-49.53-49.5-49.53-49.5zM77.53 156.656l44.22 108.375H36.594L77.53 156.657zm355.158 0l44.218 108.375H391.72l40.967-108.374z" /></svg></div>
                  <div>Buyback &amp; Recollateralize</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84 4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.914 47.914 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48 18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32zM176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm22-256h-38V64h106.89l41.15 96H198z" /></svg></div>
                  <div>Staking</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M256 26.2L52 135h408L256 26.2zM73 153v14h366v-14H73zm16 32v206h30V185H89zm101.334 0v206h30V185h-30zm101.332 0v206h30V185h-30zM393 185v206h30V185h-30zM73 409v30h366v-30H73zm-32 48v30h430v-30H41z" /></svg></div>
                  <div>Governance</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z" /></svg></div>
                  <div>Integrations</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" /></g></svg></div>
                  <div>Docs</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z" /></svg></div>
                  <div>Terms</div>
                </a>
              </li>
              <li className="sidebar-nav__item">
                <a className=" sidebar-nav__link" href="#">
                  <div className="sidebar-nav__icon"><div><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z" /></g></svg></div></div>
                  <div>Privacy</div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="sidebar__brand">
            <div className="font--10 text-white">Coverage Available</div>
            <div>
              <a href="#" target="_blank" className="brand-link" style={{"-webkit-flex-direction":"row","-ms-flex-direction":"row","flex-direction":"row","display":"flex","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center"}}>
                <svg viewBox="0 0 968 1106" fill="none" className="brand-icon1"><path d="M462.5 5c-8.2 4.5-82 35.3-111 46.4-20.1 7.7-72.2 26.1-86.1 30.5-34.1 10.6-77.2 21.4-112.9 28-26.5 4.9-97.2 15.2-114 16.6-32.6 2.6-32.7 2.7-36.4 6.6C0 135.4 0 135.5 0 219.2V303h167.3c111.9 0 168.4.4 170.9 1 5.5 1.6 9.1 5.1 12.4 12.2 2.4 5.3 2.8 7.6 2.9 14.8 0 7.7-.3 9.2-3.3 15.3-2.7 5.4-4.2 7.2-8 9.4l-4.7 2.8-166.7.3L4 359v3.1c0 1.7 2.2 19.8 5 40.3 2.7 20.4 6.5 49.5 8.5 64.6 1.9 15.1 3.8 29.2 4.1 31.2l.6 3.8 228.1.2c220.5.3 228.3.4 231.7 2.2 9 4.8 13.2 12.9 13.1 25.6-.1 13.2-4.2 21.9-12.4 26.3l-4.2 2.2-221.1.3-221.1.2 1.8 9.1c1.1 5 5.5 21.1 9.9 35.8 4.3 14.6 11.3 38.3 15.5 52.6 5.8 19.8 8.2 26.6 10.1 28.5l2.4 2.5 129.8.5c129.1.5 129.7.5 134.2 2.6 8.8 4.1 13.4 13.1 13.5 26.4 0 16.5-7.7 26.7-21.5 28.4-2.5.3-55.9.5-118.7.5-79.5.1-114.3.4-114.3 1.2 0 1.6 19.7 40.7 29 57.4 14.4 25.9 36 58.6 42.4 64.3 2 1.7 5.3 3.5 7.3 4.1 2.3.6 50.3 1 123.7 1l119.8.1 5 2.2c15 6.4 18.8 33.2 6.6 46.4-7.2 7.8-1.7 7.4-110.5 7.4H226l-1.2 2.6c-1.4 3-3.8.6 26.1 26.8 10.5 9.3 19.7 17.4 20.4 18 4.6 4.3 23.9 20.6 32 26.9 40.7 31.8 105.1 68.2 159.3 90 13.8 5.6 14.1 5.7 24.1 5.7 11.5 0 14.3-.8 38.7-11.2 52.1-22.2 111.6-58 156.6-94.2 51.6-41.6 97.7-91.7 132.9-144.4 31.5-47.3 50.6-85.5 79.9-160.2 19.3-49 24.7-65.6 36.1-110.6 6.1-24.5 8.4-35.9 17.1-87.9 7.6-45.1 9.7-61.4 13.5-103 5.6-62.3 5.7-64.7 6.2-161.3.5-99 .7-94.3-4.7-97.2-2.1-1.1-12.2-2.5-25.5-3.5-13.8-1.1-60.2-6.4-78.5-9.1-61.9-9-122.8-24.6-211.9-54.4-49.1-16.4-87.3-31.8-134-54l-18.8-9h-22.8l-9 5z" /></svg>
                <svg width={1200} height={186} viewBox="0 0 12000 1860" className="brand-icon2"><path d="M741 1799c-327-64-601-331-675-657-21-95-21-290 0-385C179 262 698-34 1180 122c127 41 250 115 250 150 0 18-167 267-209 310-16 17-21 15-110-30l-93-47H907c-106 0-116 2-179 33-168 82-257 242-246 443 5 74 11 100 41 164 46 96 114 165 205 208 56 26 82 32 158 35 107 5 166-10 258-65l58-35 24 23c50 51 204 284 204 310 0 21-11 34-50 59-65 42-173 86-267 110-82 22-285 26-372 9zM3035 1795c-320-70-575-315-655-629-78-308 11-620 241-842 101-97 194-154 324-199 576-196 1179 265 1142 873-7 120-28 203-77 309-119 256-338 431-612 488-85 18-281 18-363 0zm307-417c61-13 153-72 201-128 121-141 142-364 50-532-15-27-55-76-89-108-78-72-147-101-260-108-135-8-240 34-333 133-186 197-151 541 71 687 108 72 215 88 360 56zM5974 1782c-100-45-191-103-272-172l-76-65 169-5 170-5 3-34c2-18-1-38-7-44-5-5-90-10-208-10h-198l-25-27c-14-15-42-59-63-99l-38-71h190c185 0 190-1 205-22 18-26 19-37 6-58-8-12-48-16-226-20l-217-5-28-90c-16-49-29-93-29-97 0-5 159-8 353-8 261 0 356-3 365-12 18-18 15-66-5-76-10-5-178-10-373-11s-358-5-361-9c-6-6-29-168-29-200 0-9 69-12 270-12h270l11-24c8-17 8-29 0-45-12-21-16-21-286-21h-275V405c0-132 0-135 23-139 12-2 65-9 117-16 117-15 189-31 306-68 103-34 275-101 289-113 16-15 41-10 127 27 181 79 380 136 538 154 52 6 106 13 119 16l24 5-6 212c-17 652-227 1068-643 1276-109 54-119 56-190 23zM8262 1778c-9-9-12-207-12-830V130l24-15c20-14 93-15 600-13 559 3 578 4 592 22 20 28 20 324 0 352-14 18-32 19-395 22l-381 3v269h283c207 0 289 4 307 13 25 12 25 14 28 154 2 118 0 144-13 157-14 14-54 16-311 16h-294v290h393c292 0 396 3 405 12 15 15 17 330 2 359-10 18-28 19-613 19-456 0-606-3-615-12zM10616 1774c-14-14-16-102-16-823 0-682 2-810 14-827 14-18 30-19 433-19 368 0 426 2 482 18 184 50 332 189 393 365 31 93 32 229 1 327-36 113-143 249-239 303-15 8 2 44 136 298 84 159 157 293 161 298 13 14 11 50-3 64-9 9-74 12-230 12h-218l-20-32c-10-17-78-143-151-280l-132-248h-187v268c0 195-3 271-12 280s-68 12-204 12c-162 0-195-3-208-16zm769-930c94-49 134-179 83-273-52-96-116-121-320-121h-108v422l153-4c131-3 158-6 192-24z" /></svg>
              </a>
            </div>
          </div>
          <div className="sidebar__brand">
            <div className="font--10 text-white">Audited by</div>
            <div className>
              <a href="#" target="_blank" className="brand-link">
                <svg viewBox="0 0 135 32" fill="none" className="brand-icon3"><path clipRule="evenodd" d="M14.515 0l9.887 2.98a.627.627 0 11-.363 1.2l-9.523-2.87L5.02 4.18a.628.628 0 01-.364-1.2L14.516 0zM1.308 6.922c-.12 1.898-.098 4.945.753 8.334 1.228 4.892 4.183 10.498 10.976 14.414L6.286 16.614 1.308 6.922zM16 29.668c6.79-3.917 9.75-9.52 10.984-14.412.854-3.386.88-6.43.764-8.328l-4.975 9.687L16 29.668zm-1.482.132l6.665-12.846H7.874L14.517 29.8zm-7.29-14.1L1.501 4.55a.65.65 0 00-.628-.351.646.646 0 00-.587.533c-.105.6-.839 5.272.557 10.83 1.401 5.58 4.953 12.052 13.397 16.166l.275.134.276-.134c8.444-4.113 12.002-10.586 13.41-16.166 1.402-5.557.675-10.228.572-10.829a.646.646 0 00-.589-.534.65.65 0 00-.627.351L21.831 15.7H7.227zm30.53.572c.385.385.853.578 1.404.578h9.886v-1.337H39.16a.664.664 0 01-.463-.182.662.662 0 01-.181-.462V6.945c0-.176.06-.325.181-.446a.635.635 0 01.463-.198h9.886V4.964H39.16c-.55 0-1.02.192-1.405.578a1.91 1.91 0 00-.578 1.403v7.924c0 .55.193 1.018.578 1.403zM56.704 4.964V16.85h10.86v-1.337h-9.521v-3.93h7.653V10.23h-7.654V6.301h9.522V4.964h-10.86zM75.212 16.85V4.98h9.919c.55 0 1.02.198 1.405.595.385.385.578.847.578 1.386v3.484c0 .539-.193 1.007-.578 1.403a1.914 1.914 0 01-1.405.578h-1.819l3.736 4.407v.017H85.28l-3.719-4.424-5.009-.017v4.44h-1.339zm1.984-5.778h7.935c.176 0 .325-.06.446-.182a.606.606 0 00.182-.445V6.96a.606.606 0 00-.182-.445.582.582 0 00-.446-.198h-7.935a.635.635 0 00-.463.198.606.606 0 00-.182.445v3.484c0 .176.061.324.182.445a.664.664 0 00.463.182zM99.466 6.3V16.85h1.339V6.3h5.273V4.964H94.176V6.3h5.29zM113.15 16.85V4.964h1.355V16.85h-1.355zm9.519-11.886V16.85h1.355v-5.266h3.835l4.431 5.266h1.735v-.017l-4.992-5.926 4.976-5.927v-.016h-1.719l-4.431 5.266h-3.835V4.964h-1.355zM75.159 26.96V32h.569v-2.233h3.245v-.574h-3.245v-1.666h4.037v-.567H75.16zm6.069 4.795a.812.812 0 00.596.245h3.364a.812.812 0 00.596-.245.81.81 0 00.245-.595V27.8a.81.81 0 00-.245-.595.812.812 0 00-.596-.245h-3.364a.812.812 0 00-.596.245.81.81 0 00-.245.595v3.36a.81.81 0 00.245.595zm3.96-.322h-3.364a.282.282 0 01-.197-.077.281.281 0 01-.077-.196V27.8c0-.075.026-.138.077-.19a.27.27 0 01.197-.083h3.364c.075 0 .138.028.19.084a.246.246 0 01.084.189v3.36c0 .075-.028.14-.084.196a.258.258 0 01-.19.077zm3.226.567a.812.812 0 01-.596-.245.81.81 0 01-.245-.595v-4.2h.567v4.2c0 .075.026.14.077.196a.282.282 0 00.197.077h3.364a.258.258 0 00.19-.077.268.268 0 00.084-.196v-4.2h.567v4.2a.81.81 0 01-.245.595.812.812 0 01-.596.245h-3.364zm5.763-5.04V32h.567v-4.396L98.445 32h.779v-5.04h-.568v4.396l-3.701-4.396h-.778zm6.631 5.04v-5.04h4.206c.234 0 .432.081.596.245a.812.812 0 01.245.595v3.36a.812.812 0 01-.245.595.812.812 0 01-.596.245h-4.206zm.841-.567h3.365a.256.256 0 00.189-.077.269.269 0 00.084-.196V27.8a.246.246 0 00-.084-.19.246.246 0 00-.189-.083h-3.365a.268.268 0 00-.196.084.258.258 0 00-.077.189v3.36c0 .075.026.14.077.196a.28.28 0 00.196.077zm5.79-3.633V32h.568v-1.841h3.911V32h.568v-4.2a.812.812 0 00-.245-.595.812.812 0 00-.596-.245h-3.365a.814.814 0 00-.596.245.812.812 0 00-.245.595zm4.479 1.792h-3.911V27.8c0-.075.026-.138.077-.19a.27.27 0 01.196-.083h3.365c.075 0 .138.028.189.084a.246.246 0 01.084.189v1.792zM116.061 32v-4.473h-2.243v-.567h5.047v.567h-2.237V32h-.567zm4.085-5.04V32h.575v-5.04h-.575zm3.139 5.04a.814.814 0 01-.596-.245.812.812 0 01-.245-.595V27.8c0-.234.082-.432.245-.595a.814.814 0 01.596-.245h3.365c.234 0 .432.081.596.245a.812.812 0 01.245.595v3.36a.812.812 0 01-.245.595.812.812 0 01-.596.245h-3.365zm0-.567h3.365a.256.256 0 00.189-.077.269.269 0 00.084-.196V27.8a.246.246 0 00-.084-.19.246.246 0 00-.189-.083h-3.365a.27.27 0 00-.196.084.258.258 0 00-.077.189v3.36c0 .075.026.14.077.196a.282.282 0 00.196.077zm5.763-4.473V32h.568v-4.396L133.317 32h.778v-5.04h-.568v4.396l-3.701-4.396h-.778zm-91.802 2.48h30.236v-.522H37.246v.522z" /></svg>
              </a>
            </div>
          </div>
          <div className="sidebar__footer">
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg></a>
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a>
            <a target="_blank" href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" color="#FFFFFF" size={20} height={20} width={20} xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
          </div>
        </aside>
        <main className="main">
        </main>
    </div>
    </div>
  );
}

export default App;
