import React, { useState } from 'react'
import styles from './search.module.css'
import Items from './Items'


function Search({foodData,setFoodData}) {
    const [query,setQuery] = useState("")
   useState(()=>{
    const fetchData = async ()=>{
        try{
          const result = await fetch('https://dummyjson.com/recipes')
      
          result.json().then(data=>{
        
            setFoodData(data.recipes)

          })
        }
        catch(err){
          console.log(err)
        }
    
      }
      fetchData();
   },[])


   const defaultData = foodData.filter(item=>item.tags.includes("Asian"))
   console.log("hello",defaultData);
   
   const filteredRecipe = foodData.filter(item=>query.toLowerCase()===item.name.toLowerCase()||item.tags.map(item=>item.toLowerCase()).includes(query.toLowerCase()))
   console.log(foodData)
   console.log(filteredRecipe)
      
  return (
    <>
        <div className={styles.searchContainer}><input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className={styles.input} placeholder='Search for pizza ,asian ,mexican .....' /></div>

        {filteredRecipe.length>0?
        
        <Items filteredRecipe = {filteredRecipe} foodData={foodData} />
        :
        <Items filteredRecipe = {defaultData} foodData={foodData} />
        }


       
        

    </>
  )
}

export default Search