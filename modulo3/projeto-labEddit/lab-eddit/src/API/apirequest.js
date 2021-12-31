import axios from "axios"

const BASE_URL = "https://labeddit.herokuapp.com"

export const getFeed = (setPostList) => {
    const url = `${BASE_URL}/posts`
    const token = localStorage.getItem('token')
    const header = {headers: {Authorization: token} } 

    axios.get(url, header)
    .then((res) => {  
        setPostList(res.data)        
    })

    .catch((err) =>{
     alert("err")
    })

}


export const getComments = (id, setPostComments) => {

    const url = `${BASE_URL}/posts/${id}/comments` 
    const token = localStorage.getItem('token')
    const header = {headers: {Authorization: token} } 

    axios.get(url, header)
    .then((res) => {  
        setPostComments(res.data)        
    })

    .catch((err) =>{
     alert("err")
    })

}



