import react from "react"
import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"
import { goToRegisterPage } from '../Components/coordinator'
import { goToFeedPage } from "../Components/coordinator"
import useForm from "../hooks/useForm"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../Constatnts/urls"
import useUnprotectedPage from "../hooks/useUnprotectedPage"


// import { findByLabelText } from "@testing-library/react"


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
width: 80vw;
max-width: 450px
margin-bottom: 20px;
margin-top: 20vh;
`

const SingUpButtonContainer = styled.div`
width: 80vw;
max-width: 450px;
margin-top: 20px ;
`




const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        login(form, clear, history)
    }
    

    const login = (body, clear, history) => {
        axios.post(`${BASE_URL}/users/login`, form)

        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
            alert("deu Bom !!!")
        })

        .catch((err) =>
         alert("Erro no Login !!!"))
        
        



    }

    useUnprotectedPage()
    return (
        <ScreenContainer>
            <h1>Login Page</h1>
            <ImputsContainer>
                <form onSubmit={onSubmitForm}>
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
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"dense"}
                    >
                        Fazer Login !!!
                    </Button>
                </form>
            </ImputsContainer>
            <SingUpButtonContainer>
                <Button
                    onClick={() => goToRegisterPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}

                >Não possui Conta ???? Cadastre-se
                </Button>
            </SingUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage