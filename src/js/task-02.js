const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

let itemArr = [];

ingredients.forEach(ingredient => {
  const createItems = document.createElement('li');
  createItems.textContent = ingredient;
  createItems.classList = 'item';
  itemArr.push(createItems)
})

ingredientsList.append(...itemArr);
console.log(ingredientsList)