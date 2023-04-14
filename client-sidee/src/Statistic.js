import React, {useEffect, useState} from "react";
import axios from "axios";
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

  const [stat , setStat] = useState(null);
  
  const [mostruns, setMostruns] = useState([]);
  const [highestScore, setHighestScore] = useState([]);
  const [highestAverage, setHighestAverage] = useState([]);
  const [highestSR, setHighestSR] = useState([]);
  const [mostFifty, setMostFifty] = useState([]);
  const [mostWicket, setMostWicket] = useState([]);
  const [bestBowling, setBestBowling] = useState([]);
  const [bestBowlingAvg, setBestBowlingAvg] = useState([]);
  const [bestBowlingEconomy, setBestBowlingEconomy] = useState([]);
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
  const fetchHighestSR = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setHighestSR(data);
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
  const fetchBestBowlingAvg = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setBestBowlingAvg(data);
    }
    }
    catch(e){
      console.error(e);
    }
  }
  const fetchBestBowlingEconomy = async(url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();   
    if (data.length > 0) {
      setBestBowlingEconomy(data);
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
    fetchHighestAverage("http://localhost:5000/stats/highestavg")
    fetchHighestSR("http://localhost:5000/stats/highestsr");
    fetchMostFifty("http://localhost:5000/stats/mostfifty");
    fetchMostWicket("http://localhost:5000/stats/mostwicket");
    fetchBestBowling("http://localhost:5000/stats/bestbowling");
    fetchBestBowlingAvg("http://localhost:5000/stats/bestbowlingavg");
    fetchBestBowlingEconomy("http://localhost:5000/stats/bestbowlingeconomy");
    fetchBestBowlingSr("http://localhost:5000/stats/bestbowlingsr");
  }
  ,[])
  
  

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
      {/* {stats} */}
      {/* {<MostRuns item = {mostruns}/>} */}
      {/* {
      loading === "true" ? <MostRuns data={data.mostruns}/> : <h1>hello</h1>} */}
      {/* <MostRuns data={stats.mostruns}/> */}
      <div style={{backgroundColor:'#F8F9FA',  marginTop:'-2%'}}>
        <div className="container" style={{backgroundColor:'', width:'50%', borderRadius:''}}>
        {/* {
            stat &&  <MostRuns item={stat.mostruns} />
            
          } */}
          <MostRuns item={mostruns} />
          <HighestScores stats={highestScore} />
          <HighestAverages stats={highestAverage} />
          <HighestStrikeRates stats={highestSR} />
          <MostFiftys stats={mostFifty} />
          <HighestMostWickets stats={mostWicket} />
          <HighestBestBowlings stats={bestBowling} />
          <BestBowlingAvgs stats={bestBowlingAvg} />
          <BestEconomyRates stats={bestBowlingEconomy} />
          <BestBowlingSrs stats={bestBowlingSr} />
          
          {
            !stat && <h1>loading</h1>
          }

        </div>
      </div>
      </>
    );
  }
  
  export default Statistic;