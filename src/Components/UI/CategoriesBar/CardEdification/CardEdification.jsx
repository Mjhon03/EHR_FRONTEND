import React from "react"

export const VIewCardEdification = ({ data }) => {
    const { titulo } = data
    return (
        <div>
            <h1>CardEdification</h1>
            <p>{titulo}</p>
        </div>
    )
}