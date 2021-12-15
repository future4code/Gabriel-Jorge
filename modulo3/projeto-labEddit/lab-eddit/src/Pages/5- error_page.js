import react from "react"
import styled from "styled-components"

const DivO = styled.div`
/* background-color:rgba(128, 160, 132, 0.268); */
color: white;
display:flex;
flex-direction:column;
align-items: center;
/* padding-top: 20px
padding-bottom: 20px */
` 
 

const ErrorPage = () => {

    return(
        <DivO>            
                <h1>Error Page ok</h1>
            
                <iframe src="https://giphy.com/embed/aYpmlCXgX9dc09dbpl" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/iranserver-iran-server-bluebot-blue-bot-aYpmlCXgX9dc09dbpl">via GIPHY</a></p>
        </DivO>
    )
}

export default ErrorPage