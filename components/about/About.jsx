'use client';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./about.css";
import ProfilePic from "../../src/assets/profile-pic.png";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Intoduction</span>

        <div className="about__container container grid">
          <img src={ProfilePic.src} alt="Profile" className="about__img" />
          <div className="about__data">
            <Info />

            <p className="about__description">
              I'm a B.Tech Data Science student passionate about building modern, user-friendly web experiences.<br/><br/>
              I create responsive websites using HTML, CSS, JavaScript, and React.<br/><br/>
              I focus on clean code, intuitive design, and turning ideas into real-world projects.
            </p>
          </div>
        </div>
    </section>
  )
}

export default About