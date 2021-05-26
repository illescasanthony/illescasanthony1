import React from 'react'
import './pageFormat.css';
import img from './FirstWebsite1.png'



function CommentText(props){
    return(
        <div >
            {props.content}
        </div>
    )
}
function Projects(props){

    return(
        
        <div            style = {{backgroundColor: props.color}}>
              {props.children}
              <div className = "slider1 aboutMe">

                        
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className ="header">
                        {/* <h1 style={{fontSize: 1.5}}>These are some of my projects</h1> */}
                        <CommentText content = {props.message}></CommentText>
                    <br></br>
                    <br></br>
                    <br></br>

                        </div>

                        <div class="cellContainer">
                        <div class = "projectContainer">
                            <div class="block">1. name of project</div>

                            <div class="block">
                                <div class="polaroid">
                                <img src={img} alt="FirstWebsite"  style = {{width: '100%'}}></img>
                                    {/* <img src="ProjectPictures/FirstWebsite.png" alt="FirstWebsite" style = {{width: 100}}></img> */}
                                    <div class ="containerI">
                                        <li><p>~</p></li>
                                        <li class="myDIV"><a  href="src/CellOne/index.html" target="_blank">Visit My First Website!</a></li>
                                        {/* <p class="hide"><li><p>/&gt</p></li></p> */}
                                    </div>
                                </div>
                            </div>
    
                            <div class="block">3. name of project</div>
                            <div class="block">4. name of project</div>
                            <div class="block">5. name of project</div>
                            <div class="block">6. name of project</div>

                        </div>
                        </div>
                     
               </div>
                        <div></div>
                        <br></br>
                       
               
                    <p></p>
                   
         </div>

    
    )

    }



export default Projects