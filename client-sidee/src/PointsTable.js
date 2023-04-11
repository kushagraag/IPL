import React, { useEffect, useState } from "react";
import "./"
import "./styles/pointstable.css"
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
      {/* <h1 style={{textAlign:"center" , margin:"15px" }}>POINTS TABLE</h1> */}
      <div class="container" style={{marginTop:'60px', width: '55%'}}>
      <table style={{fontSize:20, borderBlock:100}}>
          {/* <hr></hr> */}
        <thead>
          <tr>
          <th class="col-4">Team</th>
          <th class="col-6"></th>
          <th class=" alignCenter">M</th>
          <th class=" alignCenter">W</th>
          <th class=" alignCenter">L</th>
          <th class=" alignCenter">N/R</th>
          <th class=" alignCenter">P</th>
          <th class=" alignCenter">NRR</th>
          </tr>
          
        </thead>
        <tbody>
          {
            teams.map((curTeam) =>{
              const { Team , match , win , lost , tie , point, net_run_rate} = curTeam;
              return(
                <tr  className="">
                  <td class="col-4">{Team}</td>
                  <td class="col-6"></td>
                  <td class=" alignRight">{match}</td>
                  <td class=" alignRight">{win}</td>
                  <td class=" alignRight">{lost}</td>
                  <td class=" alignRight">{tie}</td>
                  <td class=" alignRight">{point}</td>
                  <td class=" alignRight">{net_run_rate}</td>
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