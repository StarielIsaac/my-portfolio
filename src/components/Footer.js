import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h4 className='my-logo' >Stariel .F</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/stariel-isaac/" target='_blank' rel="noreferrer" ><LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon></a>
                <a href="https://github.com/StarielIsaac" target='_blank' rel="noreferrer"><GitHubIcon sx={{ fontSize: 30 }} ></GitHubIcon></a>
                <a href="https://www.instagram.com/starielisaac/?igshid=ZDdkNTZiNTM%3D" target='_blank' rel="noreferrer"><InstagramIcon sx={{ fontSize: 30 }}></InstagramIcon></a>
            </div>
            <p className="desenvolvido">Desenvolvido por <strong>Stariel Isaac</strong> </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
