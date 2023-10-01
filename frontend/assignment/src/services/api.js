import axios from 'axios'

const url = ''

export const adddata=async(data)=>{
    return await axios.post(`${url}/add`,data)
}

export const enrolled= async(token)=>{
    return await axios.get(`${url}/activate/${token}`)
}