import React, { Component } from 'react'

export default class Documentation extends Component {
    render() {
        return (
            <div style={{
                
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                
                <div
                    class="col"
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    
                    }}
                >
                    <h3>Contour Problem </h3>
                    <h5>
                    <a href="https://drunkenlegend.github.io/segmented-least-documentation/">
                        Go to Documentation
                    </a>
                    </h5>
                </div>
            </div>
        )
    }
}
