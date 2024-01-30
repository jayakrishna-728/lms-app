import React, { useState, useEffect } from "react";
import './Submenu.scss';
import { useNavigate, useLocation } from "react-router-dom";

const Submenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isContactActive, activeContact] = useState(false);
  const [isHomeActive, activeHome] = useState(false);
  const [isAboutActive, activeAbout] = useState(false);
  const [isCourses, activeCourses] = useState(false);
  const [isTestimonials, activeTestimonials] = useState(false);

  useEffect(() => {
    // Check the current route on component load
    console.log(location.pathname);
    switch (location.pathname) {

      case '/form':
        makeFormActive();
        break;
      case '/':
        makeHomeActive();
        break;
      // Add cases for other routes if needed
      default:
        break;
    }
  }, [location.pathname]);

  function handleNavigationToForm() {
    navigate('/form');
    makeFormActive();
  }

  function handleNavigationToHome() {
    navigate('/');
    makeHomeActive();
  }


  function makeHomeActive(){
    activeContact(false);
    activeHome(true);
    activeAbout(false);
    activeCourses(false);
    activeTestimonials(false);
  }
  function makeFormActive(){
    activeContact(true);
    activeHome(false);
    activeAbout(false);
    activeCourses(false);
    activeTestimonials(false);
  }

  return (
    <div className="submenu">
      <div className={`${isHomeActive ? 'submenu__home active' : 'submenu__home'}`} onClick={handleNavigationToHome}>Home</div>
      <div className={`${isAboutActive ? 'submenu__aboutus active' : 'submenu__aboutus'}`}>About us</div>
      <div className={`${isCourses ? 'submenu__courses active' : 'submenu__courses'}`}>Courses</div>
      <div className={`${isTestimonials ? 'submenu__testimonials active' : 'submenu__testimonials'}`}>Testimonials</div>
      <div className={`${isContactActive ? 'submenu__contactus active' : 'submenu__contactus'}`} onClick={handleNavigationToForm}>Contact us</div>
    </div>
  );
}

export default Submenu;
