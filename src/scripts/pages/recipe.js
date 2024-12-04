// Open Source Recipe API from TheMealDB, found at themealdb.com
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const countries = ['American', 'British']; // Filter by American and British cuisines

async function fetchFoodsByCountry() {
  const container = document.querySelector('.recipe-container'); // Use querySelector for a single element
  if (!container) {
    console.error('No element with class "recipe-container" found.');
    return;
  }

  container.innerHTML = 'Loading...';

  try {
    const countryPromises = countries.map(country =>
      fetch(`${baseUrl}${country}`)
        .then(response => response.json())
        .then(data => data.meals || []) // Return meals or empty array if no results
    );

    const results = await Promise.all(countryPromises);
    const meals = results.flat(); // Combine all meal arrays

    if (meals.length === 0) {
      container.innerHTML = 'No meals found for the selected countries.';
      return;
    }

    displayMeals(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
    container.innerHTML = 'Failed to load meals.';
  }
}

function displayMeals(meals) {
  const container = document.querySelector('.recipe-container'); // Ensure single element
  if (!container) {
    console.error('No element with class "recipe-container" found.');
    return;
  }

  container.innerHTML = ''; // Clear previous content

  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');

    mealDiv.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p><a href="https://www.themealdb.com/meal.php?c=${meal.idMeal}" target="_blank">View Recipe</a></p>
    `;

    container.appendChild(mealDiv);
  });
}

// Fetch meals on page load
fetchFoodsByCountry();
