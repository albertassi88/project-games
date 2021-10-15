import React, {useState, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import '../styles/PaginationNavBarHome.css';
   
function PaginationNavBarHome() { 
    const [currentPage, setCurrentPage] = useState(0);
    const { apiGames, setGameDetails } = useContext(TodoContext); 

    function HandlePageClick({ selected: selectedPage }) {
      return setCurrentPage(selectedPage);
    }

    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    
    function PaginationPlayGames() {
      return apiGames.slice(offset, offset + PER_PAGE).map((game, index) => (
        <div key={index}>
          <Link to={`/${game.title}`} onClick={() => setGameDetails(game)}>
            <img src={game.thumbnail} alt='foto do jogo'/>
            <h3>{game.title}</h3>
          </Link>
        </div>              
      ));      
    }

    const pageCount = Math.ceil(apiGames.length / PER_PAGE);

    return (
      <>     
        <ReactPaginate        
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={HandlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}         
        />     
        {PaginationPlayGames()}
      </>
    );
}

export default PaginationNavBarHome;