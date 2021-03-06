import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => { 
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="burger - bottom"/>
        </div>
    );

};

export default burger;