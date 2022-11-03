import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import MealCard from './UI/MealCard';

const AtoZMeals = () => {
  const [url, setUrl] = useState<any>("");
  const [char, setChar] = useState("")
  const { data } = useGetData(url);
  const navigate = useNavigate();
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const boxStyle = {
    minHeight: "70px",
    minWidth: "70px",
    padding: "10px",
    border: "2px solid #ccc",
    borderRadius: "5px", margin: "1rem",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "2rem",
    cursor:"pointer"
  }

  const getMealDetails = ({ id }: any) => {
    navigate(`meal-details/${id}`)
  }

  const RowData = () => {
    return (
     <>
     <h1>All Meals Start with {char}</h1>
       <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
        {data &&
          data.meals.map((item: any) => {
            return <Col xs={12} md={6} sm={12} lg={4} key={item.idMeal}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
              <MealCard
                id={item.idMeal}
                onClick={getMealDetails}
                image={item.strMealThumb}
                name={item.strMeal} />
            </Col>
          })
        }
      </Row>
     </>
    )
  }


  const handleClick = (event: any) => {
    console.log(event.target.children[0].innerText);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.children[0].innerText}`)
    setChar(event.target.children[0].innerText);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }} >
        <div style={{ width: "95%", overflow: "auto", display: "flex", justifyContent: "center", }} >
          {alpha.map((item) => <div style={{ ...boxStyle, }} onClick={handleClick}  ><p>{item.toUpperCase()}</p></div>)}
        </div>
      </div>
      <Container  >
        <>
          {!!data && !!data.meals ? <RowData /> :( char && <Loader />)}
        </>

      </Container>
    </>

  )
}

export default AtoZMeals