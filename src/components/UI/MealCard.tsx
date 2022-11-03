import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import MealModal from './MealModal'

const MealCard = (props: any) => {
  const handleClick = (event:any)=>{
    props.onClick(props)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '18rem', margin:"1rem", cursor:"pointer" }}  >
      <Card.Img onClick={handleClick} variant="top" src={props.image} />
      <Card.Body onClick={props.showModal && handleShow} >
        {props.name && <Card.Title  >{props.name}</Card.Title>}
      </Card.Body>
      <MealModal handleClose={handleClose} show={show} title={props.name} details={props.description}  />
    </Card>
  )
}

export default MealCard