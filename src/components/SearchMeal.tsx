import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import MealCard from './UI/MealCard';

const SearchMeal = (props: any) => {
  const navigate = useNavigate();
  const { data, status } = useGetData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchMeal.trim()}`);

  const getMealDetails = ({ id }: any) => {
    navigate(`meal-details/${id}`)
  }

  const RowData = () => {
    return (
      <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
        {!!data.meals ?
          data.meals.map((item: any) => {
            return <Col xs={12} md={6} sm={12} lg={4} key={item.idMeal}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
              <MealCard
                id={item.idMeal}
                onClick={getMealDetails}
                image={item.strMealThumb}
                name={item.strMeal} />
            </Col>
          }):<h1>No Results Found 😥</h1>
        }
      </Row>
    )
  }

  return (
    <Container  >
      <h1 style={{ marginTop: "2rem" }} >Showing Results for {props.searchMeal.trim()}</h1>
      {!!data ? <RowData /> : <Loader />}

    </Container>
  )
}

export default SearchMeal