import React from "react";
import styled from "styled-components";


const FeedCardContainer = styled.div`
    min-height: 200px;
    width: 300px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    border:1px solid white;
`


const CardNameContainer = styled.section`
    height: 20%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

`
const CardDetailsContainer = styled.section`
    height: 80%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

const FeedCard = (props) => {

    return (
        <FeedCardContainer onClick={props.onClick}>
            <CardNameContainer>
                {props.name}
            </CardNameContainer>
            <CardDetailsContainer>         
                {props.body}
            </CardDetailsContainer> 
        </FeedCardContainer>
    )


}

export default FeedCard