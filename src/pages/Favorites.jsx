import React from 'react';
import MainCardSkeleton from '../ui/mainCardSkeleton.jsx';
import FavoritesNav from '../components/favoritesNav.jsx';
import FavoritesHeader from '../components/favoritesHeader.jsx';
import FavoritesMain from '../components/favoritesMain.jsx';

const Favorites = () => {
    return (
        <>
        <FavoritesNav/>
        <FavoritesHeader/>
        <FavoritesMain/>
        </>
    );
}

export default Favorites;
