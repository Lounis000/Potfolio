import { useEffect } from "react";
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/LBFORMA.png";
import projImg2 from "../assets/img/can1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Plateforme de Formation en ligne",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "Application de gestion D'entrepot",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>J'ai fait et j'ai participé à beaucoup de Projets dont des sites web et des applications desktop et mobiles et j'ai participé. Voici les deux plus importants de ceux que j'ai fait moi meme :</p>
                <Row className="justify-content-center">
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
}
