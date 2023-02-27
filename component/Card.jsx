import React, { useEffect, useState } from "react";

const Card = () => {
  const [items, SetItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const data = await api.json();
    SetItems(data.meals);
    console.log(items);
  };
  return (
   <div className="container">
    <h1 className="text-center ">Our Recipes and menu</h1>
     <div className="card-container   d-flex justify-content-center flex-wrap gap-3">
      {/* <h1>Card</h1> */}
      {items.map((item) => {
        return (
          <div className="card p-2" key={item.idMeal}>
             <img className="card-img" src={item.strMealThumb} alt="Meal" />
            <h5 className="card-title text-center ">{item.strMeal}</h5>
            <button className="btn btn-outline-primary w-75 m-auto">Order</button>
          </div>
        );
      })}
    </div>
    <button className='btn btn-info card-top'><a href="#">Back to Top</a></button>
   </div>
  );
};



export default Card;
