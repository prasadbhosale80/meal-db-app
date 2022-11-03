import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'

const ShowDetails = (props: any) => {

    const IngredientsList = () => {
        const list = []
        for (let i = 1; i <= 20; i++) {
            if (props.meal[`strIngredient${i}`]) {
                list.push(props.meal[`strIngredient${i}`])
            }
        }
        return <>
            {
                list.map((item) => <ListGroup.Item key={item} >{item}</ListGroup.Item>)
            }
        </>
    }

    const MeasureList = () => {
        const list = []
        for (let i = 1; i <= 20; i++) {
            if (props.meal[`strMeasure${i}`]) {
                list.push(props.meal[`strMeasure${i}`])
            }
        }
        return <>
            {
                list.map((item) => <ListGroup.Item key={item} >{item}</ListGroup.Item>)
            }
        </>
    }

    const SubHeading = (name: any) => {
        return <h3 style={{ color: "#919190", textDecoration: "underline" }} >
            {name}
        </h3>
    }

    return (

        <>
            <br />
            <h1>{props.meal.strMeal}</h1>
            <br />
            <Row>
                <Col lg={4} sm={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
                    <div style={{ height: "20rem", width: "20rem", margin: "auto", borderRadius: "15px", border: "5px solid #ccc", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
                        <Image src={props.meal.strMealThumb} style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                    </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6} style={{ margin: "0px" }} >
                    {SubHeading("Ingredients")}
                    <div style={{ maxHeight: "20rem", overflow: "auto" }} >
                        <ListGroup variant="flush">
                            <IngredientsList />
                        </ListGroup>
                    </div>
                </Col>
                <Col lg={4} xs={6} sm={6} md={6} >
                    {SubHeading("Measure")}
                    <div style={{ maxHeight: "20rem", overflow: "auto" }} >
                        <ListGroup variant="flush">
                            <MeasureList />
                        </ListGroup>
                    </div>
                </Col>
            </Row>

            <br />
            <br />
            {SubHeading("Instructions")}
            <div style={{ width: "100%" }} >
                <p>{props.meal.strInstructions}</p>
            </div>

        </>


    )
}

export default ShowDetails