import react from "react"
import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"
import { findByLabelText } from "@testing-library/react"
import { goToRegisterPage } from '../Components/coordinator'
import useForm from "../hooks/useForm"
import { useHistory } from "react-router-dom"

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
    }
    
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