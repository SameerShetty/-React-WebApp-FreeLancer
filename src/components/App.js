import React, { useState } from "react";
import "../index.css";
import workData from "../workData";
import clientData from "../clientData";
import Card, { ClientCard } from "./Card";

function CreateCard(workData) {
  return (
    <Card
      key={workData.id}
      link={workData.link}
      title={workData.title}
      header={workData.header}
      desc={workData.desc}
    ></Card>
  );
}
function CreateClientcard(clientData) {
  return <ClientCard key={clientData.id} name={clientData.name}></ClientCard>;
}

function App() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);

  function navToggle() {
    setnavspan(!isnavspan);
    sethamburger(!ishamburger);
  }

  return (
    <div>
      <div className="hero">
        <div className="nav-toggler" onClick={navToggle}>
          <div>
            <span
              className="bar-1"
              style={{
                transform: ishamburger
                  ? "translateY(9px) rotate(45deg)"
                  : "none",
              }}
            ></span>
            <span
              className="bar-2"
              style={{ opacity: ishamburger ? "0" : "1" }}
            ></span>
            <span
              className="bar-3"
              style={{
                transform: ishamburger
                  ? "translateY(-5px) rotate(-45deg)"
                  : "none",
              }}
            ></span>
          </div>
        </div>
        <nav
          className="navpan"
          id="navpan"
          style={{ right: isnavspan ? "0" : "-240px" }}
        >
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Works</a>
            </li>
            <li>
              <a href="index.html">Gallery</a>
            </li>
            <li>
              <a href="index.html">Services</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <h1>PixelEdit</h1>
          <div className="skills-list">
            <ul>
              <li>Photoshop</li>
              <li>Illustration</li>
              <li>Priemer Pro</li>
              <li>After Effects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="work-wrapper">
        <h2>FEATURED</h2>
        <h1>WORKS</h1>
        <div className="featured-work">{workData.map(CreateCard)}</div>
        <button className="btn" style={{ margin: "4rem auto" }}>
          View All Works
        </button>
      </div>

      <div className="clients-wrapper">
        <h2>AWESOME</h2>
        <h1>CLIENTS</h1>

        <div className="clients-section">
          {clientData.map(CreateClientcard)}
        </div>
      </div>
      <div className="service-wrapper">
        <h2>PROFESSIONAL</h2>
        <h1>SERVICES</h1>
        <div className="service-section">
          <div className="box">
            <span></span>
            <h2>Photoshop</h2>
            <p>
              This a fake text This a fake text This a fake text This a fake
              text This a fake text This a fake text This a fake text This a
              fake text This a fake text This a fake text This a fake text This
              a fake text This a fake text
            </p>
          </div>
          <div className="box">
            <span></span> <h2>Illustration</h2>
            <p>
              This a fake text This a fake text This a fake text This a fake
              text This a fake text This a fake text This a fake text This a
              fake text This a fake text This a fake text This a fake text This
              a fake text This a fake text
            </p>
          </div>
          <div className="box">
            <span></span> <h2>Priemer Pro</h2>
            <p>
              This a fake text This a fake text This a fake text This a fake
              text This a fake text This a fake text This a fake text This a
              fake text This a fake text This a fake text This a fake text This
              a fake text This a fake text
            </p>
          </div>

          <div className="box">
            <span></span> <h2>After Effects</h2>
            <p>
              This a fake text This a fake text This a fake text This a fake
              text This a fake text This a fake text This a fake text This a
              fake text This a fake text This a fake text This a fake text This
              a fake text This a fake text
            </p>
          </div>
        </div>
        <button className="btn" style={{ margin: "2rem auto" }}>
          Contact Me
        </button>
      </div>
      <div className="testimonial-wrapper">
        <div></div>
      </div>
      <div className="social-media-wrapper">
        <div className="contact">
          <div className="left-col">
            <h2>CONTACT ME</h2>
            <h1>Let's Work Together</h1>
          </div>
          <div className="right-col">
            <h2>HOW AM I?</h2>
            <h1>Learn More About Me</h1>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <h2>Sameer Shetty</h2>
      </div>
    </div>
  );
}

export default App;
