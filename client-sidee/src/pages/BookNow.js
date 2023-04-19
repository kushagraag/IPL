import { Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import { axiosInstance } from "../helper/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";

function BookNow() {
  const params = useParams();
  const dispatch = useDispatch();
  const [match, setMatch] = useState(null);
  const navigate = useNavigate();
  const[selectedSeat, setSelectedSeat] = useState(null);
  const getMatch = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/matches/get-match-by-id",
        { _id: params.id }
      );
      dispatch(HideLoading());

      if (response.data.success) {
        setMatch(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const bookNow= async() =>{
    try{
        dispatch(ShowLoading());
        const response = await axiosInstance.post("http://localhost:5000/bookings/book-seat" ,{
            match:match._id,
            seats:selectedSeat,
        })
        dispatch(HideLoading());
        if(response.data.success){
            message.success(response.data.message);
            navigate("/booking");
        }
        else{
            message.error(response.data.message)
        }

    }
    catch(error){
        dispatch(HideLoading());
        message.error(error.message);
    }
  }
  useEffect(() => {
    getMatch();
  }, []);
  return (
    match && (
      <div>
        <div style={{ width: "40%", float: "left" }}>
           <h1 style={{marginTop:"20px"}}> Match Number : {match.number}</h1> 
           <hr></hr>
           <p>Date : {match.date}</p>
           <p>Time : {match.time}</p>
           <p>Fare : {match.fare}/-</p>
           <p>Ticket Left : {match.capacity - match.seatBooked.length}</p>
           <hr></hr>
           <p></p>
           <p>Selected Seat : {selectedSeat && selectedSeat.join(", ")}</p>
           <p> Total Price : {selectedSeat && match.fare*selectedSeat.length}/-</p>
           <button style={{marginTop:"50px"}} className="primary-btn" onClick={()=>bookNow()}>Book Now</button>
        </div>
        
        <div style={{ width: "60%", float: "left" }}> <SeatSelection selectedSeat={selectedSeat} setSelectedSeat = {setSelectedSeat} match={match}></SeatSelection></div>
      </div>
    )
  );
}

export default BookNow;
