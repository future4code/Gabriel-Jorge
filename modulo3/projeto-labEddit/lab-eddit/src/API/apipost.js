import axios from "axios"

const BASE_URL = "https://labeddit.herokuapp.com"




export const upVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
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

export const downVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
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

export const removeVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const token = localStorage.getItem('token')
    const header = {headers: {Authorization: token} } 

    axios.delete(url, header)

    .then((res) => {        
    })

    .catch((err) =>{
     alert("err")
    })
}   

