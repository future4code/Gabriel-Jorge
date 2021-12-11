import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Geral } from "../style/styleGeral"

const DivO = styled.div`
background-color: black;
padding-right:50px ;
padding-left:50px;
padding-top: 30px;
padding-bottom: 30px;
color: white;
border-radius: 300px;
`
const Divo2 = styled.div`
background-color: red;
padding-right:1px ;
padding-left:1px;
padding-top: 1px;
padding-bottom: 1px;
border-radius: 300px;
`
const Divo3 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:5px ;
padding-left:5px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 300px;
`

const Divo4 = styled.div`
background-color: red;
padding-right:1px ;
padding-left:1px;
padding-top: 1px;
padding-bottom: 1px;
border-radius: 300px;
`

const Divo5 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:5px ;
padding-left:5px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 300px;
`

const Divo6 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:5px ;
padding-left:5px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 300px;
`

const Divo7 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:10px ;
padding-left:10px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 300px;
`


const Divo8 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:20px ;
padding-left:20px;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 300px;
`


const Divo9 = styled.div`
background-color: rgba(12, 1, 132, 0.568);
padding-right:30px ;
padding-left:30px;
padding-top: 30px;
padding-bottom: 30px;
border-radius: 300px;   
`


const Divo10 = styled.div`
padding-top: 200px;
padding-bottom: 30px;
`

const Homepage = () => {
    
    const history = useHistory()
    const irParaListaDeViagens = () => {
        history.push("/listaViagens")
    }
    const irParaAreaLogin = () => {
        history.push("/paginaLogin")
    }

    return(
        <Geral>
            <Divo10>
                <Divo9>
                    <Divo8>       
                        <Divo7>
                            <Divo6>
                                <Divo5>
                                    <Divo4>
                                        <Divo3>
                                            <Divo2>
                                                <DivO>           
                                                    <h1>LabeX</h1>
                                                </DivO>
                                            </Divo2>
                                        </Divo3>
                                    </Divo4>
                                </Divo5>
                            </Divo6>
                        </Divo7>
                    </Divo8>
                </Divo9>
            </Divo10>



            <div>
                <button onClick={irParaListaDeViagens}>Viagens</button>
                <button onClick={irParaAreaLogin}>Area Admin</button>
            </div>
        </Geral>
    )




}

export default Homepage