// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.


let recipesBlock=document.createElement('div');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(response=>{
        let recipes=response.recipes;

        for (const recipe of recipes) {
            let divRecipeContainer=document.createElement('div');
            let divRecipeDescription=document.createElement('div');
            let divRecipeCookingAdvice=document.createElement('div');

            divRecipeDescription.innerText=`${recipe.id}. Name: ${recipe.name} `
            divRecipeCookingAdvice.innerText=`Prepering Time: ${recipe.prepTimeMinutes}min. Cooking time: ${recipe.cookTimeMinutes}min. Servings: ${recipe.servings}. Difficulty: ${recipe.difficulty}. Cuisine: ${recipe.cuisine}. Calories per serving: ${recipe.caloriesPerServing} kcal.`;

            let ingredientsUl=document.createElement('ul');
            ingredientsUl.innerText='Ingredients:';
            let ingredients=recipe.ingredients;
            for (const ingredient of ingredients) {
                let li=document.createElement('li');
                li.innerText=ingredient;
                ingredientsUl.appendChild(li);
            }
            let instructionsOl =document.createElement('ol');
            instructionsOl.innerText='Instructions:';
            let instructions=recipe.instructions;
            for(const instruction of instructions){
                let li=document.createElement('li');
                li.innerText=instruction;
                instructionsOl.appendChild(li);
            }
            let tagsUl=document.createElement('ul');
            tagsUl.innerText='Tags:'
            let tags=recipe.tags;
            for(const tag of tags){
                let li=document.createElement('li');
                li.innerText=tag;
                tagsUl.appendChild(li);
            }
            let image=document.createElement('img');
            image.src=recipe.image;
            let divInfoAboutRecipe=document.createElement('div');
            divInfoAboutRecipe.innerText=`User Id: ${recipe.userId}. Rating: ${recipe.rating}. Number of reviews: ${recipe.reviewCount}.`;
            let mealTypeUl=document.createElement('ul');
            mealTypeUl.innerText='Meal types:'
            let mealTypes=recipe.mealType;
            for(mealType of mealTypes){
                let li=document.createElement('li');
                li.innerText=mealType;
                mealTypeUl.appendChild(li);
            }
            divRecipeContainer.append(divRecipeDescription, mealTypeUl,divRecipeCookingAdvice,divInfoAboutRecipe, ingredientsUl, instructionsOl, tagsUl, image);
            recipesBlock.appendChild(divRecipeContainer)
            divRecipeContainer.classList.add('block');
            document.body.appendChild(recipesBlock);

        }
    });
