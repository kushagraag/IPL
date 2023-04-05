import React, { useEffect, useState } from "react";
function LiveScore() {
  const [score, setScore] = useState([]);

  const fetchScore = async (url) => {
    try {
      // const res = await fetch(url);
      // const data = await res.json();
      // if(data.length > 0){
      //   setTeams(data);
      // }
      const data = {
        team_name1: "CSK",
        team_score1: "10/1",
        team_score2: "yet to bat",
        team_name2: "RCB",
        team_status: "CSK wi the toss",
        over: "12.5",
        crr: "5",
        batting: "KJH",
        batman1: "xyz",
        batsman2: "hjk",
        bowler1: "qaz",
        bowler2: "ijh",
      };
      setScore(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchScore("http://localhost:5000/pointstable");
  }, []);
  const {
    team_name1,
    team_score1,
    team_score2,
    team_name2,
    team_status,
    over,
    crr,
    batting,
    batman1,
    batsman2,
    bowler1,
    bowler2,
  } = score;
  var team_name = "";
  var imgLink = "";

  function logoFeatch(team_name) {
    switch (team_name) {
      case "RCB":
        imgLink = "./images/Royal_Challengers_Bangalore_2020.svg.png";
        break;
      case "CSK":
        imgLink = "./images/csk.png";
        break;
      case "LSG":
        imgLink = "./images/lsg.png";
        break;
      case "PK":
        imgLink = "./images/punjab kings.png";
        break;
    }
    return imgLink;
  }

  return (
    <>
      <h1>LIVESCORE</h1>
      <div className="liveScore">
        <div className="scoreboard">
          <div className="teamname1">
            <div className="mainLogo">
              <div className="logoimg">
                <img src={logoFeatch(team_name1)}></img>
              </div>
              <div className="teamName-text">{team_name1}</div>
            </div>
            <div className="mainScore">
              {team_score1}{" "}
              <spam style={{ fontSize: 20, color: "grey" }}>({over})</spam>
            </div>
          </div>
          <div className="teamname2">
            <div>
              <div className="mainScore2">{team_score2}</div>
              <div className="mainLogo2">
                <div className="logoimg">
                  <img src={logoFeatch(team_name2)}></img>
                </div>
                <div className="teamName-text1">{team_name2}</div>
              </div>
            </div>
          </div>
          <div className="status">{team_status}</div>
        </div>

        {/* <div>
        <button className="btn1">{team_name1}</button>
        <button className="btn2">{team_name2}</button>
      </div> */}

        {/* <div className="scoreCard"></div>
          <div>{team_name1}</div> */}
      </div>
    </>
  );
}

export default LiveScore;
