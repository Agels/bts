import axios from 'axios';
import { useEffect,useState } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
const Checklist = () => {
    const token = JSON.parse(localStorage.getItem('token'));
       const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [checklist, setChekclist] = useState([]);
    const [checklistCreate, setDataChecklistCreate] = useState('');

    useEffect(() => {
        axios.get('http://94.74.86.174:8080/api/checklist', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(res => setChekclist(res.data) )
    },[])
    console.log(checklist)
 const handleSubmit = () => {
    axios.post('http://94.74.86.174:8080/api/checklist',{
        name:checklistCreate
    }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })  
 }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>checklist</Form.Label>
          <Form.Control
            type="text"
            placeholder="text"
            onChange={(e) => {
              setDataChecklistCreate({
                ...checklistCreate,
                checklistCreate: e.target.value,
              });
            }}
          />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <p>{token}</p>
    </>
  )
}

export default Checklist;