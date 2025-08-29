import classes from './HeaderCartButton.module.css';
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import styled from 'styled-components';



const HeaderCartButton=props=>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return(
        <StyledWrapper>
        <button className="cssbuttons-io" onClick={props.onClick}>
            <span>
            <span className={classes.icon}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3WsUrEQBDG8YCV7Vmo5YFvYGVlYeMhWB+CPoGNrfgA4ksIVr7B9SdoZ2d/qK0WFgc6//GTxS1SmY3ZLMI5sN0wP75NyKSqFrKAG3dXOMAMGBeH/RtH0kZVstz9KuJnRWEz24/wXVFY0jIwB1zSalHc3Scx9VFRGDiuv2y5DjD9EZY07Al+Skn90AN+2Qi7+0UPiQ8aYUnbmdFPSWsp8BLwkhG+b0Rr132dMfV5Mgwc5oLNbCcZljQICyPDNc/DFzEZjqlvMySetEIjfJoh8UlrWNI68NYBfZW00hqO+FZYk8BHC/A9/GBI2vwVurhlZnvAc9gwZjbq2pdcYVDt+T127fv7sJmNwtAwzMx2u/b9V1WqvgDSm9EhcEXzygAAAABJRU5ErkJggg==" alt="shopping-cart--v1"></img>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
            </span>
        </button>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    height: 10%;
    border-radius: 0.8em;
    cursor: pointer;
    border: none;
    background: linear-gradient(to right, #932c04, #2c1310);
    color: ghostwhite;
    overflow: hidden;
     font-family: "Poppins", sans-serif;
  }



  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.2em 0.3em 0.2em 0.3em;
  }
    @media (max-width: 600px) {
    .cssbuttons-io span:nth-child(2) {
      display: none;
    }
  }

  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .cssbuttons-io::before {
    content: "";
    background:  #932c04;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  .cssbuttons-io:active {
    transform: scale(0.95);
  }`;


export default HeaderCartButton;


