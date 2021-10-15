import React from 'react';
import HeaderPlayGames from '../components/HeaderPlayGames';
import NavBarHome from '../components/NavBarHome';
import FooterPlayGames from '../components/FooterPlayGames';
import '../styles/Home.css';

function Home() {
    return (
        <main>
            <HeaderPlayGames />
            <NavBarHome />
            <FooterPlayGames />
        </main>
    );
}

export default Home;