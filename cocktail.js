//selecting elements


// const nonAlcoholic = document.querySelector("#nonAlcoholic");
// const imageContainer = document.querySelector("#image-container");
// create my event handlers
let arrayimages = [];
const addPicturesToDocument = (image) => {
    // console.log("loging image parameter",image);
    const imageEl = document.createElement('img');
    imageEl.src = image.strDrinkThumb;
    arrayimages.push(imageEl.src);
    console.log(arrayimages);
    // for (let index = 0; index < array.length; index++) {
        // const element = array[index];
        // if (arrayimages.indexOf(imageEl.src)%10 == 0) {
            const images = document.querySelector('.grid');
            images.appendChild(imageEl);
            const nameEl = document.createElement('p');
            nameEl.innerText = image.strDrink;
            images.appendChild(nameEl);
        // }
    // }


}

const getThePics = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image) => {
                addPicturesToDocument(image);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}





const alcoholic = document.querySelector("#alcoholic");
alcoholic.addEventListener("click", getThePics);


const getThePicsA = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image) => {
                addPicturesToDocument(image);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}
const nonalcoholic = document.querySelector("#nonAlcoholic");
nonalcoholic.addEventListener("click", getThePicsA);





// first I will try to fetch one image from alcoholic one to a container 
// const fetchAndAttachImages = async (event) => {
//     try {
//         const alcoholType = event.target.value;
//         const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
//         const response = await axios.get (url);
//     } catch (error) {
//         console.error(error);
//     }
// }
const getThePicsB = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_Alcohol"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image) => {
                addPicturesToDocument(image);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}
const optionalcoholic = document.querySelector("#optionAlcoholic");
optionalcoholic.addEventListener("click", getThePicsB);





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

