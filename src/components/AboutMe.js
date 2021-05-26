import React from 'react'
import './pageFormat.css';


function CommentText(props){
    return(
        <div >
            {props.content}
        </div>
    )
}
function AboutMe(props){

    return(
        <div

        style = {{backgroundColor: props.color}}
        
        >
              {props.children}
              <div className = "slider1 aboutMe">

                        <p >
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className = "textContainer">
                            About Me:
                            <br></br>
                            <br></br>
                        <CommentText content = {props.message}></CommentText>
                        </div>
                        <div></div>
                        <br></br>
                       
                    </p>
                    <p >
                    </p>
                   
              </div>

        </div>
    )

    }



export default AboutMe