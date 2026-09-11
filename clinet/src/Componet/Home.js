import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getusers } from "../REdux/action"
import Cardusers from "./Cardusers"

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getusers())
  },[])
  const users = useSelector(state=>state.users)
  return (
    <div>
        <h1>Home</h1>
      {
         users.map((el,i,t)=> <Cardusers el={el} showActions={false}/> )
      }
    </div>
  )
}

export default Home
