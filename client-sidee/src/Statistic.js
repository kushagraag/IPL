import React, {useEffect, useState} from "react";
import "./styles/Statistics.css"
import MostRunsComponent from "./statistics/mostruns";
import HighestScoresComponent from "./statistics/highestScores";
import HighestAveragesComponent from "./statistics/highestAverages";
import MostFiftysComponent from "./statistics/mostFiftys";
import HighestMostWicketsComponent from "./statistics/highestMostWickets";
import HighestBestBowlingsComponent from "./statistics/highestBestBowlings";
import BestBowlingSrsComponent from "./statistics/bestBowlingSrs";
// import dhonigif from "./resources/team_images/dhoni.gif"

function Statistic() {

  const [stat , setStat] = useState(null);
  
  const [mostruns, setMostruns] = useState([]);
  const [highestScore, setHighestScore] = useState([]);
  const [highestAverage, setHighestAverage] = useState([]);
  const [mostFifty, setMostFifty] = useState([]);
  const [mostWicket, setMostWicket] = useState([]);
  const [bestBowling, setBestBowling] = useState([]);
  const [bestBowlingSr, setBestBowlingSr] = useState([]);

  const fetchStat = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    
      setStat(data);
    
    // console.log(data);
    console.log(stat);
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchStats = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setMostruns(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchHighestScore = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setHighestScore(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchHighestAverage = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setHighestAverage(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchMostFifty = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setMostFifty(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchMostWicket = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setMostWicket(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchBestBowling = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setBestBowling(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchBestBowlingSr = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setBestBowlingSr(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  useEffect(() =>{
    fetchStat("http://localhost:5000/stats");
    fetchStats("http://localhost:5000/stats/mostrun");
    fetchHighestScore("http://localhost:5000/stats/highestscore");
    fetchHighestAverage("http://localhost:5000/stats/highestavg");
    fetchMostFifty("http://localhost:5000/stats/mostfifty");
    fetchMostWicket("http://localhost:5000/stats/mostwicket");
    fetchBestBowling("http://localhost:5000/stats/bestbowling");
    fetchBestBowlingSr("http://localhost:5000/stats/bestbowlingsr");
  }
  ,[])
  
  function MostRuns({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <MostRunsComponent item={item} />
        ) : (
          // <h3>No Most Runs data available</h3>
          <h3>Loading stats</h3>
        )}
      </>
    );
  }
  function HighestScores({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <HighestScoresComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No HighestScores data available</h3>
        )}
      </>
    );
  }
  function HighestAverages({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <HighestAveragesComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No HighestAverages data available</h3>
        )}
      </>
    );
  }
  function MostFiftys({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <MostFiftysComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No MostFiftys data available</h3>
        )}
      </>
    );
  }
  function HighestMostWickets({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <HighestMostWicketsComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No HighestMostWickets data available</h3>
        )}
      </>
    );
  }
  function HighestBestBowlings({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <HighestBestBowlingsComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No HighestBestBowlings data available</h3>
        )}
      </>
    );
  }
  function BestBowlingSrs({ item }) {
    return (
      <>
        {item && item.length > 0 ? (
          <BestBowlingSrsComponent stats={item} />
        ) : (
          <h3>Loading stats</h3>
          // <h3>No BestBowlingSrs data available</h3>
        )}
      </>
    );
  }

    return (
      <>
      <div style={{backgroundColor:'#F8F9FA',  marginTop:'-1%'}}>
        <div className="container" style={{backgroundColor:'', width:'50%', borderRadius:''}}>
          
          <MostRuns item={mostruns} />
          <HighestScores item={highestScore} />
          <HighestAverages item={highestAverage} />
          <MostFiftys item={mostFifty} />
          <HighestMostWickets item={mostWicket} />
          <HighestBestBowlings item={bestBowling} />
          <BestBowlingSrs item={bestBowlingSr} />
        </div>
      </div>
      </>
    );
  }
  
  export default Statistic;