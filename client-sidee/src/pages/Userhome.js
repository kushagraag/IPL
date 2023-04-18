import React, { useEffect, useState } from "react";
import { Col, message, Row } from "antd";
import "../resources/global.css";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { axiosInstance } from "../helper/axiosInstance";
import Match from "../components/Match";
function Userhome() {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState(null);
  const getMatches = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/matches/get-all-matches",
        {}
      );
      dispatch(HideLoading());

      if (response.data.success) {
        setMatches(response.data.data);
        console.log(matches);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return <div>
    <div>

    </div>
    <div >
      
      {
          matches && matches.length > 0 && matches.map(match =>{
            // <Match match = {match}
            return <Match match = {match}/>
            // return <Row lg={12} xs={24} sm={24}>
            //   <Col>
            //   <Match match = {match}/>
            //   </Col>

            // </Row>
              
            
          })
        }

      
        
      
    </div>
  </div>;
}

export default Userhome;
