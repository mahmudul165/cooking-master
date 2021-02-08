document.getElementById('search-button').addEventListener('click',function(){
   const inputMeal=document.getElementById('input-meal').value
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`
      fetch(url)
      .then(res  => res.json())
      .then(data => {
         const mealArray =data.meals           
         mealArray.forEach(element => {                
         const containerElement=
            `<div class="card-deck m-lg-3">     
                   <div class="card m-lg-3m  p-lg-3">
                      <img id="meal-image" class="card-img-top" src=${element.strMealThumb}>
                   <div class="card-footer">
                      <small  id="meal-name" class="text-center">${element.strMeal}<br><span id="meal-id" class="text-center">${element.idMeal}</span></small>
                   </div>
            </div>    `
            document.getElementById('flex-box').innerHTML=containerElement;   
            document.getElementById('flex-box').addEventListener('click',function(){       
               const foodName= document.getElementById('meal-id').innerText
               const foodId =parseInt(foodName)
               const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${(foodId)}`
               //console.log(url);
               fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${(foodId)}`)
               .then(res  => res.json())
               .then(data => {
                  const mealElement =data.meals 
                 // console.log(mealElement);        
                  mealElement.forEach(name => {   
                     console.log(name);

                  const containerElement=
                     `<div class="card-deck m-lg-3">     
                            <div class="card m-lg-3m  p-lg-3">
                               <img id="meal-image" class="card-img-top" src=${name.strMealThumb}>
                            <div class="card-footer">
                            <h2>Ingredian name</h2>
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
                     document.getElementById('product').innerHTML=containerElement;                 
                                    
                  });              
               
               })

            })

            })   
         }) 
   })

   
   