import styled from 'styled-components';


const MealsSummary = () => {
    return (
        <StyledWrapper>
        <section >
            <div className={`card`}>
            <h2 className='card-title'>Delicious Food, Delivered To You</h2>
            <p className='small-desc'>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p className='small-desc'>
                All our meals are cooked with high-quality ingredients, just-in-time
                and of course by experienced chefs!
            </p>
            <div className="go-corner"></div>
            </div>
         </section>
        </StyledWrapper>
    );
};



const StyledWrapper = styled.div`
   font-family: 'Poppins', sans-serif; 

  .small-desc {
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.5em;
    font-family: "Poppins", sans-serif;
    color: #030000ff;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #c4751c, #932c04);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to top,   #c4751c, #e1c99e);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    max-width: 45rem;
    width: 90%;
    margin: auto;
    margin-top: -10rem;
    position: relative;
    color: black;
    border-radius: 14px;
    padding: 1rem;
    background-color: #383838;
    box-shadow: 0 1px 18px 10px rgba(0,0,0,0.25);
  }

  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg,  #2c1310 , #932c04);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(49);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
    .card-title{
     font-family: "Poppins", sans-serif;
     font-size: 1.5em;
     font-weight: 600;
     
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }`;


export default MealsSummary;





