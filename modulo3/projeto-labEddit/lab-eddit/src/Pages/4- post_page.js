import react from "react"
import styled from "styled-components"
import useProtectedPage from "../hooks/useProtectedPage"
import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getFeed, getComments } from "../API/apirequest"
import { downVoteComment, removeVoteComment, upVoteComment } from "../API/apicomment"
import CommentCard from "../Components/commentCard"


const PostContainer = styled.div`
/* background-color:red ; */

.title{
    display:flex ;
    align-items: center;
    margin:  30px 0px 30px 100px;
    font-size: 20px;
}

.bodyPost{
    background: rgba(225, 148, 35, 0.3);
    margin: 30px;
    padding: 30px;
    max-width: 500px;   
    border: 3px solid green;
    border-radius: 20px;
    box-shadow: 10px 10px purple;
    font-size: 30px;
 }
.commentPost{
    background: rgba(0,130,0, 0.2);
    margin: 30px;
    padding: 0px 30px 30px 30px ;
    max-width: 500px;   
    border: 3px solid green;
    border-radius: 20px;
    box-shadow: 10px 10px purple;
    font-size: 20px;
}
.titleH2{
    margin: 20px 0px 20px 0px;
    background-color: purple ;
    max-width:165px;
    padding: 10px;
    border-radius: 20px 0px 20px 0px;
    border: 3px solid green;
    
}
`
const PostCommentsContainer = styled.div`
margin: 20px;

.userName{
    text-shadow: 2px 2px green;
    background: purple;
    max-width: 200px;
    padding: 5px 0px 10px 10px ;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px solid green;
}
.CardCommentInteract{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top:70px;
    
}
.button{
    background: rgba(165,53,12, 0.7); 
    padding: 10px 30px;
    border-radius: 20px;
    font-size:20px;


}
`




const PostPage = () => {
    useProtectedPage()
    
    const [postList, setPostList] = useState([])
    const [postComments, setPostComments] = useState([])

    const history = useHistory()
    const params = useParams()


    const link = params.id

    useEffect(() => {
        getFeed(setPostList)
        getComments(link,setPostComments)
    },[history, postComments ])


    const actualPost = postList.filter((details) => {
        return details.id === params.id}).map((details) => {
            return (
                <div key={details.id}>
                    <p>{details.username.toUpperCase()}</p>
                    {/* <p>{details.title}</p> */}
                    <p>{details.body}</p>
                    
                </div>
            )
        }) 
    
    const actualPostComments = postComments.map((comments) => {
        return(
            <PostCommentsContainer>
                <div className="userName">
                    <p>{comments.username.toUpperCase()}</p>
                </div>
                <p>{comments.body}</p>
                 

                <div className="CardCommentInteract">
                {
                    comments.userVote ? <button className='button' onClick={() => {removeVoteComment(comments.id)}}><ion-icon name="thumbs-up"></ion-icon></button> : <button className='button' onClick={() => {upVoteComment(comments.id)}}><ion-icon name="thumbs-up-outline"></ion-icon></button> 
                }
                
                {comments.voteSum ? <p>{comments.voteSum}</p> : <p>0</p>}
                
                {
                    comments.userVote ? <button className='button' onClick={() => {removeVoteComment(comments.id)}}><ion-icon name="thumbs-down"></ion-icon></button> : <button className='button' onClick={() => {downVoteComment(comments.id)}}> <ion-icon name="thumbs-down-outline"></ion-icon></button> 
                }
                
                </div>

            </PostCommentsContainer>
        )
    })


    

    return(
        <PostContainer>
            <div className="title">
                <h1>Post</h1>
            </div>
            <div className="bodyPost">
            {actualPost}
            </div>
            <div className="commentPost">
                <h2 className="titleH2">Comentarios</h2>
            {actualPostComments}
            </div>            
            {CommentCard()}
        </PostContainer>
            
    )

}

export default PostPage