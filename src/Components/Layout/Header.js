import { Fragment } from "react/jsx-runtime"
import mealsImage from '../../assets/meals1.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
import logo from '../../assets/logo1.png'

const Header=props=>{
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.logoContainer}>
                    <img src={logo} alt="Logo" className={classes.logo} />
                    <h1 className={classes.brandName}>BitsBazaar</h1>
                </div>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>

    </Fragment>
}
export default Header;







