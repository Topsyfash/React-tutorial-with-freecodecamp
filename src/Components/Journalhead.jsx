

export const Journalhead = (props) => {

  const starIcon = props.isFilled ? "src/Components/Assets/star.png" : "src/Components/Assets/twitt.png";
  
  return (

    <div>
       <img src={starIcon} width={30} onClick={props.toggleFunc}/>
    </div>
      // <div className="journal-head">
      //     <h2>My Travel Journal</h2>
      // </div>
  )
}
