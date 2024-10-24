import { useState } from "react"
import Banner from "./Components/Banner"
import Cards from "./Components/cards"
import Header from "./Components/Header"
import Recipie from "./Components/Recipie"
import Sidebar from "./Components/Sidebar"

function App() {
  const[recipieQueue, setRecepieQue] = useState([]);
  const [preparedRecipe,setPreparedRecipe] = useState([]);
  const[totalTime, setTotalTime] = useState(0)
  const[totalcalorie, setTotalCalorie] = useState(0)

  
  const handleRecepieQueue = (recepie) => {
    const isExist = recipieQueue.find(previous => previous.recipe_id === recepie.recipe_id);
    if(!isExist){
      setRecepieQue([...recipieQueue ,recepie])
    }
    else{
      alert('Sorry! This Recepie Is Already Exist.')
    }
    
  }

  const handlePrepareing = id => {
      // find which recipe to remove
      const deletedRecipe = recipieQueue.find(recipe => recipe.recipe_id === id)
      const updateQueue = recipieQueue.filter(recipe => recipe.recipe_id !== id)
      setRecepieQue(updateQueue);
      setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeAndCalorie = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalorie(totalcalorie + calorie)
  }


  return (
    <>
      <div className="container mx-auto px-4">
        {/* header section */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* recepie section */}
      <Recipie></Recipie>
      {/* recepie cards section */}
      <section className="flex gap-5 flex-col md:flex-row">
        {/* cards section */}
        <Cards handleRecepieQueue={handleRecepieQueue}></Cards>
        {/* sidebar section */}
        <Sidebar 
        recipieQueue={recipieQueue}
        handlePrepareing={handlePrepareing}
        preparedRecipe={preparedRecipe}
        calculateTimeAndCalorie={calculateTimeAndCalorie}
        totalTime={totalTime}
        totalcalorie={totalcalorie}
        ></Sidebar>
      </section>
      </div>
      
      
    </>
  )
}

export default App
