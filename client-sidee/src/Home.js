import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button} from "./styles/Button";

function Home() {
    return (
        <Wrapper style={
            {
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
            }
        }>
            <div className="container grid">
                <div className="section-hero-data">
                    <p className="hero-heading">Welcome to IPL 2023</p>
                    <p className="hero-para">
                        Book your ticket now.
                    </p>
                    <Button className="btn">
                        <NavLink to="/login">Click Here</NavLink>
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section `
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
    text-align: center;
    margin-top: 5rem;
    position: relative;
    max-width: 30rem;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #666ff3;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #848bf5;
    }
  }
  
  .hero-heading {
    color: white;
    margin-top: -10rem;
    text-transform: uppercase;
    font-size: 5rem;
  }
  .hero-para {
    color: white;
    margin-top: 1rem;
    text-align:center;
    font-size: 3rem;
  }
  `;

export default Home;

// margin-top: 1.5rem;
//     margin-bottom: 3.4rem;
//     max-width: 60rem;
