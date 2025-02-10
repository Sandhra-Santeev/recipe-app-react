import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './recipe.module.css'


function Recipe({foodData}) {
    const { id } = useParams()

    const requiredItem = foodData.find(item=>item.id==id)
    console.log(requiredItem)

    if(!requiredItem){
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}} >
            <h1 style={{margin:"2rem"}} >No recipe</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFRMcy9KvXIaWpt7mLcZgvZhMRm7EFoaCyA&s" alt="error" />
        </div>
    }

  return (
    <>

    
      
      
      
    <div className={styles.recipeContainer}>
    <img src={requiredItem.image} alt="" className={styles.image} />
        <ul className={styles.recipeDetails}>
           
            <li>Name: {requiredItem.name}</li>
            <li>Calories Per Serving: {requiredItem.caloriesPerServing}</li>
            <li>Cuisine: {requiredItem.cuisine}</li>
            <li>Difficulty: {requiredItem.difficulty}</li>
            <li>Prep Time: {requiredItem.prepTimeMinutes}</li>
            <li>Rating: {requiredItem.rating}</li>
            <li>Servings: {requiredItem.servings}</li>

        </ul>
    </div>
    <div  className={styles.section}>
        <h1>Ingredients</h1>
        {requiredItem.ingredients.map(item=>(
            <p>{item}</p>
        ))}</div>
        <div  className={styles.section}>
        <h1>Instructions</h1>
        {requiredItem.instructions.map(item=>(
            <p>{item}</p>
        ))}</div>

       
    </>
  )
}

export default Recipe