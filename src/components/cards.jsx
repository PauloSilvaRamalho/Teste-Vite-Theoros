import React from "react";
import "./cards.css";

export function Card({ imgSrc, alt, children }) {
    return (
        <div className="card">
            <img src={imgSrc} alt={alt} className="card-img" />
            <div className="card-overlay">
                {children}
            </div>
        </div>
    );
}