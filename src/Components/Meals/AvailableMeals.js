import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import mealsImage from '../../assets/meals.jpg';
import mealsImage1 from '../../assets/meals1.jpeg';
import thali from '../../assets/Punjabi-Thali.webp';
import Dosa from '../../assets/dosa.avif';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Punjabi Thali',
        description: 'Dal Makhani/Dal Tadka + Jeera Rice + 2 Tandoori Roti + Raita + Salad + Sweet Dish',
        price: 112.99,
        image: thali
    },
    {
        id: 'm2',
        name: 'Masala Dosa',
        description: 'A South Indian specialty!',
        price: 60.5,
        image: Dosa
    },

    {
        id: 'm3',
        name: 'Republic of Kitchens',
        description: 'North Indian Cuisine, Punjabi',
        price: 429.99,
        image: mealsImage
    },

    {
        id: 'm4',
        name: 'Delhi Darbar',
        description: 'Kucha, Samose, Biryani',
        price: 250.99,
        image: mealsImage1
    },
];


const AvailableMeals =()=>{
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}  image={meal.image}  />)
        return <section className={classes.meals}>
            
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
};


export default AvailableMeals;