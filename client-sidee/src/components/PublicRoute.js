import React, { useEffect } from "react";
import { Form,message } from "antd";
import axios from "axios";
import "../resources/global.css";
import { Link, useNavigate } from "react-router-dom";
function PublicRoute({children}){
    // const navigate = useNavigate();
    // useEffect(() =>{
    //     if(localStorage.getItem('token')){
    //         navigate("/usehome")
    //     }
    // },[])
    return(
        <div>
        {children}
        </div>
    )
}

export default PublicRoute;