import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getuser, updateuser } from '../REdux/action';


const Updateuser = () => {
  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
   
    dispatch(getuser(id))


  },[])
  const user =useSelector(state=>state.user)

  
  const[name, setName] = useState(user.name)
  const[age, setAge] = useState(user.age)
  const[email, setEmail] = useState(user.email)
  useEffect(()=>{
     setName(user.name)
     setAge(user.age)
     setEmail(user.email)
  },[user])
  
  return (
    <div>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>name</Form.Label>
        <Form.Control value={name}  onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter a name " />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>age</Form.Label>
        <Form.Control value={age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter an age" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>email</Form.Label>
        <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter an email " />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Button onClick={(e)=>{e.preventDefault();dispatch(updateuser(id,{name,age,email},navigate))}} variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
      
  )
}

export default Updateuser
