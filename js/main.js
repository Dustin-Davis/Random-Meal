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
  console.log(ingredients);

  mealContainer.innerHTML = `

  <p class="font-color-top center">
    <strong>Category: </strong>
      ${meal.strCategory}
    <strong> | </strong>
    <strong>Origin: </strong>
      ${meal.strArea}
    <strong> | </strong>
    <strong>Tags: </strong>
      ${meal.strTags.split(',').join(' , ')}
  </p>

  <div>
    <div class = "column five img-div">
      <img src="${meal.strMealThumb}" alt="Meal Img" class="meal-img">
    </div>
  </div>

  <div class="row">
    <div class="column-quarter">
      <h3 class="font-color">Ingredients: </h3>
        <ol class="font-color">
          ${ingredients.map(ingredient => `
          <li>${ingredient}</li>`).join('')}
        </ol>
    </div>

    <div class="font-color column-half">
      <h3>Instructions: </h3>
        <h3>${meal.strMeal}</h3>
        <p class="p-width">${meal.strInstructions}</p>
    </div>

  </div>
  `;
}
