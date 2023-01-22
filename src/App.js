import "./Assets/main.css"
import logo from "./Assets/images/Logo.png"
import weather from "./Assets/images/weather.png"
import me from "./Assets/images/me.jpg"
import teacher from "./Assets/images/teacher.jpg"
import films from "./Assets/images/films.jpg"
import vet from "./Assets/images/vet.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import CountUp from "react-countup"
import { useEffect } from "react"
import { useState } from "react"
import ScrollTrigger from "react-scroll-trigger"


function App() {

  const [click, setClick] = useState(false)
  const [counterOn, setCounterOn] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const handleClick = () =>{
    if(click){
      return setClick(false)
    }

    setClick(true)
  }

  return (
    <>
      <div className="container">

        <header className={click ? 'header open' : 'header'}>
          <a href="/" className="logo"><img className="logo__img" src={logo} alt="Logo" /></a>

          <nav className="nav">
            <ul className="nav__list">
              <li onClick={() => setClick(false)} className="nav__item"><a className="nav__link" href="#">Home</a></li>
              <li onClick={() => setClick(false)} className="nav__item"><a className="nav__link" href="#about">About</a></li>
              <li onClick={() => setClick(false)} className="nav__item"><a className="nav__link" href="#experience">Experience</a></li>
              <li onClick={() => setClick(false)} className="nav__item"><a className="nav__link" href="#portfolio">Portfolio</a></li>
            </ul>
          </nav>

          <button onClick={handleClick} className="header__btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
        </header>

        <main>

          <section className="hero">
            <h2 className="hero__title">Hello , I'm Shohrux</h2>
            <div className="wrapper-hero">
              <div className="static-txt"> I ' m a </div>
              <ul className="dynamic-txts">
                <li><span>Student of TDIU</span></li>
                <li><span>Web Developer</span></li>
                <li><span>From Tashkent</span></li>
              </ul>
            </div>
          </section>

          <section id="about" className="about">
            <img className="about__img" src={me} alt="me" data-aos="fade-right" />
            <div className="about__content" data-aos="fade-left">
              <h1 className="about__background">About</h1>
              <h2 className="about__title">Hi!  I'm Shohrux Abdullayev</h2>
              <p className="about__quote">Most good programmers do their jobs not because they expect to be paid or recognized,
                but because they enjoy programming.
              </p>
              <a className="about__resume" href="#resume">Checkout my resume</a>

              <div className="wrapper wrapper__about">

                <a target="_blank" className="icons-link" href="https://github.com/ShohruxMurodovich">
                  <div className="button">
                    <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></div>
                    <span>GitHub</span>
                  </div>
                </a>

                <a target="_blank" className="icons-link" href="https://t.me/Murodovich_1">
                  <div className="button">
                    <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg></div>
                    <span>Telegram</span>
                  </div>
                </a>

                <a target="_blank" className="icons-link" href="https://www.instagram.com/1.shokh.dobr1y_/">
                  <div className="button">
                    <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></div>
                    <span>Instagram</span>
                  </div>
                </a>

              </div>

              <h3 className="about__contacts">Contact me here!</h3>
              <p className="about__contact">Email: <a className="about__contact-link" href="mailto: murodovichshohruh@gmail.com"> murodovichshohruh@gmail.com</a></p>
              <p className="about__contact">Phone: <a className="about__contact-link" href="tel:998931055049"> +998931055049</a></p>
            </div>

          </section>

          <section id="experience" data-aos="fade-up" className="experience">
            <h2 className="experience__title">Education</h2>

            <div  className="experience__content">

              <div className="experience__wrap">
                <h4 className="experience__sub-title">Self study Html && Css && Js <span> - Online Courses </span></h4>
                <p className="experience__text">2020-2021</p>
              </div>

              <p className="experience__location">Uzbekistan - Tashkent</p>

            </div>

            <hr />

            <div className="experience__content">

              <div className="experience__wrap">
                <h4 className="experience__sub-title">Full Stack Programmer<span> - Najot Ta'lim </span></h4>
                <p className="experience__text">2021-2023</p>
              </div>

              <p className="experience__location">Uzbekistan - Tashkent</p>

            </div>

            <hr />

            <div className="experience__content">

              <div className="experience__wrap">
                <h4 className="experience__sub-title">Accounting and auditing<span> -TDIU </span></h4>
                <p className="experience__text">2022-2027</p>
              </div>

              <p className="experience__location">Uzbekistan - Tashkent</p>

            </div>

            <hr />


            <h2 className="experience__title experience__title--second">My Skills</h2>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--first">Html & CSS & SASS</h4>
              <span className="progress__percent">90%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={90}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--second">Bootstrap</h4>
              <span className="progress__percent">80%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={80}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--third">JavaScript</h4>
              <span className="progress__percent">75%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={75}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--fourth">React.Js</h4>
              <span className="progress__percent">70%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={70}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--five">Node.Js & Express.Js</h4>
              <span className="progress__percent">65%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={65}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--six">PostgreSQL</h4>
              <span className="progress__percent">75%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={75}/>
          </div>

          <div data-aos="fade-right" className="experience__progress progress">
            <div className="progress__wrap">
              <h4 className="progress__title progress__title--seven">Graphql & Apollo-Server</h4>
              <span className="progress__percent">50%</span>
            </div>
            <input className="progress__range" type="range" readOnly value={50}/>
          </div>

          </section>

          <section data-aos="fade-up" id="portfolio" className="portfolio">

            <p className="portfolio__text">PORTFOLIO</p>
            <h2 className="portfolio__title">Checkout a few of my works</h2>


            <div className="portfolio__project project" data-aos="fade-up">
              <div className="project__content">
                <p className="project__description">EASY PROJECT HTML AND CSS</p>
                <h3 className="project__title">Vet Clinic sity developed at HTML and CSS</h3>
                <p className="project__language">FrontEnd: Html Css</p>
                <a className="project__view" href="https://neon-kulfi-dc18be.netlify.app/" target="blank">View Project</a>
                <a className="project__repository" href="https://github.com/ShohruxMurodovich/2-oy-exam" target="blank">GitHub Repository</a>

              </div>
              <img className="project__img" src={vet} alt="Project Img" />
            </div>


            <div className="portfolio__project project" data-aos="fade-up">
              <div className="project__content">
                <p className="project__description">Easy Project Js</p>
                <h3 className="project__title">Filter , Search and Book films</h3>
                <p className="project__language">FrontEnd: Html, Css, Js</p>
                <a className="project__view" href="https://shohrux-films-book.netlify.app/" target="blank">View Project</a>
                <a className="project__repository" href="https://github.com/ShohruxMurodovich/book-films" target="blank">GitHub Repository</a>

              </div>
              <img className="project__img" src={films} alt="Project Img" />
            </div>

            <div className="portfolio__project project" data-aos="fade-up">
              <div className="project__content">
                <p className="project__description">Weather App</p>
                <h3 className="project__title">Simple Weather App in React</h3>
                <p className="project__language">FrontEnd: React</p>
                <a className="project__view" href="https://shohrux-weather-app.netlify.app/" target="blank">View Project</a>
                <a className="project__repository" href="https://github.com/ShohruxMurodovich/weather-app" target="blank">GitHub Repository</a>

              </div>
              <img className="project__img" src={weather} alt="Project Img" />
            </div>


            <div className="portfolio__project project" data-aos="fade-up">
              <div className="project__content">
                <p className="project__description">Teacher and students</p>
                <h3 className="project__title">Homework site between Teacher and Students</h3>
                <p className="project__language">FrontEnd: React</p>
                <p className="project__language">Backend: Node.Js</p>
                <p className="project__language">Database: PostgreSQL</p>
                <p className="project__language">Admin</p>
                <p className="project__language">Login: admin</p>
                <p className="project__language">Password: admin</p>
                <a className="project__view" href="https://teacher-student.netlify.app/" target="blank">View Project</a>
                <a className="project__repository" href="https://github.com/ShohruxMurodovich/teacher-student-backend" target="blank">GitHub Repository</a>
              </div>
              <img className="project__img" src={teacher} alt="Project Img" />
            </div>

          </section>


        <section id="achievments" data-aos="fade-up" className="achievments">
            <p className="portfolio__text achievment__text">PORTFOLIO</p>
            <h2 className="portfolio__title achievment__title">I love to share my achievements</h2>

            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className="achievments__case">

              <div data-aos="fade-up" className="achievments__item item">
                <span className="item__text">Clients</span>
                <strong className="item__number">{counterOn && <CountUp end={3} duration={2} />}</strong>
              </div>

              <div data-aos="fade-up" className="achievments__item item">
                <span className="item__text">Projects</span>
                <strong className="item__number">{counterOn && <CountUp end={15} duration={2} />}</strong>
              </div>

              <div data-aos="fade-up" className="achievments__item item">
                <span className="item__text">Cups of Coffee</span>
                <strong className="item__number">{counterOn && <CountUp end={100} duration={2} />}</strong>
              </div>

            </div>

            </ScrollTrigger>

          </section>

        </main>

        <footer className="footer">

          <div className="wrapper" data-aos="fade-up">

            <a target="_blank" className="icons-link" href="https://github.com/ShohruxMurodovich">
              <div className="button">
                <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></div>
                <span>GitHub</span>
              </div>
            </a>

            <a target="_blank" className="icons-link" href="https://t.me/Murodovich_1">
              <div className="button">
                <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg></div>
                <span>Telegram</span>
              </div>
            </a>

            <a target="_blank" className="icons-link" href="https://www.instagram.com/1.shokh.dobr1y_/">
              <div className="button">
                <div className="icon"><svg className="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></div>
                <span>Instagram</span>
              </div>
            </a>

          </div>

          <h2 className="footer__title">Contact Us</h2>
          <a className="footer__mail" href="mailto: murodovichshohruh@gmail.com">murodovichshohruh@gmail.com</a>


          <p className="footer__text">Copyright © All rights reserved | This template is made by Abdullaev</p>

        </footer>

      </div>
    </>
  );
}

export default App;
