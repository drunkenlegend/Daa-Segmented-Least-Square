import React from 'react';
import './Card.css';

function Card(props) {

    
                
                    
    return (
        <div className="card" style={{border: "solid .5px rgb(185, 181, 181)",borderRadius:"10px"}}>
            <div className="cardTop">
                <img
                        src={props.pic}
                        style={{ width: "300px",height:"500px", margin: 10 }}
                        alt="image"
                      />
                
            </div>
            <div className="cardLower" style={{background: props.color,color:"white"}}>
                <h2 >{props.name}</h2>
                
                <button className="cardButton" style={{color:props.color,fontWeight:"600"}}> {props.id}</button>

            </div>
        </div>
    )
}

export default Card
