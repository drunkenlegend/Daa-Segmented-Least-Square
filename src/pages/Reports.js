import React from 'react';
import DAA from "./linefitting.gif";
import DAA1 from "./input.png";


function Reports() {
  return (
    <div className='reports'>
      <div style={{border:"2px black solid",alignSelf: "center",margin: "20px" }}>
          <h5>Inputs</h5>
          
          <img
                        src={DAA1}
                        style={{ width: "inherit", margin: 10 }}
                        alt="Image"
                      />

          
      </div>
      <div style={{alignSelf: "center",margin: "20px" }}>
          
          <img
                        src={DAA}
                        style={{ width: "inherit", margin: 10 }}
                        alt="Image"
                      />
         
      </div>
    </div>
  );
}

export default Reports;
