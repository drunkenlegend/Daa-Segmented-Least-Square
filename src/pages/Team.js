import React, { Component } from 'react'
import Card  from "./Card.js";
import Saksham from "./saksham.png";
import Srishti from "./srishti.png";
import Mayank from "./mayank.png";


export default class Team extends Component {
    render() {
        return (
            <div>
                <div style={priceCard}>
                <Card  name="Mayank Negi"  color="#589e52" id="2018A7PS0210H" pic={Mayank} />
                <Card  name="Srishti Sanghi"  color="#f684a5" id="2018A7PS0255H" pic={Srishti}/>
                <Card  name="Saksham Gupta"  color="#ca76e5" id="2018A7PS0281H" pic={Saksham}/>
                
                </div>

            </div>
        )
    }
}
const priceCard={
    display:"flex",
    flexWrap:"wrap",    
    position:"relative",
    // border:"2px black solid",
    marginTop:"50px",
    columnGap:"30px",
    rowGap:"30px",
    padding:"10px",
    justifyContent:"center"
  }