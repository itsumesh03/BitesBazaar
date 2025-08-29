import { Fragment } from "react/jsx-runtime";


import MealsSummary from "./MealsSummary";
// import MealsImage from "./MealsImage";
import AvailableMeals from "./AvailableMeals";

const Meals=()=>{
    return (
        <Fragment>
            <MealsSummary />
            {/* <MealsImage /> */}
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;