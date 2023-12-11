/* eslint-disable react/prop-types */

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.Location === 'online') {
        badgeText = "ONLINE"
        
    }

    return (
        <div className="card-container">

            {badgeText && <div className="card-tag">{badgeText}</div>}
            <img src={`src/Components/Assets/${props.img}`} />
            <div className="ratings">
                <img src="src/Components/Assets/star.png" width={30} />
                <span>{props.stats.rating} ({props.stats.reviewCount}) •</span>
                <span>{props.Location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>/person</p>
        </div>
    )
}

export default Card

// img='zafares.jpg'
// rating='5.0'
// reviewCount={6}
// country='NIGERIA'
// title='Life Lessons with katie zafares'
// price = {20}