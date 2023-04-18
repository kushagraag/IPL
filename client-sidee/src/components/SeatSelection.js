import { Col, Row } from "antd";
import React, { useState } from "react";
import "../resources/match.css";

const SeatSelection = ({ selectedSeat, setSelectedSeat, match }) => {
  const capacity = match.capacity;
  console.log(`r1 : ${capacity}`);
  var arr = new Array(capacity);
  for (let i = 0; i < capacity; i++) {
    arr.push(i);
  }
  console.log(selectedSeat);

  const selectOrUnselectSeat = (seatnumber) => {
    if (selectedSeat === null) {
      setSelectedSeat([seatnumber]);
      console.log(selectedSeat);
    } else if (selectedSeat.includes(seatnumber)) {
      setSelectedSeat(selectedSeat.filter((seat) => seat !== seatnumber));
    } else {
      setSelectedSeat([...selectedSeat, seatnumber]);
    }
  };

  //   var intArr = Array.from(Array(capacity).keys());

  // Print the result array
  //   console.log(`r2 : ${typeof arr}`);
  //   console.log(`r3 : ${arr.length}`);

  return (
    <div className="match-container">
      <Row gutter={[10, 10]}>
        {capacity &&
          arr.map((seat, index) => {
            let seatClass = "";
            if (selectedSeat === null) {
              seatClass = "";
            } else if (selectedSeat.includes(index)) {
              seatClass = "selected-seat";
            }
            if(match.seatBooked && match.seatBooked.includes(index)){
                seatClass = "booked-seat"
            }
            return (
              <Col span={1}>
                <div
                  className={`seat ${seatClass}`}
                  onClick={() => selectOrUnselectSeat(index)}
                >
                  {index}
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default SeatSelection;
