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
  <div class="row">
    <div class = "column five img-div">
      <img src="${meal.strMealThumb}" alt="Meal Img" class="meal-img">
    </div>
  </div>

  `;
}
