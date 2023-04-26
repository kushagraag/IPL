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
        height: 1000,
        width: 2000,
        backgroundColor: "rgba(0, 0, 0, .90)",
        backgroundColor: "transparent",
      }}
    >
      <div className="container grid">
        <div className="section-hero-data">
          <h1 className="hero-heading">Welcome to IPL</h1>
          <p className="hero-para">
            Here you can see some of the best IPL memories.
          </p>
          <Button className="btn">
            <NavLink to="/schedule">Click Here</NavLink>
          </Button>
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
    margin-top: 15px;
    position: absolute;
    top: 50%;
    left: 54%;
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
  }
  `;

export default Home;

// margin-top: 1.5rem;
//     margin-bottom: 3.4rem;
//     max-width: 60rem;
