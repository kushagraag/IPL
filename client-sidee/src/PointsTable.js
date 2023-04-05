import React, { useEffect, useState } from "react";
import "./"
function PointsTable() {
  const [teams , setTeams] = useState([])
  
  
  const fetchTeams = async(url) =>{
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setTeams(data);
      }

    }
    catch(e){
      console.error(e);
    }

  }
  useEffect(()=>{
    fetchTeams("http://localhost:5000/pointstable")
  },[])
  
    return (
      <>
      <h1 style={{textAlign:"center" , margin:"15px" }}>POINTS TABLE</h1>
      <div className="pointstable">
      <table>
        <thead>
          <tr style={{backgroundColor:"#F0F8FF"}}>
          <th>TEAM</th>
          <th>MATCHES</th>
          <th>WINS</th>
          <th>LOST</th>
          <th>N/R</th>
          <th>POINTS</th>
          <th>NRR</th>

          </tr>
          
        </thead>
        <tbody>
          {
            teams.map((curTeam) =>{
              const { Team , match , win , lost , tie , point, net_run_rate} = curTeam;
              return(
                <tr>
                  <td >{Team}</td>
                  <td className="tdclass">{match}</td>
                  <td className="tdclass">{win}</td>
                  <td className="tdclass">{lost}</td>
                  <td className="tdclass">{tie}</td>
                  <td className="tdclass">{point}</td>
                  <td className="tdclass">{net_run_rate}</td>
                </tr>
              );  
            })
          }
        </tbody>
      </table>


      </div>
      
      </>
    );
  }
  
  export default PointsTable;