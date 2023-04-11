import React, { useEffect, useState } from "react";
import "./styles/LiveScore.css"
function LiveScore() {
  const [match, setMatch] = useState([]);

  const [showBatting1, setShowBatting1] = useState(true);
  const [showBatting2, setShowBatting2] = useState(false);
  const [containerClass, setContainerClass] = useState("");


  const toggleBatting1 = () => {
    setShowBatting1(true);
    setShowBatting2(false);
    setContainerClass("slide-right");

  };

  const toggleBatting2 = () => {
    setShowBatting1(false);
    setShowBatting2(true);
    setContainerClass("slide-left");

  };

  const buttonStyle1 = {
    fontSize: 25,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: showBatting1 ? "2px solid blue" : "none",
    opacity: showBatting1 ? "100%" : "30%",
  };

  const buttonStyle2 = {
    fontSize: 25,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: showBatting2 ? "2px solid blue" : "none",
    opacity: showBatting2 ? "100%" : "30%",
  };

  const fetchScore = async (url) => {
    try {
      // const res = await fetch(url);
      // const data = await res.json();
      // if(data.length > 0){
      //   setTeams(data);
      // }
      const data = {
        team1: "Punjab Kings",
        img1 : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png",
        score1: "197/4",
        team2: "Rajasthan Royals",
        img2 : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png",
        score2: "192/7",
        crr: "",
        status: "Punjab Kings won by 5 runs",
        batting1: [
            {
                "playerName": "Prabhsimran Singh ",
                "wicketTaker": "c Buttler b Holder",
                "run": "60",
                "ball": "34",
                "fours": "7",
                "sixs": "3",
                "sr": "176.47"
            },
            {
                "playerName": "Shikhar Dhawan (c)",
                "wicketTaker": "not out ",
                "run": "86",
                "ball": "56",
                "fours": "9",
                "sixs": "3",
                "sr": "153.57"
            },
            {
                "playerName": "Jitesh Sharma †",
                "wicketTaker": "c Parag b Chahal",
                "run": "27",
                "ball": "16",
                "fours": "2",
                "sixs": "1",
                "sr": "168.75"
            },
            {
                "playerName": "Sikandar Raza ",
                "wicketTaker": " b Ashwin",
                "run": "1",
                "ball": "2",
                "fours": "0",
                "sixs": "0",
                "sr": "50.00"
            },
            {
                "playerName": "M Shahrukh Khan ",
                "wicketTaker": "c Buttler b Holder",
                "run": "11",
                "ball": "10",
                "fours": "1",
                "sixs": "0",
                "sr": "110.00"
            },
            {
                "playerName": "Sam Curran ",
                "wicketTaker": "not out ",
                "run": "1",
                "ball": "2",
                "fours": "0",
                "sixs": "0",
                "sr": "50.00"
            }
        ],
        "batting2": [
            {
                "playerName": "Yashasvi Jaiswal ",
                "wicketTaker": "c sub (MW Short) b Arshdeep Singh",
                "run": "11",
                "ball": "8",
                "fours": "1",
                "sixs": "1",
                "sr": "137.50"
            },
            {
                "playerName": "Ravichandran Ashwin ",
                "wicketTaker": "c S Dhawan b Arshdeep Singh",
                "run": "0",
                "ball": "4",
                "fours": "0",
                "sixs": "0",
                "sr": "0.00"
            },
            {
                "playerName": "Jos Buttler ",
                "wicketTaker": "c & b Ellis",
                "run": "19",
                "ball": "11",
                "fours": "1",
                "sixs": "1",
                "sr": "172.72"
            },
            {
                "playerName": "Sanju Samson (c)†",
                "wicketTaker": "c sub (MW Short) b Ellis",
                "run": "42",
                "ball": "25",
                "fours": "5",
                "sixs": "1",
                "sr": "168.00"
            },
            {
                "playerName": "Devdutt Padikkal ",
                "wicketTaker": " b Ellis",
                "run": "21",
                "ball": "26",
                "fours": "1",
                "sixs": "0",
                "sr": "80.76"
            },
            {
                "playerName": "Riyan Parag ",
                "wicketTaker": "c Shahrukh Khan b Ellis",
                "run": "20",
                "ball": "12",
                "fours": "1",
                "sixs": "2",
                "sr": "166.66"
            },
            {
                "playerName": "Shimron Hetmyer ",
                "wicketTaker": "run out (Shahrukh Khan/Curran)",
                "run": "36",
                "ball": "18",
                "fours": "1",
                "sixs": "3",
                "sr": "200.00"
            },
            {
                "playerName": "Dhruv Jurel ",
                "wicketTaker": "not out ",
                "run": "32",
                "ball": "15",
                "fours": "3",
                "sixs": "2",
                "sr": "213.33"
            },
            {
                "playerName": "Jason Holder ",
                "wicketTaker": "not out ",
                "run": "1",
                "ball": "1",
                "fours": "0",
                "sixs": "0",
                "sr": "100.00"
            }
        ],
        "bowler1": [
            {
                "playerName": "Trent Boult",
                "over": "4",
                "run": "38",
                "wicket": "0",
                "economy": "9.50"
            },
            {
                "playerName": "KM Asif",
                "over": "4",
                "run": "54",
                "wicket": "0",
                "economy": "13.50"
            },
            {
                "playerName": "Ravichandran Ashwin",
                "over": "4",
                "run": "25",
                "wicket": "1",
                "economy": "6.25"
            },
            {
                "playerName": "Jason Holder",
                "over": "4",
                "run": "29",
                "wicket": "2",
                "economy": "7.25"
            },
            {
                "playerName": "Yuzvendra Chahal",
                "over": "4",
                "run": "50",
                "wicket": "1",
                "economy": "12.50"
            }
        ],
        "bowler2": [
            {
                "playerName": "Sam Curran",
                "over": "4",
                "run": "44",
                "wicket": "0",
                "economy": "11.00"
            },
            {
                "playerName": "Arshdeep Singh",
                "over": "4",
                "run": "47",
                "wicket": "2",
                "economy": "11.75"
            },
            {
                "playerName": "Harpreet Brar",
                "over": "2",
                "run": "15",
                "wicket": "0",
                "economy": "7.50"
            },
            {
                "playerName": "Nathan Ellis",
                "over": "4",
                "run": "30",
                "wicket": "4",
                "economy": "7.50"
            },
            {
                "playerName": "Rahul Chahar",
                "over": "4",
                "run": "31",
                "wicket": "0",
                "economy": "7.75"
            },
            {
                "playerName": "Sikandar Raza",
                "over": "2",
                "run": "24",
                "wicket": "0",
                "economy": "12.00"
            }
        ]
    }
      setMatch(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchScore("http://localhost:5000/pointstable");
  }, []);

  return (
    <>
    <div style={{backgroundColor:'#F8F9FA', marginTop:'-2%'}}>

      <div className="container" style={{backgroundColor:'', width:'40%'}}>
        <div style={{
            backgroundColor:'white',
            paddingBottom:'30px',
            paddingTop:'30px', 
            borderRadius:'10px',
            boxShadow: '0px 20px 20px -17px rgb(10, 10, 100, 1.5)',
          }}>

          <div className="row" style={{ 
            backgroundColor:'white',
            marginBottom:'10px',
            margin:'0 20px 0 20px',
                              
            }}>
            <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
              <div className="d-flex flex-column align-items-center">
                <img src={match.img1} alt={match.team1} style={{ width: '50%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '22px' }}>{match.team1}</p>
              </div>
              <div className="row align-items-center ml-3">
                <div className="col">
                  <p style={{ textAlign: "center", margin: "-35px 0 0 40px", fontWeight:'bold', fontSize:'24px' }}>{match.score1}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
              <div className="d-flex flex-column align-items-center">
                <img src={match.img2} alt={match.team2} style={{ width: '50%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '22px' }}>{match.team2}</p>
              </div>
              <div className="row align-items-center ml-3">
                <div className="col">
                  <p style={{ textAlign: "center", margin: "-35px 0 0 40px", fontWeight:'bold', fontSize:'24px' }}>{match.score2}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row" style={{ 
              backgroundColor:'white',
              margin:'0 20px 0 20px',
            }}>
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <p style={{fontWeight:'bold', fontSize:'20px' }}>{match.status}</p>
            </div>
          </div>
        </div>
      
        {/* height adjust */}
        <div style={{height:'2vh'}}></div>

        {/* buttons for both team details */}
        <div style={{
            backgroundColor:'white',
            paddingBottom:'30px', 
            borderRadius:'10px',
            paddingTop:'15px',
            boxShadow: '0px 20px 20px -17px rgb(10, 10, 100, 1)',
          }}> 
          <div className="row justify-content-between" style={{ 
            backgroundColor:'white',
            marginBottom:'10px',
            margin:'0 20px 0 20px',               
            }}>
            <div className="col-md-6">
              <div className="text-center" style={{fontSize:25}}>
                <button className="w-100" onClick={toggleBatting1} style={buttonStyle1}> {match.team1}</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center" style={{fontSize:25}}> 
                <button className="w-100" onClick={toggleBatting2} style={buttonStyle2}>{match.team2}</button>
              </div>
            </div>
          </div>
          {/* all table stats from down below  */}
          {/* </div> */}
          <div style={{height:'.5vh'}}></div>
          <div className="row justify-content-between" style={{ 
            backgroundColor:'white',
            marginBottom:'10px',
            margin:'0 20px 0 20px',               
            }}>
              <div className={'col-md-12'} style={{marginLeft:'-3.5%'}}>
              {showBatting1 && (
                <div>
                    <div>
                      <table>
                        <thead >
                          <tr >
                            <th class="col-8 smaller">Batting</th>
                            <th class="col-2"></th>
                            <th className="smaller alignCenter">R</th>
                            <th className="smaller alignCenter">B</th>
                            <th className="smaller alignCenter">4s</th>
                            <th className="smaller alignCenter">6s</th>
                            <th className="smaller alignCenter">S/R</th>
                          </tr>
                        </thead>
                      
                        <tbody>
                          {match.batting1 && match.batting1.length > 0 ? (
                            <>
                              {match.batting1.map((player, index) => (
                                <>
                                  <tr>
                                    <td className="col-8">
                                      <span className="highlighted">{player.playerName}</span>
                                      <br />
                                      {player.wicketTaker}  
                                    </td>
                                    <td className="col-2"></td>
                                    <td className="highlighted alignRight">{player.run}</td>
                                    <td className="highlighted alignRight">{player.ball}</td>
                                    <td className="highlighted alignRight">{player.fours}</td>
                                    <td className="highlighted alignRight">{player.sixs}</td>
                                    <td className="highlighted alignRight">{player.sr}</td>
                                  </tr>
                                </>
                              ))}
                            </>
                              ) : (
                                <p>No batting statistics available.</p>
                                )}
                          </tbody>
                      </table>
                    </div>
                    <div>
                      <table>
                      <thead >
                          <tr >
                            <th class="col-8 smaller">Bowling</th>
                            <th class="col-2"></th>
                            <th className="smaller alignRight">O</th>
                            <th className="smaller alignRight">R</th>
                            <th className="smaller alignRight">W</th>
                            <th className="smaller alignRight">Econ</th>
                          </tr>
                        </thead>
                        <tbody>
                            {match.bowler1 && match.bowler1.length > 0 ? (
                              <>
                                {match.bowler1.map((player, index) => (
                                  <>
                          <tr>
                                    <td className="col-8 highlighted">{player.playerName}</td>
                                    <td className="col-2"></td>
                                    <td class='alignRight highlighted'> {player.over}</td>
                                    <td class='alignRight highlighted'> {player.run}</td>
                                    <td class='alignRight highlighted'> {player.wicket}</td>
                                    <td class='alignRight highlighted'> {player.economy}</td>
                                </tr>
                                  </>
                                ))}
                              </>
                            ) : (
                              <p>No bowling statistics available.</p>
                              )}
                      </tbody>
                      </table>
                    </div>
                </div>
              )}
              {showBatting2 && (
                <div>
                    <div>
                      <table>
                        <thead >
                          <tr >
                            <th class="col-8 smaller">Batting</th>
                            <th class="col-2"></th>
                            <th className="smaller alignCenter">R</th>
                            <th className="smaller alignCenter">B</th>
                            <th className="smaller alignCenter">4s</th>
                            <th className="smaller alignCenter">6s</th>
                            <th className="smaller alignCenter">S/R</th>
                          </tr>
                        </thead>
                      
                        <tbody>
                          {match.batting2 && match.batting2.length > 0 ? (
                            <>
                              {match.batting2.map((player, index) => (
                                <>
                                  <tr>
                                    <td className="col-8">
                                      <span className="highlighted">{player.playerName}</span>
                                      <br />
                                      {player.wicketTaker}  
                                    </td>
                                    <td className="col-2"></td>
                                    <td className="highlighted alignRight">{player.run}</td>
                                    <td className="highlighted alignRight">{player.ball}</td>
                                    <td className="highlighted alignRight">{player.fours}</td>
                                    <td className="highlighted alignRight">{player.sixs}</td>
                                    <td className="highlighted alignRight">{player.sr}</td>
                                  </tr>
                                </>
                              ))}
                            </>
                              ) : (
                                <p>No batting statistics available.</p>
                                )}
                          </tbody>
                      </table>
                    </div>
                    <div>
                      <table>
                      <thead >
                          <tr >
                            <th class="col-8 smaller">Bowling</th>
                            <th class="col-2"></th>
                            <th className="smaller alignRight">O</th>
                            <th className="smaller alignRight">R</th>
                            <th className="smaller alignRight">W</th>
                            <th className="smaller alignRight">Econ</th>
                          </tr>
                        </thead>
                        <tbody>
                            {match.bowler2 && match.bowler2.length > 0 ? (
                              <>
                                {match.bowler2.map((player, index) => (
                                  <>
                          <tr>
                                    <td className="col-8 highlighted">{player.playerName}</td>
                                    <td className="col-2"></td>
                                    <td class='alignRight highlighted'> {player.over}</td>
                                    <td class='alignRight highlighted'> {player.run}</td>
                                    <td class='alignRight highlighted'> {player.wicket}</td>
                                    <td class='alignRight highlighted'> {player.economy}</td>
                                </tr>
                                  </>
                                ))}
                              </>
                            ) : (
                              <p>No bowling statistics available.</p>
                              )}
                      </tbody>
                      </table>
                    </div>
                </div>
              )}
              </div>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}

export default LiveScore;
