import React, { useEffect, useState } from "react";
import "./styles/pointstable.css";

function PointsTable() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setTeams(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const BASE_URL = "http://localhost:5000";
  useEffect(() => {
    fetchTeams(`${BASE_URL}/pointstable`);
  }, []);

  const teamImageMapping = {
    'Chennai Super Kings': require('./resources/team_images/CSK.jpg'),
    'Delhi Capitals': require('./resources/team_images/DC.png'),
    'Gujarat Titans': require('./resources/team_images/GT.png'),
    'Kolkata Knight Riders': require('./resources/team_images/KKR.png'),
    'Lucknow Super Giants': require('./resources/team_images/LSG.png'),
    'Mumbai Indians': require('./resources/team_images/MI.png'),
    'Punjab Kings': require('./resources/team_images/PBKS.png'),
    'Royal Challengers Bangalore': require('./resources/team_images/RCB.jpg'),
    'Rajasthan Royals': require('./resources/team_images/RR.png'),
    'Sunrisers Hyderabad': require('./resources/team_images/SRH.png'),
  };

  return (
    <>
      <div className="container" style={{ marginTop: "60px", width: "55%" }}>
        <table style={{ fontSize: 20, borderBlock: 100 }}>
          <thead>
            <tr>
              <th className="col-4">Team</th>
              <th className="col-6"></th>
              <th className="alignCenter">M</th>
              <th className="alignCenter">W</th>
              <th className="alignCenter">L</th>
              <th className="alignCenter">N/R</th>
              <th className="alignCenter">P</th>
              <th className="alignCenter">NRR</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((curTeam) => {
              const { Team, match, win, lost, tie, point, net_run_rate } = curTeam;
              const teamName = Team.replace(/^\d+/, ''); // Removes numerical part from team name
              const teamImage = teamImageMapping[teamName];

              return (
                <tr className="" key={Team}>
                  <td className="col-6">
                    <img src={teamImage} alt={teamName} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                    {teamName}
                  </td>
                  <td className="col-5"></td>
                  <td className="alignRight">{match}</td>
                  <td className="alignRight">{win}</td>
                  <td className="alignRight">{lost}</td>
                  <td className="alignRight">{tie}</td>
                  <td className="alignRight">{point}</td>
                  <td className="alignRight">{net_run_rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PointsTable;
