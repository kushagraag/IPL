import React from "react";
import { Form,message } from "antd";
import axios from "axios";
import "../resources/global.css";
import { Link, useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const finish = async(values) => {
        console.log(values)
        try{
            const response = await axios.post("http://localhost:5000/user/login",values);
            if(response.data.success){
                message.success(response.data.message);
                localStorage.setItem("token",response.data.data);
                navigate("/userhome");
            }
            else{
                message.error(response.data.message);
            }
        }
        catch(error){
            message.error(error.message);
        }
      };
    return(
        <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-300 card p-3">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <hr />
        <Form layout="vertical" onFinish={finish}>
          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" />
          </Form.Item>
          
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/register">Click here to register</Link>
            <button className="primary-btn" type="Submit">
              Login
            </button>

          </div>
        </Form>
      </div>
    </div>
    )
}

export default Login;