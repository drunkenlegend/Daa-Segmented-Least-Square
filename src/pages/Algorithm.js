import React from 'react';
import DAA from "./linefitting.gif";
import DAA1 from "./algo.png";

function Algorithm() {
  return (
    <div className='algorithm'>
      <div style={{ justifyContent: "center", display: "flex" ,flexWrap:"nowrap"}}>
            <h4 style={{alignSelf: "center", margin: "20px", width: "600px" }}>
            Running time: O(n3)
            There are O(n2) pairs (i, j) for which we need to compute e(i, j) and each computation of 
            e(i, j) takes O(n) time. Thus, all e(i, j) values can be computed in O(n3) time. Once the e(i, j
            ) values are computed, the OPT array can be filled in O(n2) time.
            </h4>
            <img
            src={DAA1}
            alt="Image"
            style={{ alignSelf: "center", height: "580px", width: "600px" ,margin:"40px"}}
          />
          
          <img
            src={DAA}
            alt="Image"
            style={{ alignSelf: "center", height: "750px", width: "600px" }}
          />
        </div>
    </div>
  );
}

export default Algorithm;
