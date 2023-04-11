import React, {useEffect, useState} from "react";
import "./styles/Statistics.css"
import MostRuns from "./statistics/mostruns";
import HighestScores from "./statistics/highestScores";
import HighestAverages from "./statistics/highestAverages";
import HighestStrikeRates from "./statistics/highestStrikeRates";
import MostFiftys from "./statistics/mostFiftys";
import HighestMostWickets from "./statistics/highestMostWickets";
import HighestBestBowlings from "./statistics/highestBestBowlings";
import BestBowlingAvgs from "./statistics/bestBowlingAvgs";
import BestEconomyRates from "./statistics/bestEconomyRates";
import BestBowlingSrs from "./statistics/bestBowlingSrs";


function Statistic() {
  const [stats, setStats] = useState([]);


  const fetchStats = async(url) => {
    try{
      // const res = await fetch(url);
      // const data = await res.json();
      // if(data.length > 0) {
      //   setStats(data);
      // }
      const stats2 = {
        "mostruns": [
          {
            "playerName": "S Dhawan",
            "matches": "3",
            "run": "225",
            "avg": "225.00",
            "fifty": "2",
            "hundreds": "0",
            "team": "(Punjab Kings)"
          },
          {
            "playerName": "DA Warner",
            "matches": "4*",
            "run": "209",
            "avg": "52.25",
            "fifty": "3",
            "hundreds": "0",
            "team": "(Delhi Capitals)"
          },
          {
            "playerName": "RD Gaikwad",
            "matches": "3",
            "run": "189",
            "avg": "94.50",
            "fifty": "2",
            "hundreds": "0",
            "team": "(Chennai Super Kings)"
          },
          {
            "playerName": "F du Plessis",
            "matches": "3",
            "run": "175",
            "avg": "87.50",
            "fifty": "2",
            "hundreds": "0",
            "team": "(Royal Challengers Bangalore)"
          },
          {
            "playerName": "V Kohli",
            "matches": "3",
            "run": "164",
            "avg": "82.00",
            "fifty": "2",
            "hundreds": "0",
            "team": "(Royal Challengers Bangalore)"
          }
        ],
        "highestScores": [
          {
            "playerName": "S Dhawan",
            "run": "99*",
            "sr": "150.00"
          },
          {
            "playerName": "RD Gaikwad",
            "run": "92",
            "sr": "184.00"
          },
          {
            "playerName": "S Dhawan",
            "run": "86*",
            "sr": "153.57"
          },
          {
            "playerName": "NT Tilak Varma",
            "run": "84*",
            "sr": "182.60"
          },
          {
            "playerName": "VR Iyer",
            "run": "83",
            "sr": "207.50"
          },
          {
            "playerName": "V Kohli",
            "run": "82*",
            "sr": "167.34"
          },
          {
            "playerName": "F du Plessis",
            "run": "79*",
            "sr": "171.73"
          },
          {
            "playerName": "JC Buttler",
            "run": "79",
            "sr": "154.90"
          },
          {
            "playerName": "RA Tripathi",
            "run": "74*",
            "sr": "154.16"
          },
          {
            "playerName": "KR Mayers",
            "run": "73",
            "sr": "192.10"
          }
        ],
        "highestAverages": [
          {
            "playerName": "S Dhawan",
            "matches": "3",
            "run": "225",
            "avg": "225.00",
            "team": "(Punjab Kings)"
          },
          {
            "playerName": "NT Tilak Varma",
            "matches": "3*",
            "run": "106",
            "avg": "106.00",
            "team": "(Mumbai Indians)"
          },
          {
            "playerName": "SO Hetmyer",
            "matches": "3",
            "run": "97",
            "avg": "97.00",
            "team": "(Rajasthan Royals)"
          },
          {
            "playerName": "RD Gaikwad",
            "matches": "3",
            "run": "189",
            "avg": "94.50",
            "team": "(Chennai Super Kings)"
          },
          {
            "playerName": "F du Plessis",
            "matches": "3",
            "run": "175",
            "avg": "87.50",
            "team": "(Royal Challengers Bangalore)"
          }
        ],
        "highestStrikeRates": [
          {
            "playerName": "Rashid Khan",
            "matches": "3",
            "run": "10",
            "sr": "333.33",
            "team": "(Gujarat Titans)"
          },
          {
            "playerName": "MS Dhoni",
            "matches": "3",
            "run": "26",
            "sr": "260.00",
            "team": "(Chennai Super Kings)"
          },
          {
            "playerName": "Umran Malik",
            "matches": "3",
            "run": "19",
            "sr": "237.50",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "SN Thakur",
            "matches": "3",
            "run": "76",
            "sr": "230.30",
            "team": "(Kolkata Knight Riders)"
          },
          {
            "playerName": "AM Rahane",
            "matches": "1",
            "run": "61",
            "sr": "225.92",
            "team": "(Chennai Super Kings)"
          }
        ],
        "mostFiftys": [
          {
            "playerName": "DA Warner",
            "matches": "4*",
            "run": "209",
            "fifty": "3",
            "team": "(Delhi Capitals)"
          },
          {
            "playerName": "JC Buttler",
            "matches": "3",
            "run": "152",
            "fifty": "2",
            "team": "(Rajasthan Royals)"
          },
          {
            "playerName": "S Dhawan",
            "matches": "3",
            "run": "225",
            "fifty": "2",
            "team": "(Punjab Kings)"
          },
          {
            "playerName": "F du Plessis",
            "matches": "3",
            "run": "175",
            "fifty": "2",
            "team": "(Royal Challengers Bangalore)"
          },
          {
            "playerName": "RD Gaikwad",
            "matches": "3",
            "run": "189",
            "fifty": "2",
            "team": "(Chennai Super Kings)"
          }
        ],
        "highestMostWickets": [
          {
            "playerName": "MA Wood",
            "matches": "3",
            "wikect": "9",
            "economy": "7.91",
            "team": "(Lucknow Super Giants)"
          },
          {
            "playerName": "YS Chahal",
            "matches": "3",
            "wikect": "8",
            "economy": "7.83",
            "team": "(Rajasthan Royals)"
          },
          {
            "playerName": "Rashid Khan",
            "matches": "3",
            "wikect": "8",
            "economy": "7.83",
            "team": "(Gujarat Titans)"
          },
          {
            "playerName": "Arshdeep Singh",
            "matches": "3",
            "wikect": "6",
            "economy": "8.60",
            "team": "(Punjab Kings)"
          },
          {
            "playerName": "AS Joseph",
            "matches": "3",
            "wikect": "6",
            "economy": "7.41",
            "team": "(Gujarat Titans)"
          }
        ],
        "highestBestBowlings": [
          {
            "playerName": "MA Wood",
            "over": "4.0",
            "wicket": "5",
            "economy": "3.50",
            "team": "Super Giants"
          },
          {
            "playerName": "CV Varun",
            "over": "3.4",
            "wicket": "4",
            "economy": "4.09",
            "team": "KKR"
          },
          {
            "playerName": "M Markande",
            "over": "4.0",
            "wicket": "4",
            "economy": "3.75",
            "team": "Sunrisers"
          },
          {
            "playerName": "YS Chahal",
            "over": "4.0",
            "wicket": "4",
            "economy": "4.25",
            "team": "Royals"
          },
          {
            "playerName": "MM Ali",
            "over": "4.0",
            "wicket": "4",
            "economy": "6.50",
            "team": "Super Kings"
          }
        ],
        "bestBowlingAvgs": [
          {
            "playerName": "M Markande",
            "matches": "1",
            "run": "15",
            "wicket": "4",
            "avg": "3.75",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "MM Ali",
            "matches": "2",
            "run": "26",
            "wicket": "4",
            "avg": "6.50",
            "team": "(Chennai Super Kings)"
          },
          {
            "playerName": "M Jansen",
            "matches": "1",
            "run": "16",
            "wicket": "2",
            "avg": "8.00",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "MA Wood",
            "matches": "3",
            "run": "95",
            "wicket": "9",
            "avg": "10.55",
            "team": "(Lucknow Super Giants)"
          },
          {
            "playerName": "YS Chahal",
            "matches": "3",
            "run": "94",
            "wicket": "8",
            "avg": "11.75",
            "team": "(Rajasthan Royals)"
          }
        ],
        "bestEconomyRates": [
          {
            "playerName": "M Markande",
            "matches": "1",
            "wicket": "4",
            "economy": "3.75",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "Sandeep Sharma",
            "matches": "1",
            "wicket": "1",
            "economy": "5.00",
            "team": "(Rajasthan Royals)"
          },
          {
            "playerName": "M Jansen",
            "matches": "1",
            "wicket": "2",
            "economy": "5.33",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "DJ Willey",
            "matches": "2",
            "wicket": "2",
            "economy": "6.00",
            "team": "(Royal Challengers Bangalore)"
          },
          {
            "playerName": "K Kartikeya",
            "matches": "1",
            "wicket": "1",
            "economy": "6.00",
            "team": "(Mumbai Indians)"
          }
        ],
        "bestBowlingSrs": [
          {
            "playerName": "MM Ali",
            "matches": "2",
            "wicket": "4",
            "sr": "6.0",
            "team": "(Chennai Super Kings)"
          },
          {
            "playerName": "M Markande",
            "matches": "1",
            "wicket": "4",
            "sr": "6.0",
            "team": "(Sunrisers Hyderabad)"
          },
          {
            "playerName": "MA Wood",
            "matches": "3",
            "wicket": "9",
            "sr": "8.0",
            "team": "(Lucknow Super Giants)"
          },
          {
            "playerName": "WD Parnell",
            "matches": "1",
            "wicket": "3",
            "sr": "8.0",
            "team": "(Royal Challengers Bangalore)"
          },
          {
            "playerName": "YS Chahal",
            "matches": "3",
            "wicket": "8",
            "sr": "9.0",
            "team": "(Rajasthan Royals)"
          }
        ]
      }
      setStats(stats2)
    }
    catch(e){
      console.error(e);
    }
  }
  useEffect(() => {
    fetchStats("http://localhost:5000/stats")
  },[])

    return (
      <>
      {/* {
        stats.map((item, index) => (
          item.mostruns.map((mr) => (
            <>
              <p>{mr.matches}</p>
              <p>{mr.run}</p>
              <p>{mr.avg}</p>
              <p>{mr.fifty}</p>
              <p>{mr.hundreds}</p>
            </>
          ))
        )) 
      } */}
      {/* conosle.log({stats}); */}
      {/* <MostRuns data={stats.mostruns}/> */}
      <div style={{backgroundColor:'#F8F9FA',  marginTop:'-2%'}}>
        <div className="container" style={{backgroundColor:'', width:'50%', borderRadius:''}}>
          <MostRuns stats={stats} />
          <HighestScores stats={stats} />
          <HighestAverages stats={stats} />
          <HighestStrikeRates stats={stats} />
          <MostFiftys stats={stats} />
          <HighestMostWickets stats={stats} />
          <HighestBestBowlings stats={stats} />
          <BestBowlingAvgs stats={stats} />
          <BestEconomyRates stats={stats} />
          <BestBowlingSrs stats={stats} />

        </div>
      </div>
      </>
    );
  }
  
  export default Statistic;