import React from "react"

const Home = props => {
  console.log(process.env.REACT_APP_BASENAME)
  return (
    <div>
      This is the homepage with basename {process.env.REACT_APP_BASENAME}
    </div>
  )
}

export default Home
