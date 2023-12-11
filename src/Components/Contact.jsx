/* eslint-disable react/prop-types */

const Contact = ({img , name,Email}) => {

    
    return (
        <div>
            <div className="card-container">
                <img src={img} />
                <h3>Mr {name}</h3>
                <div className="info-group">
                    <img src="src/Components/Assets/facebook.png" width={30} />
                    <p>+1 234 567 456</p>
                </div>
                <div className="info-group">
                    <img src="src/Components/Assets/linkedin icon.png" width={30} />
                    <p>{Email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact

// const person = {
//     img : "src/Components/Assets/zafares.jpg",
// name:'Whisk',
// phone:'+1 234 567 456',
// Email: 'Whisk@gmail.com'
// }
// const { img, name } = person
//     console.log(img)