import styled from "styled-components";

export const Geral = styled.div`
display: flex;
flex-direction: column;
/* background-color: purple; */
background-color: rgba(75, 0, 275, 0.2);
align-items: center;
min-height: 100vh;

select{
background-color: rgba(0, 44, 181, 0.38);
margin: 10px;
width: 350px;
height: 50px;
border-radius: 20px;
border:5px solid rgb(106, 90, 205);
}

h1{
color:white;
}
 
input{
background-color: burlywood;
margin: 10px;
width: 350px;
height: 50px;
border-radius: 20px;
border:5px solid rgb(106, 90, 205);
}

input::placeholder {
  color: whitesmoke;
}

button{
  color: white;
    background-color: black; 
padding: 15px 30px;
width: 150px;
border-radius: 20px;
margin: 15px;
border:5px solid rgb(106, 90, 205);

}


button:hover{
background-color: wheat;
transition: 0.2s;
border:5px solid red;
}


button:active{
background-color: red;

}
` 

// const Button = styled.button`
//     color: black;
//     font-size: 1em;
//     margin: 1em;
//     padding: 2px solid palevioletred;
//     border: 2px solid palevioletred;
//     border-radius: 20px;
//     `