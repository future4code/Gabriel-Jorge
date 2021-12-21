import React from "react";
import { CardActionArea } from "@material-ui/core";
// import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import styled from "styled-components";



// const RecipeListContainer = styled.div`
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// margin: 30px;
// `

// const AddRecipeButton = styled(Fab)`
// position: fixed !important;
// rigth: 20px;
// bottom: 20px;
// z-index: 3;
// `



const FeedCardContainer = styled.div`
border:1px solid black;
`
const FeedCardContent = styled.div`


`
const ContainerNovo = styled.div`
display:flex;
flex-direction:column;
align-items: center;


text-align: center;
color: red;
max-width:250px
`

const FeedCard = (props) => {

    return (
        <FeedCardContainer onClick={props.onClick}>
            <CardActionArea>
                {/* <CardMedia>
                alt={props.ti}
                title={props.title}
                </CardMedia> */}
                <FeedCardContent>
                <ContainerNovo>
                    <Typography /*align={'center'}*/>
                        {props.title.toUpperCase()}                                             
                    </Typography>       
                        {props.body}                            
                        </ContainerNovo>
                </FeedCardContent>
            </CardActionArea>
        </FeedCardContainer>
    )


}

export default FeedCard