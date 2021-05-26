import React from 'react'
import './pageFormat.css';


function CommentText(props){
    return(
        <div >
            {props.content}
        </div>
    )
}
function ContactMe(props){

    return(
        <div

        style = {{backgroundColor: props.color}}
        
        >
              {props.children}
              <div>

                        
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className = "textContainer">
                      
                            <br></br>
                            <br></br>
                        <CommentText content = {props.message}></CommentText>

                        
              
                    &emsp;<p class="contacts"> 
                        <strong> Contact Me:</strong> &emsp; &emsp; &emsp;  <a href="https://www.linkedin.com/in/anthony-illescas-6470b5170/">LinkedIn</a>  &emsp; &emsp; &emsp;  <a href="https://github.com/illescasanthony">  GitHub</a>&emsp; &emsp; &emsp;  Phone: 914-414-8903 &emsp; &emsp; &emsp; Email: illescasanthony@gmail.com
                    </p>

                        </div>
                        <div></div>
                        <br></br>
                       
                   
                    <p >
                    </p>
                   
              </div>

        </div>
    )

    }



export default ContactMe