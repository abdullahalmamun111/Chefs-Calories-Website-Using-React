import React from 'react';

const Sidebar = ({recipieQueue,handlePrepareing,preparedRecipe,calculateTimeAndCalorie,totalcalorie,totalTime}) => {
    return (
        <div className='w-1/3 border-2 rounded-3xl p-3 text-gray bg-base-100 my-5'>
           <h1 className='text-center text-4xl font-bold border-b-2 pb-3'>Want To Cook : 0{recipieQueue.length}</h1>
           {/* want to cook table */}
           <div className="overflow-x-auto">
            <table className="table">
             {/* head */}
             <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
                </tr>
            </thead>
    <tbody>
       {
        recipieQueue.map((recipie, idx) => 
        <tr key={idx} className='hover'>
        <td>{idx + 1}</td>
        <td>{recipie.recipe_name}</td>
        <td>{recipie.preparing_time} minutes</td>
        <td>{recipie.calories} calories</td>
        <td><button onClick ={() => {handlePrepareing(recipie.recipe_id)
            calculateTimeAndCalorie(recipie.preparing_time,recipie.calories)}
        } class=" w-32 text-white rounded-full bg-green-700  py-1">Want To Cook</button></td>
        </tr>
        )
       } 
       
    </tbody>
  </table>
           </div>
           {/* currently prepare cook table */}
           <h1 className='text-center text-4xl font-bold border-b-2 pb-3 mt-8 border-t-2'>Currently Cooking : 0{preparedRecipe.length}</h1>
           <div className="overflow-x-auto">
            <table className="table">
             {/* head */}
             <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
                </tr>
            </thead>
    <tbody>
       {
        preparedRecipe.map((recipie, idx) => 
        <tr key={idx} className='hover'>
        <td>{idx + 1}</td>
        <td>{recipie.recipe_name}</td>
        <td>{recipie.preparing_time} minutes</td>
        <td>{recipie.calories} calories</td>
        </tr>
        )
       } 
        <tr>
        <td></td>
        <td></td>
        <td>Total Time = {totalTime}</td>
        <td>Total calories = {totalcalorie}</td>
        </tr>
       
    </tbody>
  </table>
           </div>
        </div>
    );
};

export default Sidebar;