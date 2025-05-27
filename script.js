// Пример скинов (30 штук)
const products = [
    // --- Игровые персонажи ---
    { id: 1, name: "Super Mario", price: 599.00, category: "game", image: "1 (2).jpg", description: "Классический персонаж Nintendo" },
    { id: 2, name: "Reaper", price: 974.00, category: "game", image: "1.jpg", description: "Легендарный скин из Overwatch" },
    { id: 3, name: "Ninja", price: 674.00, category: "game", image: "2.jpg", description: "Популярный стример и игрок" },
    { id: 4, name: "Cuddle Team Leader", price: 674.00, category: "game", image: "3.jpg", description: "Редкий и желанный скин" },
    { id: 5, name: "Shadow Ops", price: 974.00, category: "game", image: "4.jpg", description: "Стильный военный оперативник" },
    { id: 6, name: "Renegade Raider", price: 599.00, category: "game", image: "5.jpg", description: "Милый медвежонок с характером" },
    { id: 7, name: "Brite Bomber", price: 599.00, category: "game", image: "6.jpg", description: "Пряник" },
    { id: 8, name: "Coral Knight", price: 674.00, category: "game", image: "7.jpg", description: "Рыцарь коралловых рифов" },

    // --- Marvel ---
    { id: 9, name: "Iron Man MK85", price: 749.00, category: "marvel", image: "8.jpg", description: "Последняя броня Тони Старка" },
    { id: 10, name: "Black Panther", price: 674.00, category: "marvel", image: "9.jpg", description: "Король Ваканды" },
    { id: 11, name: "Spider-Man", price: 749.00, category: "marvel", image: "10.jpg", description: "Человек-паук" },
    { id: 12, name: "Deadpool", price: 899.00, category: "marvel", image: "11.jpg", description: "Болтливый наемник" },
    { id: 13, name: "Captain America", price: 674.00, category: "marvel", image: "12.jpg", description: "Первый мститель" },
    { id: 14, name: "Thor", price: 899.00, category: "marvel", image: "13.jpg", description: "Бог грома" },
    { id: 15, name: "Hulk", price: 749.00, category: "marvel", image: "14.jpg", description: "Зеленый гигант" },
    { id: 16, name: "Star-Lord", price: 749.00, category: "marvel", image: "15.jpg", description: "Лидер Стражи Галактики" },
    { id: 17, name: "Wolverine", price: 749.00, category: "marvel", image: "16.jpg", description: "Росомаха" },
    { id: 18, name: "Gamora", price: 749.00, category: "marvel", image: "17.jpg", description: "Самая опасная женщина во вселенной" },

    // --- DC Comics ---
    { id: 19, name: "Batman", price: 899.00, category: "dc", image: "18.jpg", description: "Темный рыцарь" },
    { id: 20, name: "Harley Quinn", price: 749.00, category: "dc", image: "19.jpg", description: "Безумная и опасная" },
    { id: 21, name: "Wonder Woman", price: 899.00, category: "dc", image: "20.jpg", description: "Амазонка с Темискиры" },
    { id: 22, name: "The Flash", price: 749.00, category: "dc", image: "21.jpg", description: "Самый быстрый человек" },
    { id: 23, name: "Aquaman", price: 749.00, category: "dc", image: "22.jpg", description: "Повелитель морей" },

    // --- Аниме ---
    { id: 24, name: "Manga Naruto", price: 749.00, category: "anime", image: "23.jpg", description: "Наруто Узумаки" },
];

let cart = [];

function renderProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;

    const filter = document.getElementById("category-filter")?.value || "all";

    container.innerHTML = "";
    const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="price">₽${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        container.appendChild(div);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    saveCart();
    
    // Создаем уведомление
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.textContent = `${product.name} добавлен в корзину`;
    document.body.appendChild(notification);
    
    // Анимация появления и исчезновения
    setTimeout(() => {
        notification.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem("cart");
    if (saved) {
        cart = JSON.parse(saved);
        updateCartTable();
    }
}

function updateCartTable() {
    const tbody = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total-price");
    if (!tbody || !totalSpan) return;

    tbody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>₽${item.price.toFixed(2)}</td>
            <td><button class="remove-from-cart" onclick="removeFromCart(${index})">Удалить</button></td>
        `;
        tbody.appendChild(tr);
    });

    totalSpan.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartTable();
}

function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    alert("Оплата прошла успешно! Спасибо за покупку.");
    cart = [];
    saveCart();
    updateCartTable();
}

document.addEventListener("DOMContentLoaded", () => {
    // Инициализация фильтра
    const filterSelect = document.getElementById("category-filter");
    if (filterSelect) {
        filterSelect.addEventListener("change", renderProducts);
    }

    // Инициализация корзины
    loadCart();
    renderProducts();
});

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    location.reload();
}