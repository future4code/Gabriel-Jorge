import react from "react"
import styled from "styled-components"
import { goToPostPage } from "../Components/coordinator"
import useProtectedPage from "../hooks/useProtectedPage"


const DivO = styled.div`

color: white;

` 

const FeedPage = () => {
    
    useProtectedPage()
    return(
        <DivO>
            <h1>Feed Page ok</h1>
           
        </DivO>
    )

}

export default FeedPage