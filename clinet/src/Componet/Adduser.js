import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { adduser } from '../REdux/action';

const Adduser = () => {
  const[name, setName] = useState("")
   const[age, setAge] = useState(0)
    const[email, setEmail] = useState("")
    const dispatch =useDispatch()
    const navigate = useNavigate()
  return (
    <div>
     <Form>
      <Form.Group className="mb-3" >
        <Form.Label>name</Form.Label>
        <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter a name " />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>age</Form.Label>
        <Form.Control onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter an age" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter an email " />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Button onClick={(e)=>{e.preventDefault();dispatch(adduser({name,age,email},navigate))}} variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </div>
  )
}

export default Adduser
