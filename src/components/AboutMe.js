import React from 'react'
import './pageFormat.css';


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
        className = "container"
        >
              {props.children}
              <div className = "slider1 rel">

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
                        welcome!
                    </p>
                   
              </div>

        </div>
    )

    }



export default Home