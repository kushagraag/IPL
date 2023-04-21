import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../helper/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import "../resources/layout.css";
import { useReactToPrint } from "react-to-print";

function Bookings() {
  const [bookings, setBookings] = useState(null);
  const dispatch = useDispatch();
  const [showPrintModel, setShowPrintModel] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const getBookings = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/bookings/get-bookings-by-user-id",
        {}
      );
      dispatch(HideLoading());
      if (response.data.success) {
        setBookings(response.data.data);
        // console.log({ r3: response.data.data });
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <table
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginLeft: "-.2%",
        }}
      >
        <thead>
          <tr>
            <th class="smaller alignLeft">Match Number</th>
            {/* <th className='col-2'></th> */}
            <th className="smaller alignLeft">Date</th>
            <th className="smaller alignLeft">Time</th>
            <th className="smaller alignLeft">Seat Number</th>
            <th className="smaller alignLeft">Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {" "}
            {bookings &&
              bookings.length > 0 &&
              bookings.map((player, index) => (
                <>
                  <tr>
                    <td class="alignLeft highlighted">{player.match.number}</td>
                    <td class="alignLeft highlighted">{player.match.date}</td>
                    <td class="alignLeft highlighted">{player.match.time}</td>
                    <td class="alignLeft highlighted">
                      {player.seats.join(", ")}
                    </td>
                    <td class="alignLeft highlighted">
                      <button
                        className="primary-btn"
                        onClick={() => {
                          // console.log(player);
                          setSelectedBooking(player);
                          setShowPrintModel(true);
                        }}
                      >
                        Print ticket
                      </button>
                    </td>
                  </tr>
                </>
              ))}{" "}
          </>
        </tbody>
      </table>

      {showPrintModel && (
        <div >
          <div className="modal-wrapper"></div>
          <div className="modal-container">
            <div className="p-4" ref={componentRef}>
            <h1>Ticket </h1>
            <hr></hr>
            <div>
              Name : <b>{selectedBooking.user.name}</b>
            </div>
            <div>
              Match Number : <b>{selectedBooking.match.number}</b>
            </div>
            <div>
              Date : <b>{selectedBooking.match.date}</b>
            </div>
            <div>
              Time : <b>{selectedBooking.match.time}</b>
            </div>
            <div>
              Place : <b>{selectedBooking.match.place}</b>
            </div>
            <hr></hr>
            <div>
              Seats : <b>{selectedBooking.seats.join(", ")}</b>
            </div>
            <div>
              Amount :{" "}
              <b>
                {selectedBooking.match.fare * selectedBooking.seats.length}/-
              </b>
            </div>
            
            <hr></hr>
            </div>
            <div style={{alignItems:"center" , justifyContent:"center"}}>
              <div style={{width:"50%" ,  float: "left"}}>
                <button
                  className="primary-btn"
                  onClick={() => {
                    handlePrint();
                  }}
                >
                  {" "}
                  Print{" "}
                </button>
              </div >
              <div style={{width:"50%" ,  float: "right"}}>
                <button
                  className="primary-btn"
                  onClick={() => {
                    setShowPrintModel(false);
                  }}
                >
                  {" "}
                  cancel{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;
