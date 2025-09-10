import React from 'react'
import {Form,Input} from 'antd'
import { Link} from 'react-router-dom'
import "../styles/RegisterStyles.css"

const Register = () => {


    // form handler
    const onfinishHandler = (values) => {
        console.log(values);
    }
  return (
    <>
      <div class="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
        <h3>Register from</h3>
          <Form.Item label="Name" name="name">
            <input type="text" required />
          </Form.Item>

            <Form.Item label="Email" name="email">  
            <input type="email" required />
            </Form.Item>

            <Form.Item label="Password" name="password">
            <input type="password" required />
            </Form.Item>
            <Link to="/login" className='m-2'>Already user login here</Link>

            <button className='btn btn-primary' type='submit'>Register</button>
          
        </Form>
      </div>
    </>
  );
}

export default Register