import React from 'react'
import { Container } from 'react-bootstrap';
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import ShowDetails from './ShowDetails';

const RandomMeal = () => {

  const { data, status } = useGetData(`https://www.themealdb.com/api/json/v1/1/random.php`);

  return (
    <Container>
      {!!data ? <ShowDetails meal={data.meals[0]} /> : <Loader />}
    </Container>
  )
}

export default RandomMeal