import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteuser } from '../REdux/action';
const Cardusers = ({el, showActions = true}) => {

  const dispatch = useDispatch()
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {el.age}
        </Card.Subtitle>
        <Card.Text>
        {el.email}
        </Card.Text>
        {showActions &&
        <>
         <Link to={`/updateuser/${el._id}`}><Button>update</Button></Link>
         <Button onClick={()=> dispatch(deleteuser(el._id))}>Delete</Button>
        </>
        }
      </Card.Body>
    </Card>
 </div>
  )
}

export default Cardusers
