import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web3 Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>dApps Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Smart Contract Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring and Maintenance</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring and Maintenance</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring and Maintenance</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
