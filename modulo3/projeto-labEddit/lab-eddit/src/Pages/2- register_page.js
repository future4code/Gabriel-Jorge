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




const RegisterPage = () => {
    const [form, onChange, clear] = useForm({name:"", email: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <ScreenContainer>
                {<h1>Register Page</h1>}
                <ImputsContainer>
                    
                    <TextField
                            name={"name"}
                            value={form.name}
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

export default RegisterPage