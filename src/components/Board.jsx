import React from "react";
import Card from "./Card";
import CardData from "./CardData";

export default function Board() {
    return (
        <>
            <div className="board">
                <Card details={CardData} />
            </div>
        </>
    );
}