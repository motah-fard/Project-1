//selecting elements


// const nonAlcoholic = document.querySelector("#nonAlcoholic");
// const imageContainer = document.querySelector("#image-container");
// create my event handlers

//reference
// https://git.generalassemb.ly/sei-den-osos/masonry/blob/main/index.js
let arrayimages = [];
const sections = document.querySelectorAll('article');
const addPicturesToDocument = (image, i) => {
    console.log("loging image parameter",image);
    
    // image.forEach((img, i) => {
    const imageEl = document.createElement('img');
    const nameEl = document.createElement('a');
    imageEl.src = image.strDrinkThumb;
    if ( i % 7 === 0) {
        imageEl.classList.add('long');
        const images = document.querySelector('#grid');
        //const imageContainer = document.createElement('div');
        
        nameEl.innerText = image.strDrink;
        nameEl.classList.add('long');
    } else if ( i % 3 === 0) {
        imageEl.classList.add('medium');
        const images = document.querySelector('#grid');
        
        nameEl.innerText = image.strDrink;
        nameEl.classList.add('medium');
        // const nameEl = document.createElement('p');
        // nameEl.innerText = image.strDrink;
        // images.appendChild(nameEl);
        
        // images.appendChild(imageEl);
// const nameEl = document.createElement('p');
// nameEl.innerText = image.strDrink;
// images.appendChild(nameEl);
    } else if ( i % 11 === 0) {
        imageEl.classList.add('small');
        const images = document.querySelector('#grid');
        
        nameEl.innerText = image.strDrink;
        nameEl.classList.add('small');
        // const imageInfoDiv = 
        // images.appendChild(imageEl);
// const nameEl = document.createElement('p');
// nameEl.innerText = image.strDrink;
// images.appendChild(nameEl);
    }
    nameEl.innerText = image.strDrink;
    sections[i % sections.length].append(imageEl, nameEl);
    // });
    
    
    // arrayimages.push(imageEl.src);
    // console.log(arrayimages);
    // for (let index = 0; index < array.length; index++) {
        // const element = array[index];
        // if (arrayimages.indexOf(imageEl.src)%10 == 0) {
            // arrayimages.forEach((element) => {
                
            // })

        // }
    // }


}

const getThePics = () => {
    clearItems();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image, i) => {
                addPicturesToDocument(image, i);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}





const alcoholic = document.querySelector("#alcoholic");
alcoholic.addEventListener("click", getThePics);


const getThePicsA = () => {
    clearItems();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image, i) => {
                addPicturesToDocument(image, i);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}
const nonalcoholic = document.querySelector("#nonAlcoholic");
nonalcoholic.addEventListener("click", getThePicsA);




const getThePicsB = () => {
    clearItems();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_Alcohol"; 
    axios.get(url)
        .then((response) => {
            console.log(response);
            response.data.drinks.forEach((image, i) => {
                addPicturesToDocument(image, i);
            })
        })
        .catch((error) => {
            console.error(error);
        })


}
const optionalcoholic = document.querySelector("#optionAlcoholic");
optionalcoholic.addEventListener("click", getThePicsB);






async function fetchData(strDrink) {
    clearItems();
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

function clearItems(){
    //select all of the article tags
    const articles = document.getElementsByTagName("article");
    const divs = document.getElementsByTagName("div");
    const paragraphs = document.getElementsByTagName("p");
    for (div of divs) {
        div.innerHTML="";
    }
    for (article of articles) {
        article.innerHTML="";
    }
    for (p of paragraphs) {
        p.innerHTML="";
    }
    // clean1.forEach(b) => {
    //     b.innerHTML = "";
    // }
    // clean2.forEach(b) => {
    //     b.innerHTML = "";
    // }
    
    //select coctail data divs
    // for each of the article tags make the inner html empty
    // make the cocktail data inner html empty

}


function homePage(){
    clearItems();
}
const home = document.querySelector("active");
home.addEventListener("click", homePage);