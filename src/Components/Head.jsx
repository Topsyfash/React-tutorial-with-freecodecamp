import './CSS/Head.css'

const Head = () => {
  return (
      <div className='header'>
          <img src="src/Components/Assets/my-image.png" alt="my-image" className="my-image"/>
          <p>Ayomide Fasogba</p>
          <p>Frontend Developer</p>
          <div className='contacts-cover'>
              <p className='contact'>
                  <img src="src/Components/Assets/image icon.png" width={40} />
                  <p>Email</p>
              </p>
              <p className='contact'>
                  <img src="src/Components/Assets/linkedin icon.png" width={40} />
                  <p>Linkedin</p>
              </p>
          </div>
    </div>
  )
}

export default Head