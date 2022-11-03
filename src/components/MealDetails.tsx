import React from 'react'
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import ShowDetails from './ShowDetails';

const MealDetails = () => {
    const { id } = useParams();

    const { data, status } = useGetData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    return (
        <Container>
            {!!data ? <ShowDetails meal={data.meals[0]} /> : <Loader />}
        </Container>
    )
}

export default MealDetails