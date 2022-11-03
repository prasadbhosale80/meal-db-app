
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import useGetData from '../hooks/useGetData';
import Loader from './Loader';
import MealCard from './UI/MealCard';

const AllCatagories = () => {
  const navigate = useNavigate()
  const { data, status } = useGetData('https://www.themealdb.com/api/json/v1/1/categories.php');
  const getMealsByCate = ({ name }: any) => {
    navigate(`meal-by-category/${name}`)
  }

  const RowData = () => {
    return (
      <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
        {!!data &&
          data.categories.map((item: any) => {
            return <Col xs={12} md={6} sm={12} lg={4} key={item.idCategory}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
              <MealCard
                showModal={true}
                onClick={getMealsByCate}
                image={item.strCategoryThumb}
                description={item.strCategoryDescription}
                name={item.strCategory} />
            </Col>
          })
        }
      </Row>
    )
  }


  return (
    <Container >
      <>
        <h1 style={{ marginTop: "2rem" }} >All Meals Categories</h1>
        {!!data ? <RowData /> : <Loader />}
      </>
    </Container>
  )
}

export default AllCatagories