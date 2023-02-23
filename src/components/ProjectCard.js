import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="projects-all" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          <span><i class="fa-solid fa-circle-check"></i>{description}</span>
          <p><a href="#" className="reposi"><i class="fa-sharp fa-solid fa-link"></i> Ver repositório</a></p>
          
        </div>
      </div>
    </Col>
  )
}
