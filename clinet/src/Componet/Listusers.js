import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getusers } from "../REdux/action"
import Cardusers from "./Cardusers"
const Listusers = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getusers())
  },[])
  const users = useSelector(state=>state.users)
  return (
    <div>
      {
         users.map((el,i,t)=> <Cardusers el={el}/> )
      }
      
      
    </div>
  )
}

export default Listusers
