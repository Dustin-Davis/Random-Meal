const getMealBtn = document.getElementById('get_meal');


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
}
