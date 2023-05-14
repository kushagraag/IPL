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
  const [filters = {}, setFilters] = useState({});
  const getMatches = async () => {
    const tempFilter = {};
    Object.keys(filters).forEach((key) => {
      if(filters[key]) {
        tempFilter[key] = filters[key];
      }
    });
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/matches/get-all-matches",
        filters
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

  return (
    <div>
      <div className="my-3 card-sm p-2">
        {/* <Row gutter={10}>
          <Col lg={6} sm={24}>
            <input
              type="text"
              placeholder="Match number"
              value={filters.number}
              onChange={(e) =>
                setFilters({...filters, number: e.target.value })
              }
            />
          </Col>

          <Col lg={6} sm={24}>
            <input
              type="date"
              placeholder="Match Date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            />
          </Col>
          <Col lg={6} sm={24}>
            <button className="primary-btn" onClick={() => getMatches()}>
              {" "}
              Filter
            </button>
          </Col>
        </Row> */}
      </div>
      <div>
        {matches &&
          matches.length > 0 &&
          matches
            .filter((match) => match.seatsAvailable === "Yet to start")
            .map((match) => {
              // <Match match = {match}
              return <Match match={match} />;
              // return <Row lg={12} xs={24} sm={24}>
              //   <Col>
              //   <Match match = {match}/>
              //   </Col>

              // </Row>
            })}
      </div>
    </div>
  );
}

export default Userhome;
