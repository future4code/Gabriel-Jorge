import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../Constatnts/urls";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core"

const PostCommentContainer = styled.div`

padding-left: 3em;
padding-top: 2em;
width: 25em; 
align-items: center;
`


const AddPost = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ title:"", body:""})


    const addCommentPost = (id) => {
        const url = `${BASE_URL}/posts`
        const token = localStorage.getItem('token')
        const header = {headers: {Authorization: token} } 
    
        axios.post(url,form,header)
    
        .then((res) => {   
            console.log(res) 
            clear()    
        })
    
        .catch((err) =>{
            console.log(err)
         alert("já pode chorar...!!!")
        })
    }   





    const onSubmitForm = (event) => {
        event.preventDefault()
        addCommentPost()
        console.log(form)
    }

    return(
        <PostCommentContainer>
            <form onSubmit={onSubmitForm}>
                        <TextField
                            name={"title"}
                            value={form.title}
                            onChange={onChange}
                            label={"Titulo"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={"text"}
                         
                            
                        />
                        <TextField
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            label={"No que você está pensando???"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={"text"}
                            
                        />
                        <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"dense"}
                    >
                        Enviar Comentario
                    </Button>
                        
            </form>
        </PostCommentContainer>
    )
}

export default AddPost

