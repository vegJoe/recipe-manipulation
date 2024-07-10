//DEL1

//1
//*********************************************************************/
const recipeName = document.querySelector("#recipe-name");

console.log(recipeName.textContent);
//*********************************************************************/


//2
//*********************************************************************/
console.log(recipeName.nodeName);
//*********************************************************************/


//3
//*********************************************************************/
const description = document.querySelector(".description");

const style = window.getComputedStyle(description, null).getPropertyValue("font-size");

console.log(style);
//*********************************************************************/


//4
//*********************************************************************/
const imageAtt = document.querySelector(".image-container");

console.log(imageAtt.children[0].getAttribute("alt"));
//*********************************************************************/


//5
//*********************************************************************/
const htmlImage = {
    url: String,
    height: Number,
    width: Number
};

const imageInfo = document.querySelector(".image-container");

const imageChild = imageInfo.children[0];

//htmlImage.url = imageInfo.children[0].getAttribute("src");
htmlImage.url = imageChild.currentSrc;
htmlImage.height = imageChild.naturalHeight;
htmlImage.width = imageChild.naturalWidth;

console.log(htmlImage);
//*********************************************************************/

//6
//*********************************************************************/
const ingredients = document.querySelector(".ingredients-list-paste");

console.log(ingredients.childElementCount)
//*********************************************************************/

//7
//*********************************************************************/
console.log(ingredients.children[3].textContent);
//*********************************************************************/

//8
//*********************************************************************/
const insturctionsList = document.querySelector(".instructions-list");

const instructionsChildren = insturctionsList.children;

const instructions = [];

for(let i = 0; i < instructionsChildren.length; i++) {
    instructions.push(instructionsChildren[i].textContent)
}
//*********************************************************************/


//DEL2

//1
//*********************************************************************/
document.querySelector(".logo-text").style.color = "#384241"
//*********************************************************************/

//2
//*********************************************************************/
document.querySelector("header").style.justifyContent = "left";
//*********************************************************************/

//3
//*********************************************************************/
document.querySelector("header").style.borderBottom = "1px solid lightgray";
//*********************************************************************/

//4
//*********************************************************************/
document.getElementById("recipe-name").textContent = "Frozen Cheesecake";
//*********************************************************************/

//5
//*********************************************************************/
const timeContainer = document.querySelector(".time-container");
timeContainer.children[0].classList.add("material-icons");
//*********************************************************************/

//6
//*********************************************************************/
timeContainer.children[1].textContent = "60+ min";
//*********************************************************************/

//7
//*********************************************************************/
document.querySelector(".image-container").children[0]
    .setAttribute("src", "assets/frozen-cheesecake-slice.jpg")
//*********************************************************************/

//8
//*********************************************************************/
document.querySelector(".ingredients-container").style.backgroundColor = "#f9f9f9"
//*********************************************************************/

//9
//*********************************************************************/
const ingredientsBottom = document.querySelector(".ingredients-list-bottom");
ingredientsBottom.children[0].remove();

ingredientsBottom.innerHTML = `<li>15st digistivetex</li> <li>Lite smör</li>`;
//*********************************************************************/

//10
//*********************************************************************/
const ingredientsPaste = document.querySelector(".ingredients-list-paste");

ingredientsPaste.children[2].textContent = "3tsk vaniljsocker";
//*********************************************************************/

//11
//*********************************************************************/
const liIngredient = document.createElement("li");
liIngredient.textContent = "400g naturell philadelphiaost";
ingredientsPaste.appendChild(liIngredient);
//*********************************************************************/

//12
//*********************************************************************/
const instructionsShadow = document.querySelector(".instructions.shadow");
instructionsShadow.style.boxShadow = "none";
//instructionsShadow.classList.remove(".how-to-do", ".instructions.shadow");
//*********************************************************************/

//13
//*********************************************************************/
document.querySelector(".instructions-list").children[1].textContent = 
    `Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.`

document.querySelector(".instructions-list").children[8].textContent = `Ställ in i frysen över natten.`;
//*********************************************************************/