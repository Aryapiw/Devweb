import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import modelconfusionmatrix from "/Users/simar/Documents/projectportfolio/src/assets/img/confusion_matrix.png";
import webapppic from "/Users/simar/Documents/projectportfolio/src/assets/img/web_app_pic.png"
import couponmatrix from "/Users/simar/Documents/projectportfolio/src/assets/img/coupon_confusion_matrix.png"
import ttd from "/Users/simar/Documents/projectportfolio/src/assets/img/ttd_pic.png"
import websitepic from "/Users/simar/Documents/projectportfolio/src/assets/img/websitepic.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pepper-Weed Discrimination Model",
      description: "Architeched a computer vision model for discrimination between pepper crops and weeds using deep learning frameworks. Obtained an overall 90.6% mAP, 99% accuracy for pepper crop detection and 79% accuracy for weed detection.",
      imgUrl: modelconfusionmatrix,
      link: "https://github.com/Simar0108/Weed-Discrimination-Model",
    },
    {
      title: "Pepper-Weed Discrimination Model Web Application",
      description: "Web Application for ease of model inference. Permits uploads of images, videos, live-webcam footage, youtube videos, and rtsp.",
      imgUrl: webapppic,
      link: "https://pepperss.streamlit.app/"
    },
    {
      title: "Coupon Prediction Model",
      description: "Developed ML model and did thorough Data Analysis (EDA) to determine which coupon of a variety was the most likely to be picked by customers",
      imgUrl: couponmatrix,
      link: "https://github.com/Simar0108/Coupon-Prediction-Model"
    },
    {
      title: "Exploring Real-Time Bidding Data: The Trade Desk",
      description: "Analyzed 'The Trade Desk' provided data and their machine learning pipeline in order to improve the location prediction model. Simulated real-time bidding auctions within the context of ad placement.",
      imgUrl: ttd,
      link: "https://colab.research.google.com/drive/1EgcHcAbAfhKRXtOp-iZsC97S-kZRYORN"
    },
    {
      title: "Project Portfolio",
      description: "Welcome! Glad you made it. Developed a portfolio website to host my projects!",
      imgUrl: websitepic,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a couple of my projects!</p>
                <p>Feel free to click on any of the project cards to see them in action!</p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}



/*import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import modelconfusionmatrix from "/Users/simar/Documents/projectportfolio/src/assets/img/confusion_matrix.png";
import webapppic from "/Users/simar/Documents/projectportfolio/src/assets/img/web_app_pic.png"
import couponmatrix from "/Users/simar/Documents/projectportfolio/src/assets/img/coupon_confusion_matrix.png"
import ttd from "/Users/simar/Documents/projectportfolio/src/assets/img/ttd_pic.png"
import websitepic from "/Users/simar/Documents/projectportfolio/src/assets/img/websitepic.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pepper-Weed Discrimination Model",
      description: "Architeched a computer vision model for discrimination between pepper crops and weeds using deep learning frameworks. Obtained an overall 90.6% mAP, 99% accuracy for pepper crop detection and 79% accuracy for weed detection.",
      imgUrl: modelconfusionmatrix,
      link: "https://github.com/Simar0108/Weed-Discrimination-Model",
    },
    {
      title: "Pepper-Weed Discrimination Model Web Application",
      description: "Web Application for ease of model inference. Permits uploads of images, videos, live-webcam footage, youtube videos, and rtsp.",
      imgUrl: webapppic,
    },
    {
      title: "Coupon Prediction Model",
      description: "Developed ML model and did thorough Data Analysis (EDA) to determine which coupon of a variety was the most likely to be picked by customers",
      imgUrl: couponmatrix,
      link: "https://github.com/Simar0108/Coupon-Prediction-Model"
    },
    {
      title: "Exploring Real-Time Bidding Data: The Trade Desk",
      description: "Analyzed 'The Trade Desk' provided data and their machine learning pipeline in order to improve the location prediction model. Simulated real-time bidding auctions within the context of ad placement.",
      imgUrl: ttd,
      link: "https://colab.research.google.com/drive/1EgcHcAbAfhKRXtOp-iZsC97S-kZRYORN"
    },
    {
      title: "Project Portfolio",
      description: "Welcome! Glad you made it. Developed a portfolio website to host my projects!",
      imgUrl: websitepic,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a couple of my projects!</p><p>Feel free to click on any of the projectcards to learn more!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
*/