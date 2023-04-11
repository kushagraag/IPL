import React, {useEffect, useState} from "react";
import './styles/Schedule.css'
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
    const score1 = "123/2"
    const score2 = "122/3"
    const teamWin1 = false
    const teamWin2 = true
    return (
        <> {/* <h1 style={{textAlign:"center" , margin:"15px" }}>Schedule</h1> */}
            {/* <div class="container">
      <div class="heading">Date</div>
      <div class="heading">Match Details</div>
      <div class="heading"> Result</div>
    </div> */}

            {/* <hr size="3" width="100%" color="black" />   */}

            {/* "date": "Tue, 11 Apr",
        "time": "Tues, 11 Apr, 2:00 PM",
        "place": "16th Match (N), Delhi, April 11, 2023, Indian Premier League",
        "team1": "Delhi Capitals",
        "team2": "Mumbai Indians",
        "score1": "scr 1",
        "score2": "scr2",
        "result": "Match yet to begin" */}
            {
            schedules.map((item, index) => {
                const {
                    date,
                    time,
                    place,
                    team1,
                    team2,
                    result
                } = item;
                // shadow adjustment is pending 
                return (
                    // <div style={{width:'100%', backgroundColor:'#fbfbf9'}}>
                    <div class="container" style={{}}>
                        <div class="boxcontainer  bg-white" style={
                          {
                            marginTop:'-10px', 
                            paddingBottom:'30px', 
                            borderRadius:'10px',
                            boxShadow: schedules[index+1]?.date ? '0px 20px 20px -17px rgb(10, 10, 100, .4)': '12px 0px 0px -17px rgb(10, 10, 100, .4)',
                            }} >
                            <div class="row">
                                <span class="col-2">
                                    <div class="date">
                                        <div style={{fontWeight:600, fontSize:18}}>{date} </div>
                                    </div>
                                </span>
                                <span class="col-10">
                                    <div style={{opacity:'50%', marginBottom:5}} class="time">
                                        <span>{time}</span>
                                    </div>
                                    <div style={{fontSize:20}} class="teams">
                                        <div  style={{fontWeight: teamWin1? 600:''}} class="row">
                                            <span class="col-8">{team1} </span>
                                            <span class="col-4 score" style={{textAlign:'right'}}>{score1}</span>
                                        </div>
                                        <div style={{fontWeight: teamWin2? 600: ''}}class="row">
                                            <span class="col-8">{team2} </span>
                                            <span class="col-4 score" style={{textAlign:'right'}}>{score2}</span>
                                        </div>
                                    </div>
                                    <div style={{marginTop:12}} class="result">
                                        <div>{result}</div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    // </div>
                );
            })
        } </>
    );
}

export default Schedule;
