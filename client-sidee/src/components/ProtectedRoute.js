import React, { useEffect, useState } from "react";
import axios from "axios";
import "../resources/global.css";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const validateToken = async () => {
    try {
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
        setLoading(false);
      } else {
        setLoading(false);
        // localStorage.removeItem("token");
        // message.error(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
    //   localStorage.removeItem("token");
    //   message.error(message.error);
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
  return <div>{loading ? <div>loading</div> : <>{children}</>}</div>;
}

export default ProtectedRoute;
