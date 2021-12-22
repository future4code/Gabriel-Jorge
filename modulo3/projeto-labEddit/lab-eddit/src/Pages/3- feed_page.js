import react from "react"
import styled from "styled-components"
import { goToPostPage } from "../Components/coordinator"
import useProtectedPage from "../hooks/useProtectedPage"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from '../Constatnts/urls'
import FeedCard from "../Components/feedCard"


const FeedContainer = styled.div`
min-height: 100vh;
width:100%;
display :flex ;
flex-direction:column;
justify-content: space-between;
align-items: center;
`

const FeedPage = () => {
    useProtectedPage()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)

const feedCards = feed.map((recipe) => {
    return(
        <FeedCard
            key={recipe.id}
            title={recipe.title}
            name={recipe.username}
            body={recipe.body}  
            time={recipe.createdAt}          
        />
    )
})

    
    return(
        <FeedContainer>
            <h1>Feed Page ok</h1>
           {feedCards}
        </FeedContainer>
    )

}

export default FeedPage