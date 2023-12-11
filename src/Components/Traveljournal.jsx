/* eslint-disable react/prop-types */
// import React from 'react'

export const Traveljournal = (props) => {
    return (
        <div className="journal">
            <img src={props.imageUrl}/>
            <div>
                <div className="location">
                    <span className="loc">{ props.location}</span>
                    <span><a href="">View on Google Map</a></span>
                </div>
                <h2>{props.title}</h2>
                <h5 className="date">{props.startDate} - {props.endDate}</h5>
                <p className="describe">{props.description }</p>

            </div>
        </div>
    )
}
