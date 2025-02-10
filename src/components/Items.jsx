import React, { useState } from 'react'
import styles from './item.module.css'
import Recipe from './Recipe'
import { Link } from 'react-router-dom'

function Items({filteredRecipe,foodData}) {
    // console.log(filteredRecipe)
    // const [foodId,setFoodId] = useState(0)
    // const [clicked,setClicked] = useState(false)
    // const handleClick = (id) =>{
    //   setFoodId(id)
    //   setClicked(true)
    // }
  return (
<>
      {/* <div className={styles.allItems}>
      {filteredRecipe.map(item=>(
        <div className={styles.itemContainer}>
              <img src={item.image} className={styles.image} alt="image" />
            <div className={styles.itemContent}>  <p className={styles.itemName}>{item.name}</p></div>
            <div className={styles.buttonContainer} onClick={()=>handleClick(item.id)}>  <button className={styles.itemButton}>View Recipe</button></div>
        </div>
  
      ))}
  
  
      </div>
      {clicked&&<Recipe foodId={foodId} foodData={foodData}  />} */}
        <div className={styles.allItems}>
        {filteredRecipe.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <img src={item.image} className={styles.image} alt={item.name} />
            <div className={styles.itemContent}>
              <p className={styles.itemName}>{item.name}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link to={`/recipe/${item.id}`}>
                <button className={styles.itemButton}>View Recipe</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
</>
  )
}

export default Items