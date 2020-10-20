import React, { useState, useEffect, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";
import Button from "../button/Button";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets ? descBullets.map((item) => <li className={isDark ? "subTitle dark-mode-text": "subTitle"}>{item}</li>) : null
  };

  return (
    <div className={isDark ? "experience-card-dark":"experience-card"} onClick={()=>{
      window.open(cardInfo.link,'_blank')
    }}>
      <div style={{background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        
        <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/>
      </div>
      <div className="experience-text-details">
        <h5 className={isDark ? "experience-text-role dark-mode-text":"experience-text-role"} color>{cardInfo.role}</h5>
        <h5 className={isDark ? "experience-text-date dark-mode-text":"experience-text-date"}>{cardInfo.date}</h5>
        <p className={isDark ? "subTitle experience-text-desc dark-mode-text":"subTitle experience-text-desc"}>{cardInfo.desc}</p>
        <button style={{
          width:'100%',
          height:'40px',
          background:'#0779E4',
          color:'#FFF',
          border:0,
          borderRadius:4,
          outline:'none',
          fontFamily: 'Montserrat',
          cursor:'pointer',
          fontWeight:'bold'
        }}>See Live Now</button>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
