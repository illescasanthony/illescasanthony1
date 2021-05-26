import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './components/pageFormat.css';


export default class App extends React.Component {


  
  render(){
    return (
      <div className = "container">
 
          <Home className = "page1 rel"  message =     "Hello, My name is Anthony" >  </Home>
          
          <AboutMe className = "slider1 aboutMe" message = " When I enrolled in college I found myself doing great things and in the process learning from amazing mentors and professors who encouraged me to do them My first out of school project was when I landed an undergraduate research experience with the National Science Foundation This is where my desire to pursue a degree in the computer science field solidified Being a part of a group to design and create something new and with the same goals is what is important to me in any work setting and I am confident that my skills and relevant experience will be an asset to helping any company to continue to be successful Strong Work Ethic ​My independence and drive are defining aspects of my work as both an undergraduate researcher and a tutor In both roles I completed individual tasks whether it was to figure out how to test different subjects for our experiment or quickly change my lesson plan during my tutoring session to what the instructor was teaching that day In each role I am grateful to have learned a great deal of uncertainty and the ability to independently initiate and complete a variety of tasks Which translates well to a dynamic and unpredictable work environment Teamwork​ The dynamic in a team to efficiently push out good work has to be with the people in it and their willingness to contribute and help others when needed The respect one has for anothers work is also a big factor to me when it comes to being in a team taking the time to acknowledge a peers hard work and help each other improve on work respectfully makes for a great team My idea of teamwork and working in one are assets for future projects Communication Skills​ My roles throughout my college career I have focused on developing a healthy rapport with professors mentors teammates and fellow college students in various settings throughout the year Being able to communicate efficiently and effectively I was able to get through my summer research with timeconstrained small projects coordinating with the entire panel of mentors My earnest effective and reliable communication was critical to successfully contributing to largescale projects">
          </AboutMe>

          <Projects className = "content relcel" message = "These are some of my Projects"    color = {"grey"}> </Projects>
       
          <ContactMe className = "slider rel" color = "grey" message = "Have an Idea? Contact Me!"></ContactMe>
      
      </div>

    );
  }
}