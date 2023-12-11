import { useState } from "react"

export const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriend: true,
            employment: "",
            favColor:""
        }
    )

    // console.log(formData.favColor)
    function handleChange(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
                
           }
       })
    }

    function handleSubmit() {
        
    }
    
  return (
      <form onSubmit={handleSubmit}>
          <input type="text"
              placeholder="first-name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input type="text"
              placeholder="last-name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
          <input type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
          />
          <textarea 
              placeholder="comments"
              onChange={handleChange}
              name="comments"
              value={formData.comments}
          /><br/>
          <input
              type="checkbox"
              id="isFriend"
              checked={formData.isFriend}
              name="isFriend"
              onChange={handleChange}
          />
          <label htmlFor="isFriend">Are you are friend</label>
          <br/><br/>
          <fieldset>
              <legend>Current Employment Status</legend>
              <input
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  onChange={handleChange}
              />
              <label htmlFor="unemployed">Unemployed</label>
              <br/>
              <input
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  onChange={handleChange}
              />
              <label htmlFor="part-time">part-time</label>
              <br/>
              <input
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  onChange={handleChange}
              />
              <label htmlFor="full-time">Full-time</label>
              <br/>
          </fieldset>
          <br />
          <label>what is your favorite color</label>
          <select
              id="favColor"
              name="favColor"
              onChange={handleChange}
              value={formData.favColor}
              
          >
              <option value="Red">Red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="indigo">indigo</option>
              <option value="violet">violet</option>
          </select>

          <button>Submit</button>
    </form>
  )
}
