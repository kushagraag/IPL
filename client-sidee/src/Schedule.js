import React, {useEffect, useState} from "react";
import './styles/Schedule.css'
function Schedule() {
    const [schedules, setScheduls] = useState([]);

    const fetchTeams = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
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
            {
            schedules.map((item, index) => {
                const {
                    date,
                    time,
                    team1,
                    team2,
                    team1_score,
                    team2_score,
                } = item;
                const team1Image = teamImageMapping[team1];
                const team2Image = teamImageMapping[team2];

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
                                        <div class="row">
                                            <span class="col-1">
                                                <img src={team1Image} alt={team1} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                                            </span>
                                            <span class="col-6">{team1}</span>
                                            <span class="col-4 score" style={{ textAlign: 'right' }}>{team1_score}</span>
                                        </div>
                                        <div class="row">
                                            <span class="col-1">
                                                <img src={team2Image} alt={team2} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                                            </span>
                                            <span class="col-6">{team2}</span>
                                            <span class="col-4 score" style={{ textAlign: 'right' }}>{team2_score}</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })
        } </>

    );
}

export default Schedule;
