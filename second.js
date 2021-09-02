
async function fetchData(strDrink) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
    try {
        let response = await axios.get(url)
        let data = response.data.drinks[0];
        console.log(data);
        showCocktail(data);
    } catch (error) {
        console.error(error)
    }
}

function showCocktail(data) {

    let cocktailInfo = `
    <img id="drinks" src="${data.strDrinkThumb}" alt="drinks" style="width: 400px; height: auto;">
    <h2 id="cocktail-name"> Name : ${data.strDrink}</h3>
    <h3 id="cocktail-name"> Category : ${data.strCategory}</h3>
    <h3 id="cocktail-name"> Ingredient 1 : ${data.strMeasure1} ${data.strIngredient1}</h3>
    <h3 id="cocktail-name"> Ingredient 2 : ${data.strMeasure2} ${data.strIngredient2}</h3>
    <h3 id="cocktail-name"> Ingredient 3 : ${data.strMeasure3} ${data.strIngredient3}</h3>
    <h3 id="cocktail-name"> Ingredient 4 : ${data.strMeasure4} ${data.strIngredient4}</h3>
    <h3 id="cocktail-name"> Ingredient 5 : ${data.strMeasure5} ${data.strIngredient5}</h3>
    <h3 id="cocktail-name"> Instructions : ${data.strInstructions}</h3>
    <h3 id="cocktail-name"> Type of Glass : ${data.strGlass}</h3>
    `
    document.querySelector('#cocktail-data').innerHTML = cocktailInfo;
}
const submit = document.querySelector('#cocktail-form');
submit.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = document.querySelector('#cocktail-search').value;
    fetchData(inputValue);
})