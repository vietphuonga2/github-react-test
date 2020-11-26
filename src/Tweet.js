import React, { Component } from 'react'
import './App.css'
function Tweet(prop) {
    return (
        <div className="tweet">
            <h3>{prop.name}</h3>
            <p>{prop.msg}</p>
            <h3>Number of likes</h3>
        </div>
    )
}
export default Tweet