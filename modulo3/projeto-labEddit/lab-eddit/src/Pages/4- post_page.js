import react from "react"
import styled from "styled-components"
import useProtectedPage from "../hooks/useProtectedPage"
import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getFeed, getComments } from "../API/apirequest"
import { downVoteComment, removeVoteComment, upVoteComment } from "../API/apicomment"


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
                    <p>{details.title}</p>
                    <p>{details.body}</p>
                    <p>{details.username}</p>
                </div>
            )
        }) 
    
    const actualPostComments = postComments.map((comments) => {
        return(
            <div>
                <p>{comments.username}</p>
                <p>{comments.body}</p>
                {comments.voteSum ? <p>{comments.voteSum}</p> : <p>0</p>} 

                {
                    comments.userVote ? <button onClick={() => {removeVoteComment(comments.id)}}> Del</button> : <button onClick={() => {upVoteComment(comments.id)}}>Post</button> 
                }
                
                {comments.voteSum}
                
                {
                    comments.userVote ? <button onClick={() => {removeVoteComment(comments.id)}}> Del </button> : <button onClick={() => {downVoteComment(comments.id)}}>Put</button> 
                }


            </div>
        )
    })


    // "id": "b42bb516-09c4-45f7-b378-f4b80bb8b4cd",
    // "body": "Primeiro comentário",
    // "createdAt": "2021-05-28T12:59:24.633Z",
    // "userId": "a45f6d7f-be44-497e-94ee-759673ca5d16",
    // "postId": "6503d483-68ee-4b96-b399-44cbb5e2041b",
    // "voteSum": null,
    // "userVote": null


    return(
        <div>
            <h1>Post Page ok</h1>
            {actualPost}
            <br></br>
            {actualPostComments}
        </div>
    )

}

export default PostPage