import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Priya",
    location: "Mumbai",
    text: "The makhanas from The Bite Bazaar are an absolute delight! They’re perfectly roasted, crunchy, and seasoned to perfection. A healthy snack that’s guilt-free and delicious!",
    rating: 4,
  },
  {
    name: "Manoj Patel",
    location: "Surat",
    text: "The khakhras from The Bite Bazaar remind me of my grandma’s homemade ones. They’re so light, flavorful, and satisfying. Truly an authentic experience!",
    rating: 5,
  },
  {
    name: "Sunita",
    location: "Pune",
    text: "My family and I are big fans of The Bite Bazaar's khakhras. They’re perfect with a cup of tea or even as a standalone snack. The garlic-flavored khakhra is a must-try!",
    rating: 5,
  },
  {
    name: "Sunita",
    location: "Pune",
    text: "My family and I are big fans of The Bite Bazaar's khakhras. They’re perfect with a cup of tea or even as a standalone snack. The garlic-flavored khakhra is a must-try!",
    rating: 5,
  },
  {
    name: "Sunita",
    location: "Pune",
    text: "My family and I are big fans of The Bite Bazaar's khakhras. They’re perfect with a cup of tea or even as a standalone snack. The garlic-flavored khakhra is a must-try!",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (

    <section className={styles.testimonials}>
      <h3>Bite Into Happiness</h3>
      <h1>Taste That Speaks for Itself</h1>
      <br></br>
      <hr style={{ border: "1px solid #2c1310" }} />
      <br></br>
      <h3>Our Promise, Your Satisfaction</h3>
      <h1>Hear It from Happy Customers</h1>
      <br></br>
      <hr style={{ border: "1px solid #2c1310 " }} />
      <br></br>
      <h3>Fresh Flavors, Fresh Smiles</h3>
      <h1>Loved by Foodies Everywhere</h1>
      <br></br>
      <hr style={{ border: "1px solid #2c1310" }} />
      <br></br>

      <h2 className={styles.title}>Testimonials</h2>
      
      <Slider {...settings}>
        
        {testimonials.map((t, index) => (
            <div className={styles.grid}>
          <div key={index} className={styles.card}>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.footer}>
              <div className={styles.profile}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
               <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <div>
                  <h4>{t.name}</h4>
                  {/* <small>{t.location}</small> */}
                </div>
              </div>
              <div className={styles.stars}>
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          </div>
          </div>
        ))}
        
      </Slider>
      {/* </div> */}
      <br></br>
      <h1>Recommended by People Like You!!</h1>
    </section>
    
  );
};

export default Testimonials;
