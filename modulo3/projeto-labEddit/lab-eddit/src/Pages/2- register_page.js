import react from "react"
import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"
// import { findByLabelText } from "@testing-library/react"
import { goToFeedPage } from '../Components/coordinator'
import useForm from "../hooks/useForm"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import axios from "axios"
import { BASE_URL } from "../Constatnts/urls"


const ScreenContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width:100vw
/* margin-top:20vh */ ---------------------------------ajustar espaçamento

`

const ImputsContainer = styled.div`
display: flex ;
flex-direction: column;
align-items: center;
width: 40vw;
max-width: 450px;
min-width: 300px;
margin-bottom: 20px;
margin-top: 20vh;
`




const RegisterPageForm = () => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({username:'', email: '', password: '' })    

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, history, clear)
    }

    const register = (body, history, clear) => {
        axios.post(`${BASE_URL}/users/signup`, body)

        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
            /* alert("Cadastro Realizado com Sucesso !!!") */
        })

        .catch((err) => alert("Erro no Cadastro !"))
    }

    useUnprotectedPage()
    return(
        <form onSubmit={onSubmitForm}>
        {<h1>Register Page</h1>}
            <ScreenContainer>                
                <ImputsContainer>
                    
                    <TextField
                            name={"username"}
                            value={form.username}
                            onChange={onChange}
                            label={"Nome"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            autoFocus
                        />
                        <TextField
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"Email"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={"email"}
                        />
                        <TextField
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            label={"Senha"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={"password"}
                        />
                        </ImputsContainer> 
                        <Button
                            type={"submit"}
                            /* fullWidth */
                            variant={"contained"}
                            color={"primary"}
                        >
                            Fazer Cadastro
                        </Button>
                
                        
            </ScreenContainer>
        </form>
    )

}

export default RegisterPageForm