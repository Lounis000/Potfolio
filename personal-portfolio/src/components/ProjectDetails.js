import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import projImg1 from "../assets/img/LBFORMA.png";
import projImg2 from "../assets/img/p1.png";
import projImg3 from "../assets/img/p22.png";
import projImg5 from "../assets/img/p4.png";
import projImg7 from "../assets/img/p5.png";
import projImg8 from "../assets/img/p6.png";
import projImg9 from "../assets/img/p7.png";
import projImg6 from "../assets/img/GesCannabis.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    id: 1,
    title: "Plateforme de Formation en ligne",
    description: "ce projet est une plateforme de formation en ligne comme Udemy et OpenClasseroom il permet au utilisateurs de suivre des formations a distance mais pour ça il faudra s'inscrire au cours et attendre l'approbation du gestionnaire. Cet application web a trois interfaces différents d'ou le premier est l'interface utilisateur puis l'interface gestionnaire et enfin l'inteface service R.H.",
    technologies: ["React", "Node.js", "Bootstrap","CSS"],
    images: [projImg1, projImg2, projImg3,projImg5]
  },
  {
    id: 2,
    title: "Application de gestion D'entrepot",
    description: "C'est une application desktop de gestion d'entrepot devloppé sur demande d'un labo de cannabis, cette application permet la gestion totale des plantes de cannabis de leur date d'entrée jusqu'a leur date destruction, il génère un code QR automatiquement a chaque Ajout de plante. il a deux inteface dont l'interface utilisateur et l'interface Administrateur",
    technologies: ["C#", "Xaml", "WPF"],
    images: [projImg6, projImg7, projImg8,projImg9]
  },
];

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col>
            <h2 className="project-title">{project.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              {project.images.map((imgUrl, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imgUrl} alt={`${project.title} image ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="project-description">{project.description}</p>
            <h3>Technologies utilisées</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
