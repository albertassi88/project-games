import React from "react";
import { MdOutlineGames } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import '../styles/HeaderHome.css';

function HeaderHome() {
    return (
        <header>
            <MdOutlineGames />
            <h2>Jogos</h2>
            <CgGames />
        </header>
    );
}

export default HeaderHome;