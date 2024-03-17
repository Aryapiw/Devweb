import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

  const languages = ['Python', 'C++', 'JavaScript', 'SQL', 'R', 'HTML', 'CSS'];
  const softwaresFrameworks = ['Git', 'Heroku', 'AWS', 'Azure', 'Tableau', 'React', 'Django', 'PyTorch', 'TensorFlow', 'CI/CD', 'Jupyter Notebooks', 'Google Colab', 'Node.js'];
  const dataAnalysis = ["Pandas", "NumPy", "Matplotlib", "Sklearn", "Seaborn"];

  const SkillsCarousel = ({ items }) => (
    <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="skill-box">{item}</div>
        </div>
      ))}
    </Carousel>
  );
  
return (
    <section className="skill" id="skills">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>Here are a couple of the skills in my growing arsenal!<br></br> Languages, Softwares/Frameworks, and Data Analysis</p>
                    <div>
                      <h3 className="carousel-title">Languages</h3>
                      <SkillsCarousel items={languages} />
                    </div>
                    <div>
                      <h3 className="carousel-title">Softwares/Frameworks</h3>
                      <SkillsCarousel items={softwaresFrameworks} />
                    </div>
                    <div>
                      <h3 className="carousel-title">Data Analysis</h3>
                      <SkillsCarousel items={dataAnalysis} />
                </div>
              </div>
            </div>
        </div>
      </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}