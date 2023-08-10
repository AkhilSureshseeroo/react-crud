import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
export const Create = () => {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[checkbox,setCheckBox]=useState(false);
    const postData = () => {
        axios.post('https://64d37e6a67b2662bf3dc534c.mockapi.io/api/v1/fakedata',{
            firstName,
            lastName,
            checkbox
        })
}
  return (
    
    <>
    <Form  className='create-form'>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label="I agree terms"  onChange={(e) => setCheckBox(!checkbox)}/>
        </Form.Field>
        <Button onClick={postData} type='submit'>SUBMIT</Button>
    </Form>
    </>
  )
}
