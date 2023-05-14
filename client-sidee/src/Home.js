import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

function Home() {
  return (
    <Wrapper
      style={{
        backgroundImage: "url(./images/111111.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .90)",
        backgroundColor: "transparent",
        position: "fixed",
        left: "0",
        paddingTop: "60px"
      
        
      }}
    >
      <div className="container grid">
        <div className="section-hero-data">
          <h1 className="hero-heading">Welcome to IPL 2023</h1>
          <div style={{display: "flex",justifyContent:"center",alignItems:"center",height:"100ev",textAlign:"center"}}>
          <p className="hero-para">
            Book your ticket now.
          </p>
          <Button className="btn">
            <NavLink to="/login">Click Here</NavLink>
          </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
const  = styled.section

padding: 9rem 0;
  .section-hero-data {
    text-align:center;
    color: white;
    
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
    text-align:center;
    margin-top: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

  }
  
  .hero-heading {
    color: white;
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    color: white;
    text-align:center;
    font-size: 2rem;
  }
  `;

export default Home;

// margin-top: 1.5rem;
//     margin-bottom: 3.4rem;
//     max-width: 60rem;
