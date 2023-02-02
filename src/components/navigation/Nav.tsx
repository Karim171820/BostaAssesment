import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from "../../assets/bosta-Logo.png"
import "./Nav.css"

export default function Nav() {
  const { t, i18n } = useTranslation();
  return (
<nav className="navbar navbar-light bg-light" style={{ direction: i18n.language === "en" ? "rtl" : "ltr" }}>
    <div className='container'>
    <a className ="navbar-brand" href="#">
      <div>
    <img src={logo} style={{ maxWidth: "400px", maxHeight : "70px"}} className="d-inline-block align-top" alt=""/>
    </div>
  </a>
  <div style={{cursor: "pointer"}}
              onClick={() => {
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
              }}
              className=" log-out-icon"
            >
              {t("lang")}
            </div>   
</div>
    
</nav>

    )  
}
