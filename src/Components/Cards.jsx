import { useEffect, useState } from "react";


const Cards = ({handleRecepieQueue}) => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
          {
            cards.map(card => <div class="card bg-base-100 border-2 my-5">
                <figure class="px-10 pt-10">
                  <img
                    src={card.recipe_image}
                    alt="Shoes"
                    class="rounded-xl h-50 object-cover" />
                </figure>
                <div class="card-body">
                <h2 class="card-title">{card.recipe_name}</h2>
                  <p>{card.short_description}</p>
                  <hr />
                  <h1 className="text-xl">Ingredients: {card.ingredients.length}</h1>
                  <ol className="list-disc">
                    <li>{card.ingredients[0]}</li>
                    <li>{card.ingredients[1]}</li>
                    <li>{card.ingredients[2]}</li>
                    <li>{card.ingredients[3]}</li>
                    <li>{card.ingredients[4]}</li>
                    <li>{card.ingredients[5]}</li>
                    <li>{card.ingredients[6]}</li>
                    <li>{card.ingredients[7]}</li>
                  </ol>
                  <div className="flex ">
                    <p>{card.preparing_time} minutes</p>
                    <p>{card.calories} calories</p>
                  </div>
                  <div class="card-actions">
                    <button onClick={()=>handleRecepieQueue(card)} class="btn btn-primary">Want To Cook</button>
                  </div>
                </div>
              </div>)
          } 
        </div>
    );
};

export default Cards;