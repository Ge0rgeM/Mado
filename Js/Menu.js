class Dish {
    constructor(id, name, price, quantity, weight, description, tag, photo) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.weight = weight;
        this.description = description;
        this.tag = tag;
        this.photo = photo;
    }
    displayDish() {
        return `
            <div class="Dish" style="background-image: url(${this.photo})">
                <div class="imgDescription" style = "opacity: 0">    
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <p>Price: $${this.price}</p>
                    <p>Amount: ${this.quantity}</p>
                    <p>tags: ${this.tag}</p>
                    <p>Weight: ${this.weight}g</p>
                </div>    
            </div>
        `;
    }
}



let menuDiv = document.getElementById('menuDishes');
async function loadMenu() {
    try {
      const response = await fetch(`../JS/Menu/menu.json`);
      if (!response.ok) throw new Error("Failed to load translation file.");
      return await response.json();
    } catch (error) {
      console.error("Error loading translations:", error);
      return null;
    }
}
async function applyMenu() {
    const menuJson = await loadMenu();
    if (!menuJson) return;
    console.log(menuJson);
    
    let menus = {};
    for(let menuCategory in menuJson){
        for(let menu of  menuJson[menuCategory]){
            // console.log(menu.tag)
            const dish = new Dish(menu.id, menu.name, menu.price, menu.quantity, menu.weight, menu.description, menu.tag, menu.photo);
            menus[menuCategory] = menus[menuCategory] || [];
            menus[menuCategory].push(dish);
            menuDiv.innerHTML += dish.displayDish();
        }
    }
    console.log(menus["მეგრული კერძები შეფისგან"])
}
applyMenu();

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