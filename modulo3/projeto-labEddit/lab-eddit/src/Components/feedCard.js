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
    border: 2px solid rgba(165,53,12, 0.7) ;
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
.button{
background: rgba(165,53,12, 0.7);
padding:20px 205px;
border-radius: 20px;
font-size:30px;
}

.button2{
    background: rgba(165,53,12, 0.7); 
    padding: 10px 30px;
    border-radius: 20px;
    font-size:20px;
}

.buttonPost{
    margin: 20px;
    
}

.textBody{
    background: rgba(165,53,12, 0.7);
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    margin: 20px;
    font-size:20px;
    box-shadow: 0px px 4px 4px green;
}
`







const FeedCard = (props) => {

    const history = useHistory() 
    useEffect(() => {
        

    })





    return (
        <div>
        <FeedCardContainer onClick={props.onClick}>
            <div className="texte">
        <div className='CardName'>
            
                {props.name.toUpperCase()}
            
        </div>
        <div className='CardDetails'>
            <div className='textBody'>      
                {props.body}
            </div>
        </div>

        <div className='buttonPost'>
             <button className='button' onClick={() =>goToPostPage(history, props.id)}><ion-icon name="chatbubble-ellipses-outline"></ion-icon></button>
        </div>
        
        <div className='CardInteract'>   
            
                {
                    props.userVote ? <button className='button2' onClick={() => {removeVote(props.id)}}> <ion-icon name="thumbs-up"></ion-icon> Del </button> : <button className='button2' onClick={() => {upVote(props.id)}}><ion-icon name="thumbs-up-outline"></ion-icon></button> 
                }
                
                {props.voteSum}
                
                {
                    props.userVote ? <button className='button2' onClick={() => {removeVote(props.id)}}><ion-icon name="thumbs-down"></ion-icon> Del </button> : <button className='button2' onClick={() => {downVote(props.id)}}><ion-icon name="thumbs-down-outline"></ion-icon></button> 
                }
                
        </div>
        </div>
        </FeedCardContainer>
        </div>
    )


}

export default FeedCard