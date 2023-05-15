import React, { useEffect, useState } from "react";
import "./styles/LiveScore.css"

function LiveScore() {
  const [match, setMatch] = useState({});

  const [showBatting1, setShowBatting1] = useState(true);
  const [showBatting2, setShowBatting2] = useState(false);
  // const [containerClass, setContainerClass] = useState("");


  const toggleBatting1 = () => {
    setShowBatting1(true);
    setShowBatting2(false);
    // setContainerClass("slide-right");

  };

  const toggleBatting2 = () => {
    setShowBatting1(false);
    setShowBatting2(true);
    // setContainerClass("slide-left");

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
      const res = await fetch(url);
      const data = await res.json();
      setMatch(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchScore("http://localhost:5000/livescore")
  }, [match]);

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
  
  
  const getImageSource = (teamName) => {
    console.log("team name", teamName);
    const imageSource = teamImageMapping[teamName];
    console.log(imageSource)
    if (imageSource) {
      return imageSource;
    }
    // If no match found, return a fallback image path
    return require('./resources/team_images/fallbackLuffy.gif');
  }; 

  const team1ImageSrc = getImageSource(match.team1);
  const team2ImageSrc = getImageSource(match.team2);

  return (
    <>
    <div style={{backgroundColor:'rgb(249 249 255)', minHeight:'90.1vh', marginTop:'-1%'}}>
      <div>
        {/* <div>
          <img src={team1ImageSrc} alt={teamName.team1} />
          <img src={team2ImageSrc} alt={teamName.team2} />
        </div> */}
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
                <img src={team1ImageSrc} alt={match.team2} style={{ width: '50%' }} />

                  <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{match.team1}</p>
                </div>
                <div className="row align-items-center ml-3">
                  <div className="col">
                    <p style={{ textAlign: "center", margin: "-35px 0 0 40px", fontWeight:'bold', fontSize:'24px' }}>{match.score1}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
                <div className="d-flex flex-column align-items-center">
                <img src={team2ImageSrc} alt={match.team2} style={{ width: '50%' }} />
                  <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{match.team2}</p>
                </div>
                <div className="row align-items-center ml-3">
                  <div className="col">
                    <p style={{ textAlign: "center", margin: "-35px 0 0 40px", fontWeight:'bold', fontSize:'24px' }}>{match.score2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{height:'5vh'}}></div>
            <div className="row" style={{ 
                backgroundColor:'white',
                margin:'0 20px 0 20px',
              }}>
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <p style={{fontWeight:'bold', fontSize:'20px' }}>{match.status}</p>
        
              </div>
              {/* <div className="col-md-12 d-flex justify-content-center align-items-center">
                <p style={{fontWeight:'bold', fontSize:'20px' }}>{match.crr} {match.rrr}</p>
        
              </div> */}
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
    </div>

    </>
  );
}

export default LiveScore;
