import React from 'react'
import { Form, Input } from "antd";
import { Link } from "react-router-dom";


const Login = () => {

      const onfinishHandler = (values) => {
        console.log(values);
      };
  return (
    <div class="form-container">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3>login from</h3>
      
        <Form.Item label="Email" name="email">
          <input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user  Register here
        </Link>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}

export default Login