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
                <span style={{ fontSize: "20px" }}>{time}</span>
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
