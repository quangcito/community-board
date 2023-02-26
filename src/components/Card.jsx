import React from "react";


export default function Card(props) {
    return (
        <>
            {props.details.map( (value, index) => (
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={value.img} alt-text="card image" height="100" />
                    </div>
                    <div>
                        <h3>{value.name}</h3>
                        <p>{value.description}</p>
                        <p>Pledged: {value.pledged}</p>
                        <p>Goal: {value.goal}</p>
                        <p>Backers: {value.backers}</p>
                        <a className="card-link" href={value.link}>
                            <button>Kickstarter</button>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};