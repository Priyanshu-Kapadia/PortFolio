import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si"; 
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { DiPhp } from "react-icons/di"; 

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TinDog Website",
    demo: "https://priyanshu-kapadia.github.io/Tindog/",
    language: [
      {
        name: "HTML",
        logo: <SiHtml5 className="logo" />
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Javascript",
        logo: <SiJavascript className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: "Drum Kit",
    demo: "https://priyanshu-kapadia.github.io/Drum-Kit/",
    language: [
      {
        name: "HTML",
        logo: <SiHtml5 className="logo" />
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Javascript",
        logo: <SiJavascript className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 3,
    image: IMG3,
    title: "Simon Game",
    demo: "https://priyanshu-kapadia.github.io/Simon-Game/",
    language: [
      {
        name: "HTML",
        logo: <SiHtml5 className="logo" />
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Javascript",
        logo: <SiJavascript className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 4,
    image: IMG4,
    title: "ToDo List",
    demo: "https://relaxed-archimedes-f768fa.netlify.app/",
    language: [
      {
        name: "React",
        logo: <SiReact className="logo"/>
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      }
    ],
  },
  {
    id: 5,
    image: IMG5,
    title: "GenieBook Website",
    demo: "https://www.geniebooks.com/",
    language: [
      {
        name: "HTML",
        logo: <SiHtml5 className="logo" />
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Javascript",
        logo: <SiJavascript className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 6,
    image: IMG6,
    title: "Watch Clicker",
    demo: "https://wizardly-elion-d6ec68.netlify.app/",
    language: [
      {
        name: "HTML",
        logo: <SiHtml5 className="logo" />
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Javascript",
        logo: <SiJavascript className="logo"/>
      }
    ],
  },
  {
    id: 7,
    image: IMG7,
    title: "ReactApp",
    demo: "https://youthful-kalam-ba3030.netlify.app/",
    language: [
      {
        name: "React",
        logo: <SiReact className="logo"/>
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Node",
        logo: <SiNodedotjs className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 8,
    image: IMG8,
    title: "Portfolio Templete",
    demo: "https://youthful-kalam-ba3030.netlify.app/",
    language: [
      {
        name: "React",
        logo: <SiReact className="logo"/>
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      }
    ],
  },
  {
    id: 9,
    image: IMG9,
    title: "Nicol Wordpress Theme",
    demo: "https://wordpress.iqonic.design/product/wp/nicol/",
    language: [
      {
        name: "Wordpress",
        logo: <BsWordpress className="logo"/>
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Bootstrap",
        logo: <BsBootstrapFill className="logo"/>
      },
      {
        name: "PHP",
        logo: <DiPhp className="logo"/>
      }
    ]
  },
  {
    id: 10,
    image: IMG10,
    title: "KryptApp Web3",
    demo: "https://kryptomasteryweb3.netlify.app/",
    language: [
      {
        name: "React",
        logo: <SiReact className="logo"/>
      },
      {
        name: "CSS",
        logo: <SiCss3 className="logo"/>
      },
      {
        name: "Solidity",
        logo: <SiSolidity className="logo"/>
      },
      {
        name: "Tailwindcss",
        logo: <SiTailwindcss className="logo"/>
      }
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo, language }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="Portfolio-image" />
                <div className="language">
                  {language?.map(({ name, logo }) => {
                    return (
                      <div className="language-logo" key={name}>
                        {logo}
                        {name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
