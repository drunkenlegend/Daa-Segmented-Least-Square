import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='home' >
      <h3
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: " #060b26",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          Design and Analysis of Algorithm Assignment
        </h3>
        <h6
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: " #060b26",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          Segmented Least Squares Algorithm
        </h6>
        <p style={{
            alignSelf: "center",
            textAlign: "center",
            color: " #060b26",
            marginTop: "40px",
            marginBottom: "40px"
          }}>This website gives an overview of the algorithm and provides with the implementation and visualisation of the same.</p>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src="https://kartikkukreja.files.wordpress.com/2013/10/segmented.png?w=300&h=204"
            alt="Image"
            style={{ alignSelf: "center", height: "200px", width: "400px" }}
          />
        </div>
    </div>
  );
}

export default Home;
