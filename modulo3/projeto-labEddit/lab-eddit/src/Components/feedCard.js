import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToPostPage } from "./coordinator";
import { upVote, downVote, removeVote} from "../API/apipost";
import { useEffect } from "react";


const FeedCardContainer = styled.div`
    min-height: 200px;
    width: 483px;
    display:inline-block;
    border:1px solid white;
    margin: 10px;
    box-shadow: 5px 5px 3px rgba(225, 148, 35, 0.3);
    background-color: rgba(0,130,0, 0.2);
    border-radius: 20px 20px 0px 0px;
    
.CardName{   
    border: 2px solid rgba(225, 148, 35, 1) ;
    border-radius: 20px ;
    height: 20%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-shadow:3px 2px rgba(225, 148, 35, 0.4) ;
    font-size: 30px
}

.CardDetails{
    height: 80%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: 20px;
    /* margin-bottom: 20px */
    margin-left:5px
    margin-right:5px
    /* max-width:220px */
}

.CardInteract{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top:70px
    /* background-color: yellow; */ 
    
}
`







const FeedCard = (props) => {

    const history = useHistory() 
    useEffect(() => {
        

    })





    return (
        <FeedCardContainer onClick={props.onClick}>
            <div className="texte">
        <div className='CardName'>
            
                {props.name.toUpperCase()}
            
        </div>
        <div className='CardDetails'>
                    
                {props.body}
            
        </div>
             <button onClick={() =>goToPostPage(history, props.id)}>Ver Post</button>
        <div className='CardInteract'>   
            
                {
                    props.userVote ? <button onClick={() => {removeVote(props.id)}}> Del</button> : <button onClick={() => {upVote(props.id)}}>Post</button> 
                }
                
                {props.voteSum}
                
                {
                    props.userVote ? <button onClick={() => {removeVote(props.id)}}> Del </button> : <button onClick={() => {downVote(props.id)}}>Put</button> 
                }
                
        </div>
        </div>
        </FeedCardContainer>
    )


}

export default FeedCard