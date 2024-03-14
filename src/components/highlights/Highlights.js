import React from "react";
import "./highlights.css";
import Card from "../card/Card";
import Greeksalad from "../../assets/greek salad.jpg";
import LemonDessert from '../../assets/lemon dessert.jpg';
import bruchetta from '../../assets/bruchetta.svg'





const data= [{
    id:1,
    img:Greeksalad,
    heading:"Greek salad",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
},{
    id:2,
    img:bruchetta,
    heading:"Bruchetta",
    price:"$5.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
},{
    id:3,
    img:LemonDessert,
    heading:"Lemon Dessert",
    price:"$5.00",
    description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
}]




const Highlights = () => {
  return (
    <section className="highlight-section">
      <header className="header">
        <h1 className="title">Specials</h1>
        <div className="btn-container">
          <button className="btn">Online Menu</button>
        </div>
      </header>
      <section className="card-container">
        {data.map((item) => {
            const {id, img, heading, price, description} = item;
           return <Card id={id} img={img} heading={heading} price={price} description={description}  />
        })}
      </section>
    </section>
  );
};

export default Highlights;
