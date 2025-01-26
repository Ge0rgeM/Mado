class Checkboxes {
    constructor(name){
        this.name = name;
    }
    displayCheckbox(){
        return `
            <label>
                    <input type="checkbox" name="menuCategory" value="${this.name}">
                    <span data-translate="${this.name}">${this.name}</span>
            </label>
        `;
    }
}

class Dish {
    constructor(id, name, price, quantity, weight, description, tag, photo, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.weight = weight;
        this.description = description;
        this.tag = tag;
        this.photo = photo;
        this.category = category;
    }
    displayDish() {
        return `  
            <div class="Dish" style="background-image: url(${this.photo})">
                <div class="imgDescription" style = "opacity: 0">    
                    <p>${this.description}</p>
                    <p>Price: $${this.price}</p>
                    <p>Amount: ${this.quantity}</p>
                    <p>tags: ${this.tag}</p>
                    <p>Weight: ${this.weight}g</p>
                </div>    
                <div class="menuFooter">${this.name}</div>
            </div>
        `;
    }
}

let menuDiv = document.getElementById('menuDishes');
let checkboxesDiv = document.getElementsByClassName('checkboxWrapper')[0];

async function loadMenu() {
    try {
        const response = await fetch(`../JS/Menu/menu.json`);
        if (!response.ok) throw new Error("Failed to load menu file.");
        return await response.json();
    } catch (error) {
        console.error("Error loading menu:", error);
        throw error;
    }
}
let menusJS, checkboxesJS;

async function applyMenu() {
    try {
        const menuJson = await loadMenu();
        let menus = {};
        let checkboxes = [];
        for (let menuCategory in menuJson) {
            for (let menu of menuJson[menuCategory]) {
                const dish = new Dish(menu.id,
                    menu.name,
                    menu.price,
                    menu.quantity,
                    menu.weight,
                    menu.description,
                    menu.tag,
                    menu.photo,
                    menuCategory);
                menus[menuCategory] = menus[menuCategory] || [];
                menus[menuCategory].push(dish);
                menuDiv.innerHTML += dish.displayDish();
            }
            const checkbox = new Checkboxes(menuCategory);
            checkboxes.push(checkbox);
            checkboxesDiv.innerHTML += checkbox.displayCheckbox();
        }
        menusJS = menus;
        checkboxesJS = checkboxes;
    } catch (error) {
        console.error("Error applying menu:", error);
        throw error;
    }
}

applyMenu();

function filterMenuByCategory() {
    const checkedCategories = [];
    const checkboxes = document.querySelectorAll('input[name="menuCategory"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        checkedCategories.push(checkboxes[i].value);
        console.log(checkboxes[i].value);
    }
    menuDiv.innerHTML = '';
    if(checkedCategories.length != 0) {
        checkedCategories.forEach(category => {
            if (menusJS[category]) {
                menusJS[category].forEach(dish => {
                    menuDiv.innerHTML += dish.displayDish();
                });
            }
        });
        console.log(menusJS);
    }else{
        for(let category in menusJS){
            for(let dish of menusJS[category]){
                menuDiv.innerHTML += dish.displayDish();
            }
        }
    }
}

checkboxesDiv.addEventListener('change', filterMenuByCategory);


document.addEventListener('DOMContentLoaded', () => {
    menuDiv.addEventListener('mouseover', (event) => {
        if (event.target.closest('.Dish')) {
            const dish = event.target.closest('.Dish');
            const imgDescription = dish.querySelector('.imgDescription');
            imgDescription.style.opacity = '1';
        }
    });
    menuDiv.addEventListener('mouseout', (event) => {
        if (event.target.closest('.Dish')) {
            const dish = event.target.closest('.Dish');
            const imgDescription = dish.querySelector('.imgDescription');
            imgDescription.style.opacity = '0';
        }
    });
});