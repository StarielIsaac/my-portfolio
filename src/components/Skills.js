import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2  className="project-de">Habilidades</h2>
                        <p>Nos últimos dois anos estudei algumas linguagens de programação, dessa forma <br></br>pude desenvolver várias habilidades requisitadas pelo mercado de trabalho.<br></br>Veja quais <strong>tecnologias e ferramentas</strong> tenho experiência.</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">                             
                                <i class="fa-brands fa-js fa-7x"></i>                   
                                <h5><i class="fa-regular fa-circle-check legends-sk "></i>Javascript</h5> 
                            </div>  
                            <div className="item">
                                <i class="fa-brands fa-react fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk "></i>React</h5>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-docker fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk "></i>Docker</h5>
                            </div>
                            <div className="item">
                            <i class="fa-brands fa-node-js fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk"></i>Node</h5>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-python fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk"></i>Python</h5>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-git-alt fa-7x"></i> 
                                <h5><i class="fa-regular fa-circle-check legends-sk"></i>Git</h5>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-html5 fa-docker fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk "></i>HTML</h5>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-css3-alt fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk"></i>CSS3</h5>
                            </div>
                            <div className="item">
                               <i class="fa-brands fa-linux fa-7x"></i>
                                <h5><i class="fa-regular fa-circle-check legends-sk "></i>Linux</h5>
                            </div>                                                                         
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <div className="background-image-left" ></div>
    </section>  
  )
}
