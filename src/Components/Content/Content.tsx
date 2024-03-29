
import { useRef } from "react";
import covergrowth from '../../assests/covergrowth.png';
import './Content.scss';
import  {Course}  from "../Courses/Course";

const Content = () => {
  const elementRef = useRef(null);

  const handleHorizantalScroll = (element:any, speed:any, distance:any, step:any) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      // if (element.scrollLeft === 0) {
      //   setArrowDisable(true);
      // } else {
      //   setArrowDisable(false);
      // }
    }, speed);
  };

  return (
    <>
      <div className="content" style={{ backgroundImage: `url(${covergrowth})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div className="content__title">iEvoke... iEvolve... iEventuate...</div>
                <div className="content__description"><span>iEv</span>provides an effective and powerful platform to enhance your knowledge</div>
                <div className="content__offer">
                    <div className="heading">What we offer</div> 
                    Want to bullet-proof your career, accelerate your success or start a career in sustainable EV's then iEV Virtual Platform is the only source you will ever need.
                     Our platform gives you a single-point of access to thought-leaders, entrepreneurs, businesses, career information, and innovative start-ups so you can spend your time learning with experts and getting hands-on experience 
                     <div className="text">
                     Create a personalised learning journey with our mix and match range of learning experiences. Use our online and blended courses to develop your knowledge, build skills or deepen your expertise with a click. Catalyse your success with employers by completing a templated career path. Participate in workshops to gain hands-on experience. Ensure success for you by taking control of your future with iEV Virtual platform, your personal talent development partner. At IEV Technologies, we are committed to making learning accessible to everyone. Our Learning Management System (LMS) provides an intuitive platform where users can easily access and manage their learning content. We understand that everyone learns differently, so our system is designed to be user-friendly and comprehensive, allowing users to customize their learning experience. 
                      We strive to stay ahead of the curve by providing innovative learning solutions and the latest technologies, so you can make the most of your learning experience
                      </div>  <span>Sign up</span> for our LMS today to start advancing your education.
                    <Course/>
                </div>
            </div>

            <div className="testimonialscontainer" >
                    <div className="heading">Our Esteemed Student Feedback<div></div></div>
                        <div className="testimonials">
                                <div className="testimonials__arrow" onClick={() => {handleHorizantalScroll(elementRef.current, 20, 600, -10);}}><div>{'<'}</div></div>
                                <div className="testimonials__container" ref={elementRef}>
                                    <div className="testimonials__subcontainer">Testimonial 1</div>
                                    <div className="testimonials__subcontainer">Testimonial 2</div>
                                    <div className="testimonials__subcontainer">Testimonial 3</div>
                                    <div className="testimonials__subcontainer">Testimonial 4</div>
                                    <div className="testimonials__subcontainer">Testimonial 5</div>
                                    <div className="testimonials__subcontainer">Testimonial 6</div>
                                </div>
                                <div className="testimonials__arrow"  onClick={() => { handleHorizantalScroll(elementRef.current, 20, 600, 10); }} ><div>{'>'}</div></div>
                            </div>
                </div>

    </>
  );
};
export default Content;



