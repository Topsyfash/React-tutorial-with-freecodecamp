import { useState } from "react"
import Header from "./Components/Header"
import Maincontent from "./Components/Maincontent"
import { createContext } from "react"
export const UserContext = createContext();
const App = () => {
  
  const [user, setUser] = useState("joe bid")
  function click() {
    setUser("jane doe")
  }

  return (
    <div className='container'>
      <UserContext.Provider value={user}>
        <h1>Hello {user}</h1>
        <button onClick={click}>Change Name</button>
        <Header/>
        <Maincontent />
      </UserContext.Provider>
      
    </div>
  )
}

export default App
//contact
{/* <Contact
img="src/Components/Assets/zafares.jpg"
name='Zafares'
phone='+1 234 567 456'
Email='zafares@gmail.com'
/>
<Contact
img="src/Components/Assets/zafares.jpg"
name='Whiskerson'
phone='+1 234 567 456'
Email='Whiskerson@gmail.com'
/>
<Contact
img="src/Components/Assets/zafares.jpg"
name='Flufykins'
phone='+1 234 567 456'
Email='Flufykins@gmail.com'
/>
<Contact
img="src/Components/Assets/zafares.jpg"
name='Whisk'
phone='+1 234 567 456'
Email='Whisk@gmail.com'
/> */}

//const [box, setBox] = useState(Boxes)

  
//   const boxElement = box.map((boxe) => {

//     return <Box
//       key={boxe.id}
//       id={boxe.id}
//       on={boxe.on}
//       toggle={toggle} />
//   })

//   function toggle(id) {
//     setBox((prevBox) => {
//       return prevBox.map((square) => {
//        return square.id===id? {...square, on : !square.on} : square 
//      })
//    })
//  }