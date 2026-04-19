'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Learning Journey 📚</h2>
        <span className="section__subtitle">My Growth & Skills</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-code exp__icon"></i>
                    <h3 className="exp__title">Web <br /> Development </h3>
                </div>

                <div>
                    <span className="exp__comp">Currently Learning</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Web Development Skills 💻</h3>
                        <p className="exp__modal-description">Building modern web applications with responsive design and user-friendly interfaces.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">HTML, CSS & JavaScript</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">React & Frontend Frameworks</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Responsive Design & UI/UX</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-database exp__icon"></i>
                    <h3 className="exp__title">Data Science <br /> Fundamentals</h3>
                </div>

                <div>
                    <span className="exp__comp">In Progress</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Data Science & Analysis 📊</h3>
                        <p className="exp__modal-description">Exploring data-driven solutions and learning fundamentals of data science.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Python & Data Analysis</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Statistics & Data Visualization</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Machine Learning Basics</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience