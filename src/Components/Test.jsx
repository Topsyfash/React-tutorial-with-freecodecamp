import { useState } from "react"
import { Journalhead } from "./Journalhead";

export const Test = () => {

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "doe",
        Phone:"+123 345 456",
        email: "itzclass@gmail.com",
        isFavorite: false
   })

   

    function toggleFavorite() {
        setContact((prevState) => {
            return {
                ...prevState , isFavorite:!prevState.isFavorite
            }
        })
    }
    return (
        <div>
            <img src="src/Components/Assets/zafares.jpg" />
            <div>
                <Journalhead isFilled={contact.isFavorite} toggleFunc={toggleFavorite }/>
                <h2>{`${contact.firstName} ${contact.lastName}` }</h2>
                <p>{contact.Phone}</p>
                <p>{contact.email}</p>
                </div>
            
        </div>
    )
}
