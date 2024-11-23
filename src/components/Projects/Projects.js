import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function ProjectCards({ project }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      imgPath: "https://imgur.com/K9RDIFB.png",
      title: "Desain Feed",
      description:
        "Pembuatan desain feed instagram dengan menggunakan tools Canva, img spltter.",
    },
    {
      id: 2,
      imgPath: "https://imgur.com/YwZ3Aaq.png",
      title: "Develope Website",
      description:
        "Pembuatan web UMKM lokal menggunakan Html, Css, Java dengan tools VSCode.",
    },
    {
      id: 3,
      imgPath: "https://imgur.com/LMDvtM9.jpg",
      title: "Dokumentasi Kegiatan",
      description:
        "Pendokumentasian kegiata-kegiatan penting dalam satu periode.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projek <strong className="purple">Satrio</strong>
        </h1>
        <p style={{ color: "white" }}>
          Beberapa Projek yang pernah saya kerjakan.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCards project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
