import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router'
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import MealCard from './UI/MealCard';

const MealByCategory = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { data, status, loader } = useGetData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);

    const getMealDetails = ({ id }: any) => {
        navigate(`meal-details/${id}`)
    }

    const RowData = () => {
        return (
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
        )
    }


    return (
        <Container  >
            <h1 style={{ marginTop: "2rem" }} >Meals in Category {name}</h1>
            {!!data ? <RowData /> : <Loader />}

        </Container>
    )
}

export default MealByCategory