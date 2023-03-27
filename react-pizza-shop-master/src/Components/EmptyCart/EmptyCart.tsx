import emptyCart from "../../assets/img/empty-cart.png";
import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart:React.FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <Link to="/react-pizza-shop" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}