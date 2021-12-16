import react from "react"
import styled from "styled-components"
import useProtectedPage from "../hooks/useProtectedPage"

const DivO = styled.div`

color: white;

` 

const PostPage = () => {

    useProtectedPage()

    return(
        <DivO>
            <h1>Post Page ok</h1>
        </DivO>
    )

}

export default PostPage