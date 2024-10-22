console.log("script running");
const shoppingList = document.querySelector("#shopping-cart");
let totalInCents = 0;

// Track quantities
const itemCounts = {
    apple: 0,
    banana: 0,
    mango: 0,
    peach: 0,
};

// Function to update shopping list display
const updateShoppingList = () => {
    shoppingList.innerHTML = '';
    for (const item in itemCounts) {
        if (itemCounts[item] > 0) {
       
          shoppingList.innerHTML += `<p>${item.charAt(0).toUpperCase() + item.slice(1)}: x${itemCounts[item]}</p>`;
        }
    }
};

// Apple
const appleButton = document.querySelector("#apple");
const addApple = () => {
    itemCounts.apple++;
    totalInCents += 75;
    updateShoppingList();
    updateTotal();
};
appleButton.addEventListener("click", addApple);

// Banana
const bananaButton = document.querySelector("#banana");
const addBanana = () => {
    itemCounts.banana++;
    totalInCents += 30;
    updateShoppingList();
    updateTotal();
};
bananaButton.addEventListener("click", addBanana);

// Mango
const mangoButton = document.querySelector("#mango");
const addMango = () => {
    itemCounts.mango++;
    totalInCents += 125;
    updateShoppingList();
    updateTotal();
};
mangoButton.addEventListener("click", addMango);

// Peach
const peachButton = document.querySelector("#peach");
const addPeach = () => {
    itemCounts.peach++;
    totalInCents += 125;
    updateShoppingList();
    updateTotal();
};
peachButton.addEventListener("click", addPeach);

// Total display
const total = document.querySelector("#total-span");
const updateTotal = () => {
    total.innerHTML = (totalInCents / 100).toFixed(2); 
};
