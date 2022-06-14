// console.log('asdk');

const getApi = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => allFoods(data))
}

getApi();

const allFoods = (allFoods) => {

  let foods = allFoods.meals;


  for (let food of foods) {
    let mealName = food.strMeal;
    let mealPhoto = food.strMealThumb;
    let div = document.createElement('div');
    div.innerHTML = `
        <div class="col">
                          <div class="card shadow border-0 h-100">
                            <img src="${food.strMealThumb}" class="card-img-top p-3" alt="...">
                            <div class="card-body">
                              <h5 class="card-title text-center text-primary fw-bold">${food.strMeal}</h5>
                              <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item"><span class="fw-bold">Region:</span> ${food.strArea}</li>
                                <li class="list-group-item"><span class="fw-bold">Category:</span> ${food.strCategory}</li>
                              </ul>
                              
                              <p class="card-text ingredients px-3  fst-italic"><span class="fw-bold">Ingredients:</span> ${food.strIngredient1}, ${food.strIngredient2}, ${food.strIngredient3}, ${food.strIngredient4}, ${food.strIngredient5}, ${food.strIngredient6}, ${food.strIngredient7}, ${food.strIngredient8}</p>
                              
                            <div class="p-3"><a href="#detailsSection"><button onclick="loadDescription('${food.idMeal}')" type="button" class="btn btn-warning px-4">Recipe Details<i class="fa-solid fa-arrow-right ms-3"></i></button></a></div>
                            </div>
                          </div>
                        </div>`;

    let foodContainer = document.getElementById('foodItems');
    foodContainer.appendChild(div);
  }

}
//go to description page
let loadDescription = (id) => {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById('detailsSection').innerHTML='';
    let food = data.meals[0];
    console.log(food);
    let div = document.createElement('div');
    let youtubeurlArr = food.strYoutube.split('=');
    let youtubeId = youtubeurlArr[1];
    console.log(youtubeId);

    div.innerHTML =`
    <h1 class="text-center bg-dark text-white mt-5">Details Here</h1>
    <div class="row mt-5 p-3 h-100">
          <div class="col-lg-4 col-md-6 col-sm-12">
              <img id="food-image" src="${food.strMealThumb}" class="img-fluid"
                  alt="">
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12 my-auto">
              <h1 id="meal-name" class="text-center">${food.strMeal}</h1>
              <hr>
              <h5 class="text-center">A ${food.strCategory} Dish</h5>
              <p class="text-center text-muted">${food.strTags}</p>
              <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-dark"><small><i class="fa-regular fa-bookmark me-2"></i> Save Recipe</small></button>
                  
              </div>

          </div>

      </div>
      </div>
      <div class="row p-3">
          <div class="col-lg-8 col-md-6 col-sm-12">

              
              <h2 class="bg-dark text-white text-center p-3 rounded"><i class="fa-solid fa-bowl-rice me-2"></i>How To Cook?</h2>
              <hr>
              <p>${food.strInstructions}</p>
              <hr>
              
              <h3 class="bg-dark text-white text-center p-3 rounded"><i class="fa-solid fa-kitchen-set me-2"></i>Ingredients</h3>
              <table class="table">
                  <thead>
                    <tr>
                      
                      <th scope="col">Ingredient</th>
                      <th scope="col">Measurement</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>${food.strIngredient1}</td>
                      <td>${food.strMeasure1}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient2}</td>
                      <td>${food.strMeasure2}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient3}</td>
                      <td>${food.strMeasure3}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient4}</td>
                      <td>${food.strMeasure4}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient5}</td>
                      <td>${food.strMeasure5}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient6}</td>
                      <td>${food.strMeasure6}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient7}</td>
                      <td>${food.strMeasure7}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient8}</td>
                      <td>${food.strMeasure8}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient9}</td>
                      <td>${food.strMeasure9}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient10}</td>
                      <td>${food.strMeasure10}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient11}</td>
                      <td>${food.strMeasure11}</td>
                      
                    </tr>
                    <tr>
                      
                      <td>${food.strIngredient12}</td>
                      <td>${food.strMeasure12}</td>
                      
                    </tr>
                   
                    
                  </tbody>
                </table>
              <hr>

          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
              
              
              <!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/YXUZHK2PrV8" frameborder="0" allowfullscreen></iframe> -->
              <!-- https://www.youtube.com/watch?v=YXUZHK2PrV8 -->
              <iframe width="100%" height="315px" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allowfullscreen></iframe> 
          </div>

      </div>
    `;
    document.getElementById('detailsSection').appendChild(div);
    console.log(food.strMeal);
  })
  

}

// search for food 

document.getElementById('serchfoodBtn').addEventListener('click', function () {

  let itemName = document.getElementById('search-item').value;
  console.log(itemName);
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`
  fetch(url)
    .then(res => res.json())
    .then(data => searchFood(data))
})

const searchFood = foodItem => {

  let foodContainer = document.getElementById('foodItems');
  foodContainer.innerHTML = '';

  let searchedFood = foodItem.meals;
  console.log(foodItem.meals);
  for (let food of searchedFood) {
    let div = document.createElement('div');
    div.innerHTML = `
        <div class="col">
                          <div class="card shadow border-0 h-100">
                            <img src="${food.strMealThumb}" class="card-img-top p-3" alt="...">
                            <div class="card-body">
                              <h5 class="card-title text-center text-primary fw-bold">${food.strMeal}</h5>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="fw-bold">Type:</span>  ${food.strTags}</li>
                                <li class="list-group-item"><span class="fw-bold">Region:</span> ${food.strArea}</li>
                                <li class="list-group-item"><span class="fw-bold">Category:</span> ${food.strCategory}</li>
                              </ul>
                              
                              <p class="card-text ingredients overflow-auto p-3 fst-italic"><span class="fw-bold">Ingredients:</span> ${food.strIngredient1}, ${food.strIngredient2}, ${food.strIngredient3}, ${food.strIngredient4}, ${food.strIngredient5}, ${food.strIngredient6}, ${food.strIngredient7}, ${food.strIngredient8}</p>
                              <div class="p-3">
                              <a href="#detailsSection"><button onclick="loadDescription('${food.idMeal}')" type="button" class="btn btn-warning px-4">Recipe Details<i class="fa-solid fa-arrow-right ms-3"></i></button></a>
                            </div>
                            </div>
                          </div>
                        </div>`;
    foodContainer.appendChild(div);
  }

}