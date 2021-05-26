import React from 'react'
import './pageFormat.css';
import img from './AnthonyIllescas.jpg'

function CommentText(props){
    return(
        <div >
            {props.content}
        </div>
    )
}
function Home(props){

    return(
        <div

        style = {{backgroundColor: props.color}}
    
        >
              {props.children}
              <div className = "slider rel">

                        <p >
                        <br></br>
                        <br></br>
                        <br></br>
                        <CommentText content = {props.message}></CommentText>
                        <div></div>
                        <br></br>
                        <img src={img} alt="FirstWebsite"></img>
                    </p>
                    <p >
                        welcome1!
                    </p>
                   
              </div>

        </div>
    )

    }



export default Home