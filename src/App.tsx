import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { lazy, Suspense, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [searchMeal, setSearchMeal] = useState<any>("")
  const AllCatagories = lazy(() => import('./components/AllCatagories'));
  const ErrorPage = lazy(() => import('./components/ErrorPage'));
  const RandomMeal = lazy(() => import('./components/RandomMeal'));
  const AtoZMeals = lazy(() => import('./components/AtoZMeals'));
  const SearchMeal = lazy(() => import('./components/SearchMeal'));
  const MealByCategory = lazy(() => import('./components/MealByCategory'));
  const MealDetails = lazy(() => import('./components/MealDetails'));

  
  const handleMeal=(meal:any)=>{
    setSearchMeal(meal)
  }

  return (
    <div className="App">
      <Suspense fallback={<Loader />} >
        <BrowserRouter>
          <NavigationBar searchMeal={searchMeal} handleMeal={handleMeal}  />
          <Routes>
            <Route path='/' element={<AllCatagories />} />
            <Route path='meal-by-category/:name' element={<MealByCategory />} />
            <Route path='meal-by-category/:name/meal-details/:id' element={<MealDetails />} />
            <Route path='a-z' element={<AtoZMeals />} />
            <Route path='a-z/meal-details/:id' element={<MealDetails />} />
            <Route path='random' element={<RandomMeal />} />
            <Route path='search' element={<SearchMeal searchMeal={searchMeal} />} />
            <Route path='search/meal-details/:id' element={<MealDetails />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
