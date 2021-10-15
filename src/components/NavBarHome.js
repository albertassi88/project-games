import React, {useState, useContext} from 'react';
import CarouselNavBarHome from './CarouselNavBarHome';
import PaginationNavBarHome from '../components/PaginationNavBarHome';
import TodoContext from '../context/TodoContext';
import '../styles/NavBarHome.css';
   
function NavBarHome() {
  const [textCategory, setTextCategory] = useState('Anime');
  const { setCategory } = useContext(TodoContext); 
  
  return (
    <>
      <CarouselNavBarHome setCategory={setCategory} setTextCategory={setTextCategory}/>
      <div className='box-category'>
        <p>{textCategory}</p>
      </div>
      <div className='container-navBar'>      
        <PaginationNavBarHome/>
      </div>
    </>
  );
}

export default NavBarHome;