import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div style={{ height: "200px", width: "200px", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, margin: "auto" }} >
      <Spinner animation="grow" style={{ height: "100px", width: "100px" }} />
      <h1>Loading...</h1>
    </div>
  )
}
export default Loader