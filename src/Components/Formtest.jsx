import { useState } from "react"

export const Formtest = () => {

    const [info, setInfo] = useState(
        {
            email: "",
            password: "",
            passwordConfirm:"",
            isJoin: false
        }
    )

    // console.log(info)

    function storeInfo(event) {
        const { name, value, checked, type } = event.target
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (info.password === info.passwordConfirm) {
            console.log("successfully signed up")
        } else {
            console.log('passwords do not match')
            return
        }

        if (info.isJoin) {
            console.log('Thanks for subscribing to newsletter')
        }
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  placeholder="email-address"
                  name="email"
                  value={info.email}
                  onChange={storeInfo}
              />
              
              <br/>
              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={info.password}
                  onChange={storeInfo}
              />
              
              <br/>
              <input
                  type="password"
                  placeholder="Confirm password"
                  name="passwordConfirm"
                  value={info.passwordConfirm}
                  onChange={storeInfo}
              />
              
              <br/>
              <input
                  type="checkbox"
                  onChange={storeInfo}
                  name="isJoin"
                  checked={info.isJoin}
                  id="isJoin"
              />
              <label htmlFor="isJoin">
                  I want to join the newsletter
              </label>
              <br />
              
              <button>Sign up</button>

          </form>
    </div>
  )
}
