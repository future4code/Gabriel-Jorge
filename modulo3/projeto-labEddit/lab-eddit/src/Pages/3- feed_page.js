import react from "react"
import styled from "styled-components"
import { goToPostPage } from "../Components/coordinator"
import useProtectedPage from "../hooks/useProtectedPage"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from '../Constatnts/urls'
import FeedCard from "../Components/feedCard"
import { useEffect, useState } from "react"
import { getFeed } from "../API/apirequest"


const FeedContainer = styled.div`

min-height: 100vh;
width:100%;



.PageTitle{
h1{
    color: white;

}
}
.PageContent{
    display :flex ;
    flex-wrap: flex;
    /* flex-direction:row; */
    /* max-width: 90%; */
    width: 100%;
    /* background-color: red; */
    min-height: 100%;
}

.title{
    text-align:center;
    margin: 50px;
    font-size: 60px
}
`

const PostsContainer = styled.div`

`







const FeedPage = () => {
    useProtectedPage()

const [postList, setPostList] = useState([])

    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)

    useEffect(() => {
        getFeed(setPostList)
    }, [postList])


const feedCards = postList.map((recipe) => {
    return(
        <FeedCard
            id={recipe.id}
            title={recipe.title}
            name={recipe.username}
            body={recipe.body}  
            time={recipe.createdAt} 
            userId={recipe.userId}     
            voteSum={recipe.voteSum}
            commentCount={recipe.commentCount}
            userVote={recipe.userVote}          
           

        />
    )
})

    
    return(
        <FeedContainer>
            <div className='PageTitle'>
                <h1 className='title'>Feed</h1>
            </div>
            <div className='PageContent'>
                <PostsContainer>
                    {feedCards}
                </PostsContainer>
            </div>
        </FeedContainer>
    )

}

export default FeedPage