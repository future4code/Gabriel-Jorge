import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Geral } from "../style/styleGeral"
import axios from "axios"
import { useState } from 'react'

// const [viagen, setViagem] = useState({})

// const [userId, setUserId] = useState("")
// const [userName, setUserName] = useState("")
// const [description, setDescription] = useState("")
// const [userPlanet, setUserPlanet] = useState("")
// const [durationInDays, setDurationInDays] = useState("")
// const [date, setDate] = useState("")




const ListaDeViagens = () => {

    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const irParaPaginaInscricao = () => {
        history.push("/paginaInscricaoViagem")
    }





    //-----------Dados da Api---------------------------------------------------------------------------------------------------------

const autorizationName = "gabriel-jorge-carver"

const alunoName = "gabriel"


//-----------------------API 1 - (Get Trips) - Essa requisição retorna todas as viagens.-----------------------------------------

const getTrips = () => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${alunoName}/trips`
  axios.get(url, 

    ).then((res)=>{
      console.log(res.data.trips)
      console.log(res.data.trips.length)

      const ListaDeViagens = res.data.trips.map((item) => {
        return  <div key={item.id}> 
                    setUserName={item.nome}
                    Descrição:{item.description}
                    Planeta:{item.planet}
                    Duração:{item.durationInDays}
                    Data:{item.date}
                </div>
        
    
    })
        return ListaDeViagens

    }).catch((err) => {
      console.log(err)
      
    })
}

getTrips()

 


    return(    
        <Geral>  
                        
           <div>
            <button onClick={voltar}>Voltar</button>
            <button onClick={irParaPaginaInscricao}>Inscrever-se</button>
            </div>
            <h1> Lista de Viagens</h1>    
        
        </Geral>    
    
    )  
    
    
    
}
    
    export default ListaDeViagens