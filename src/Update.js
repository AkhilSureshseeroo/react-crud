import React,{useState,useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Update = () => {
    let history=useNavigate();
    const [id, setID] = useState(null);
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[checkbox,setCheckBox]=useState(false);

    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setFirstName(localStorage.getItem('First Name'));
      setLastName(localStorage.getItem('Last Name'));
      setCheckBox(localStorage.getItem('Checkbox Value'));
  }, []);
  const updateData=()=>{
    axios.put(`https://64d37e6a67b2662bf3dc534c.mockapi.io/api/v1/fakedata/${id}`, {
      firstName,
      lastName,
      checkbox
  }).then(() => {
      history('/read')
  })
  }


  return (
    <>
    <Form  className='create-form'>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'value={firstName}onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'value={lastName}onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label="I agree terms"checked={checkbox}onChange={(e) => setCheckBox(!checkbox)}/>
        </Form.Field>
        <Button onClick={updateData} type='submit'>Update</Button>
    </Form>

    </>
  )
}
