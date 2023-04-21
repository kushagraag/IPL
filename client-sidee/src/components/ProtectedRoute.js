import React, { useEffect, useState } from "react";
import axios from "axios";
import "../resources/global.css";
import {  useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import DefaultLayout from "./DefaultLayout";

function ProtectedRoute({ children }) {
  // const [loading, setLoading] = useState(true);
  // const {loading} = useSelector((state) => state.alerts);
  const {user} = useSelector(state => state.users)
  
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:5000/user/get-user-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        // setLoading(false);
        dispatch(HideLoading());
        dispatch(SetUser(response.data.data));
      } else {
        // setLoading(false);
        dispatch(HideLoading());
        // localStorage.removeItem("token");
        // message.error(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      // setLoading(false);
      dispatch(HideLoading());
      // localStorage.removeItem("token");
      // message.error(message.error);
      navigate("/login");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);
  return <div>{user && <DefaultLayout>{children}</DefaultLayout>}</div>;
}

export default ProtectedRoute;
