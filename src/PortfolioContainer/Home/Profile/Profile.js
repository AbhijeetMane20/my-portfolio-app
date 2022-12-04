/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/abhi.mane.143/">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://www.google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/abhijeet-mane/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/AbhijeetMane20">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Abhijeet</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "ReactJs Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Resume.pdf" download="abhijeet resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
