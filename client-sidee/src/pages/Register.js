import React from "react";
import { Form, message } from "antd";
import "../resources/global.css";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { message } from "antd";
// import { Form,FormGroup,Label,Input,Col, CardHeader ,FormFeedback, FormText} from 'reactstrap';

function Register() {

  const finish = async(values) => {
    console.log(values);
    try{
        const response = await axios.post("http://localhost:5000/user/register",values);
        if(response.data.success){
            message.success(response.data.message);
        }
        else{
            message.error(response.data.message);
        }
    }
    catch(error){
        message.error(error.message);
    }
  };
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-300 card p-3">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <hr />
        <Form layout="vertical" onFinish={finish}>
          <Form.Item label="Name" name="name">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" />
          </Form.Item>
          
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/login">Click here to login</Link>
            <button className="primary-btn" type="Submit">
              Register
            </button>

          </div>
        </Form>
      </div>
    </div>
    
  );
}

export default Register;
