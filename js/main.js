const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0])
    });
});

function createMeal(meal) {
  const ingredients = [];
  for (i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    } else {
      break;
    }
  }

  mealContainer.innerHTML = `

  <p class="font-color-top center">
    <strong>Category: </strong>
    ${meal.strCategory}
    <strong> | </strong>
    <strong>Origin: </strong>
      ${meal.strArea}
  </p>
        <h3 class="font-color-top center">${meal.strMeal}</h3>

  <div>
    <div class = "img-div">
      <img src="${meal.strMealThumb}" alt="Meal Img" class="meal-img">
    </div>
  </div>

  <div class="row">
    <div class="font-color test col-sm-half">
      <h3>Ingredients: </h3>
        <ul>
          ${ingredients.map(ingredient => `
          <li>${ingredient}</li>`).join('')}
        </ul>
    </div>

    <div class="font-color col-sm-half">
      <h3>Instructions: </h3>
        <p class="p-width">${meal.strInstructions}</p>
    </div>

  </div>
  `;
}
