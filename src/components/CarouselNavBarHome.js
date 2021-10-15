import React from 'react';
import ListCategoryPlayGames from './ListCategoryPlayGames';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/CarouselNavBarHome.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
function CarouselNavBarHome(props) {
  const { setCategory, setTextCategory } = props;
    return (
        <Carousel responsive={responsive} centerMode={true} >
            {Object.keys(ListCategoryPlayGames[0]).map((category, index) => (  
                <div className='container-carousel' key={index}>
                  <Link to='/' onClick={() => {
                    setCategory(Object.values(ListCategoryPlayGames)[0][category]);
                    setTextCategory(category);
                  }}>
                    <span className={(index % 3 === 1 && 'category-blue') || (index % 3 === 0 && 'category-pink') } >
                        {category}
                    </span>                  
                  </Link>
                </div> 
            ))}
        </Carousel>
    );
}

export default CarouselNavBarHome;