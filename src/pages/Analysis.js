import React, { Component } from 'react'
import Analy1 from "./1.png";
import Analy2 from "./2.png";
import Analy3 from "./3.png";
import Analy4 from "./4.png";
import Analy5 from "./5.png";
import Analy6 from "./6.png";
import './Analysis.css';

export default class Analysis extends Component {
    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",alignSelf: "center",margin: "0px",backgroundColor:"#f2f6f9" }} >
                <img style={{border:"2px black solid",alignSelf: "center"}}
                    src={Analy1}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />
                <img style={{border:"2px black solid",alignSelf: "center" }}
                    src={Analy2}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />
                <img style={{border:"2px black solid",alignSelf: "center" }}
                    src={Analy3}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />
                <img style={{border:"2px black solid",alignSelf: "center" }}
                    src={Analy4}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />
                <img style={{border:"2px black solid",alignSelf: "center" }}
                    src={Analy5}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />
                <img style={{border:"2px black solid",alignSelf: "center" }}
                    src={Analy6}
                    alt="Image"
                    style={{ alignSelf: "center",justifyContent:"center", height: "750px", width: "1000px" }}
                />

            </div>
        )
    }
}
