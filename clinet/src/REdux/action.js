import { GETUSER, GETUSERS } from "./actiontype"
import axios from "axios"

export const getusers =()=>async(dispatch)=>{
    try {
      const res = await  axios.get("/API/contact/getusers")
         dispatch(
            {
                type: GETUSERS,
                payload: res.data
            }
         )
    } catch (error) {
        console.log("error")
    }

}

export const adduser =(user,navigate)=>async(dispatch)=>{
    try {
        await axios.post("/API/contact/addusers",user)

        dispatch(getusers())
        navigate("/Listusers")
        
    } catch (error) {
        console.log("error")
    }
}
export const getuser =(id)=>async(dispatch)=>{
    try {

        const res = await axios.get(`/API/contact/getuser/${id}`)
        dispatch({
            type : GETUSER,
            payload :res.data
        })
    } catch (error) {
        console.log("error")
    }

}

export const updateuser =(id,user,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/API/contact/updateuser/${id}`,user)

        dispatch(getusers())
        navigate("/Listusers")

    } catch (error) {
        console.log("error")
    }
}

export const deleteuser =(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/API/contact/deleteuser/${id}`)

        dispatch(getusers())

    } catch (error) {
        console.log("error")
    }
}