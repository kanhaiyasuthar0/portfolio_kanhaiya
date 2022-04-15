import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from '../../Utils/WindowSize';
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  // const [width] = WindowSize();

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          When I started my coding journey it was amidst a lot of skepticism, as
          I was moving from Civil Engineering to IT. I feel that it is never too
          late to start something you actually like. During my final year, I
          started learning coding from YouTube and documentations. After 6
          months of coding, I was confident that I wanted to pursue coding as my
          career. To enhance my knowledge and get proper guidance, I joined
          Masai School. <br /> Currently, I am pursuing a Full Stack Web Development
          course and with the help of Masai School my journey has come a long
          way. I am capable of writing production-ready code using React, Redux,
          and CSS on the frontend, NodeJS and Express on the backend to build
          single page applications. Passionate about coding and strongly
          interested in working in a product based company.
        </p>
        {/* <p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is  Kanhaiya  and I enjoy creating things that are live on the internet. My interest in web development started
					back last year when I was trying to edit things on the web —
					taught me a lot about HTML & CSS!. <br />
					<br /> Fast Forwarding to today, I built a number of web
					applications and 3 major projects. Learned a great deal
					about teamwork, leadership, and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p> */}
      </div>
    </div>
  );
};

export default About;
