import React from "react";
import { Form,message } from "antd";
import axios from "axios";
import styled from "styled-components";
import "../resources/global.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";


const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.btn};
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: -4%;

  &:hover {
    background-color: ${({ theme }) => theme.color.btn}; /* Set the same background color to turn off the hover effect */
    color: white; /* Set the same text color to turn off the hover effect */
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.btn};
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  // cursor: pointer;

`;

function Login(){
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const finish = async(values) => {
        console.log(values)
        try{
          dispatch(ShowLoading());
            const response = await axios.post("http://localhost:5000/user/login",values);
            dispatch(HideLoading());
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
          dispatch(HideLoading());
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
          <StyledLink to="/register">Register</StyledLink>
          <StyledButton type="submit" className="primary-btn">
          Login
          </StyledButton>

          </div>
        </Form>
      </div>
    </div>
    )
}

export default Login;