import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   font-family: 'PT Sans', sans-serif;
   font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1{
  color:${({ theme }) => theme.color.heading};
  font-size: 6rem;
  font-weight: 900;
}
h2 {
   color: ${({ theme }) => theme.color.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }
h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
p {
  color: ${({ theme }) => theme.color.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
table{
  margin: 5rem auto;
  border-radius: 2rem;
  border: 1rem hidden #443C68;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px black;
  overflow: hidden;
  max-width: 80rem;
  padding: 40px
}
td{
  font-size: 1.6rem;
  line-height: 1.6;
}
th,td {
  border: 1px solid #443c44;
  min-width: 30rem;
  padding: 1.5rem;
  line-height: 1.7;
}
td{
  font-size: 2rem;
  
}
.tdclass{
  text-align: center;
}
th{
  font-size: 3rem;
  text-align: center;
}

#div1{
  
  width: 20%;
  float: left;
  padding : 30px;
  font-size: 30px;
  padding-left: 100px;
  height:190px;
}
#div2{
  
  width: 50%;
  float: left;
  padding : 30px;
  font-size: 30px;
  padding-left: 170px;
  height:190px;
  
}

#div3{
  
  width: 30%;
  float: right;
  padding : 30px;
  font-size: 30px;
  padding-left: 100px;
  height:190px;
}

.liveScore{
  width: 50%;
  height: auto;
  margin: 0 auto;
  border: 1px outset black;
  box-shadow:  5px 5px 5px grey;
}
.scoreboard{
  border: 15px thin black;
  box-shadow:  5px 5px 5px grey;
}
.teamname1{
  width: 50%;
  float:left;
  padding-left: 80px;
  font-size: 30px;  
}
.mainLogo{
  width:50%;
  float:left;
}
.mainScore{
  width:50%;
  float:right;
  line-height:130px;
  // text-align: center;
  vertical-align: 40px;
  overflow-wrap: break-word;
}
.teamname1 img{
  width:auto;
}
.teamname1 .teamName-text{
  width:50%;
  padding-left:10px ;
}

.teamname2{
  display: inline-block;
  width: 50%;
  padding-left: 100px; 
  font-size: 30px;
}
.mainScore2{
  width:50%;
  float:left;
  line-height:130px;
  // text-align: center;
  vertical-align: 40px;
  overflow-wrap: break-word;
}
.mainLogo2{
  width:50%;
  float:right;
}
img{
  height:80px;
  width:80px;
}
.teamname2 img{
  width:auto;
  padding-left:20px;
}

.teamname2 .teamName-text1{
  width:100%;
  padding-left:20px;
}

.status{
  text-align:center;
  font-size: 20px;
}

.btn1{
  width:50%;
  float:left;
  font-size: 25px;
  background-color:white;
}
.btn2{
  width:50%;
  float:right;
  font-size: 25px;
  background-color:white;
  
}

  
`;
// Footer

// overflow-x: hidden;  -----html
