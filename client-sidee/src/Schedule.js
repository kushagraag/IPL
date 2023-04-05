import React, { useEffect, useState } from "react";
function Schedule() {
  const [schedules, setScheduls] = useState([]);

  const fetchTeams = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.length > 0) {
        setScheduls(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchTeams("http://localhost:5000/schedule");
  }, []);
  return (
    <>
      {/* <h1 style={{textAlign:"center" , margin:"15px" }}>Schedule</h1> */}

      <div
        id="div1"
        style={{ paddingLeft: "125px", fontSize: "35px", fontWeight: "bold" }}
      >
        Date
      </div>
      <div
        id="div2"
        style={{ paddingLeft: "285px", fontSize: "35px", fontWeight: "bold" }}
      >
        Match Details
      </div>
      <div
        id="div3"
        style={{ paddingLeft: "180px", fontSize: "35px", fontWeight: "bold" }}
      >
        Result
      </div>

      {/* <hr size="3" width="100%" color="black" />   */}

      {/* "date": "Tue, 11 Apr",
        "time": "Tues, 11 Apr, 2:00 PM",
        "place": "16th Match (N), Delhi, April 11, 2023, Indian Premier League",
        "team1": "Delhi Capitals",
        "team2": "Mumbai Indians",
        "result": "Match yet to begin" */}

      {schedules.map((item) => {
        const { date, time, place, team1, team2, result } = item;
        return (
          <div>
            <div id="div1">
              <div>{date} </div>
            </div>
            <div id="div2">
              <div>
                <span style={{ fontWeight: "bold" }}>
                  {team1} v {team2}
                </span>
              </div>
              <div>
                <span style={{ fontSize: "20px" }}>{place}</span>
              </div>
            </div>
            <div id="div3">
              <div>{result}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Schedule;
