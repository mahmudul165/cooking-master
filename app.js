document.getElementById('search-button').addEventListener('click',function(){
   const inputMeal=document.getElementById('input-meal').value
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`
      fetch(url)
      .then(res  => res.json())
      .then(data => {
         const mealArray =data.meals 
         const flexBox=document.getElementById('flex-box')          
         mealArray.forEach(element => { 
          const ContainerDiv   =document.createElement('div')              
         const containerElement=
            `<div class="card-deck m-lg-3">     
                   <div class="card m-lg-3m  p-lg-3">
                      <img id="meal-image" class="card-img-top" src=${element.strMealThumb}>
                   <div class="card-footer">
                      <span  id="meal-name" class="text-center">${element.strMeal} </span>
                      <small id="meal-id" class="text-center">${element.idMeal}</small>
                   </div>
            </div>    `
            ContainerDiv.innerHTML=containerElement            
             flexBox.appendChild(ContainerDiv);      
            

            })   
         }) 
   })  

    // ingredien element for cooking              
             
    document.getElementById('flex-box').addEventListener('click',function(){       
      const foodName= document.getElementById('meal-id').innerText
      console.log(foodName);
      const foodId =parseInt(foodName)
      const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${(foodId)}`
      console.log(url);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${(foodId)}`)
      .then(res  => res.json())
      .then(data => {
         const mealElement =data.meals         
        
         mealElement.forEach(name => {   
           // const ingredentDiv   =document.createElement('div') 
           const divIngredian=document.getElementById('product')

         const containerElement=
            `<div class="card-deck m-lg-3">     
                   <div class="card m-lg-3m  p-lg-3">
                      <img id="meal-image" class="card-img-top" src=${name.strMealThumb}>
                   <div class="card-footer">
                   <h2>${name.strMeal}</h2>
                   <ul>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient1}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient2}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient3}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient4}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient5}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient6}</small> </li><br>
               <li> <small  id="meal-name" class="text-center">${name.strIngredient7}</small> </li><br>
                </ul>
                   </div>
            </div>    `
           // ingredentDiv.innerHTML=containerElement;                 
           //divIngredian.appendChild(ingredentDiv) ; 
           divIngredian.innerHTML =containerElement;

                    
         });              
      
      })

   })
