import axios from "axios"

const BASE_URL = "https://labeddit.herokuapp.com"




export const upVoteComment = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const token = localStorage.getItem('token')
    const body = {direction: 1}
    const header = {headers: {Authorization: token} } 

    axios.post(url,body,header)

    .then((res) => {        
    })

    .catch((err) =>{
     alert("err")
    })
}   

export const downVoteComment = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const token = localStorage.getItem('token')
    const body = {direction: -1}
    const header = {headers: {Authorization: token} } 

    axios.put(url,body,header)

    .then((res) => {        
    })

    .catch((err) =>{
     alert("err")
    })
}   

export const removeVoteComment = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const token = localStorage.getItem('token')
    const header = {headers: {Authorization: token} } 

    axios.delete(url, header)

    .then((res) => {        
    })

    .catch((err) =>{
     alert("err")
    })
}   

