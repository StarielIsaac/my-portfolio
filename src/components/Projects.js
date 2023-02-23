import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import computer1 from "../img/computer1.jpg"
import solar from "../img/solar.png"
import tryunfo from "../img/tryunfo.png"
import trivia from "../img/trivia.png"
import store from "../img/store.png"
import tunes from "../img/tunes.png"
import starwars from "../img/starwars.png"

export const Projects = () => {

  const back = [
    {
      title: "Em desenvolvimento",
      description: " Em desenvolvimento",
      imgUrl: computer1,
    },
  ]
  
  const projects = [
    {
      title: "Jogo de Trivia",
      description: " Game de perguntas e respostas",
      imgUrl: trivia,
    },
    {
      title: "Tryunfo",
      description: " Criar cards personalizados",
      imgUrl: tryunfo,
    },
    {
      title: "Solar System",
      description: " Modelo do sistema solar",
      imgUrl: solar,
    },
    {
      title: "Shopping Cart",
      description: " Carrinho de compras dinâmico (mercado livre)",
      imgUrl: store,
    },
    {
      title: "TrybeTunes",
      description: " Aplicação capaz de reproduzir músicas",
      imgUrl: tunes,
    },
    {
      title: "Starwars",
      description: " Planetas do universo de Star Wars ",
      imgUrl: starwars,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={2}>
            <TrackVisibility >
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="project-de">Projetos</h2>
                <p className="description">Durante minha carreira como programador tive oportunidade de desenvolver vários projetos incríveis, gostaria de conhecê-los?</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back-end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          back.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          back.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
