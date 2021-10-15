import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import Footer from '../components/FooterPlayGames';
import HeaderPlayGames from '../components/HeaderPlayGames';
import TodoContext from '../context/TodoContext';
import { handleClickReturn, handleClickGame } from '../components/HistoryGamesPlayDetails';
import '../styles/GamesPlayDetails.css';

function GamesPlayDetails() {
    const { gameDetails} = useContext(TodoContext); 
    const history = useHistory();

    return (
        <>
            <HeaderPlayGames />
            <div className='container-details'>
                <div className='box-details'>
                    <img src={gameDetails.thumbnail} alt='foto do jogo'/>
                    <h2>{gameDetails.title}</h2>
                    <h2>{`Lançamento: ${gameDetails.release_date}`}</h2>
                    <h2>{`Gênero: ${gameDetails.genre}`}</h2>                   
                    <h2>{`Desenvolvido por: ${gameDetails.developer}`}</h2>
                    <h2>{`Plataforma: ${gameDetails.platform}, Web Browser`}</h2>
                    <h2>{`Publicado por: ${gameDetails.publisher}`}</h2>
                    <div>
                        <button 
                            type='button' 
                            onClick={() => handleClickReturn(history)}
                        >
                            Voltar
                        </button>                        
                        <a                            
                            href={`${gameDetails.game_url}`} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Jogar
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GamesPlayDetails;