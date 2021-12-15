import React, { useContext,useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div" style={{textAlign: "center"}}>
            {/* <img
              alt="saad sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            ></img> */}

            <img
              alt="Milan shrestha"
              src={require(`../../assets/images/${
                isDark ? "me.jpg" : "me.jpg"
              }`)} style={{
                width:400,
                borderRadius:20,
                boxShadow: isDark ? "0px 0px 20px 0px #171c10" : "0px 0px 20px 0px #aaa" 
                }}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
