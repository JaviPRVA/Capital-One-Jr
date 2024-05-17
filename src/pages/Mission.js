import React from 'react';
import './Mission.css';
import CJRLogo from '../assets/CJR_Logo.png';
import Javier from '../assets/Javier.png';
import Nyla from '../assets/Nyla.png';
import Ibrahima from '../assets/Ibrahima.png';
import Hilary from '../assets/Hilary.png';
import Navbar from "../components/Navbar";

const Mission = () => {
  return (
    <div>
      <Navbar/>

      <div className="mission h-screen">
        <div className="mission-header pb-6">
          <div className="mission-heading-container" style={{ margin: "auto", display: "inline-flex", alignItems: "center" }}>
            <h1 id="missionHeading" className="font-bold" style={{ fontSize: "50px", margin: "0" }}>Our Mission</h1>
            <img id="CJR_Logo.png" src={CJRLogo} alt="Mobile Logo" height="50px" width="50px" style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <p id="missionText" className="pr-40 pl-40"style={{ fontSize: "24px", textAlign: "center" }}>
          At CapitalOne Junior, our mission is to empower first-generation children with the knowledge and skills necessary to achieve financial literacy. We are dedicated to providing accessible, engaging, and practical education that equips young minds with the confidence to manage their finances wisely. By fostering a strong foundation in financial literacy through our interactive educational quizzes and realistic budgeting simulator, we aim to inspire a future generation that is informed, responsible, and prepared to make sound financial decisions. Through these innovative learning tools and resources, we strive to close the gap in financial education and ensure every child has the opportunity to build a secure and prosperous future. For more information on how to help your child establish and build credit, visit the link <a href="https://www.capitalone.com/learn-grow/money-management/how-to-help-build-family-members-credit/" title="CapOne" target="_blank" id="missionLink">here</a>.
        </p>

        <h1 id="missionHeading" className="font-bold pt-6"style={{ fontSize: "36px", textAlign: "center" }}>Staff</h1>
        <div className="staffContainer">
          <figure className="staffMember">
            <img src={Javier} alt="Javier Ralat" />
            <figcaption><b>Javier Ralat</b><br /><i>Virginia Polytechnic Institute and State University</i></figcaption>
          </figure>
          <figure className="staffMember">
            <img src={Nyla} alt="Nyla Crespo" />
            <figcaption><b>Nyla Crespo</b><br /><i>Howard University</i></figcaption>
          </figure>
          <figure className="staffMember">
            <img src={Ibrahima} alt="Ibrahima Toure" />
            <figcaption><b>Ibrahima Toure</b><br /><i>Northeastern University</i></figcaption>
          </figure>
          <figure className="staffMember">
            <img src={Hilary} alt="Hilary Rojas Rosales" />
            <figcaption><b>Hilary Rojas Rosales</b><br /><i>Binghamton University</i></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Mission;
