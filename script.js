// Пример скинов (30 штук)
const products = [
    // --- Игровые персонажи ---
    { id: 1, name: "Super Mario", price: 599.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_SuperMario_Avatar_Purchase " },
    { id: 2, name: "Reaper", price: 974.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Reaper_Avatar_Purchase " },
    { id: 3, name: "Ninja", price: 674.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Ninja_Avatar_Purchase " },
    { id: 4, name: "Cuddle Team Leader", price: 674.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_CuddleTeamLeader_Avatar_Purchase " },
    { id: 5, name: "Shadow Ops", price: 974.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_ShadowOps_Avatar_Purchase " },
    { id: 6, name: "Renegade Raider", price: 599.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_RenegadeRaider_Avatar_Purchase " },
    { id: 7, name: "Brite Bomber", price: 599.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_BriteBomber_Avatar_Purchase " },
    { id: 8, name: "Rogue Trooper", price: 749.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_RogueTrooper_Avatar_Purchase " },
    { id: 9, name: "Midnight Marauder", price: 899.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_MidnightMarauder_Avatar_Purchase " },
    { id: 10, name: "Coral Knight", price: 674.00, category: "game", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_CoralKnight_Avatar_Purchase " },

    // --- Marvel ---
    { id: 11, name: "Iron Man MK85", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_IronManMK85_Avatar_Purchase " },
    { id: 12, name: "Black Panther", price: 674.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_BlackPanther_Avatar_Purchase " },
    { id: 13, name: "Spider-Man", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_SpiderMan_Avatar_Purchase " },
    { id: 14, name: "Deadpool", price: 899.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Deadpool_Avatar_Purchase " },
    { id: 15, name: "Captain America", price: 674.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_CaptainAmerica_Avatar_Purchase " },
    { id: 16, name: "Thor", price: 899.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Thor_Avatar_Purchase " },
    { id: 17, name: "Hulk", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Hulk_Avatar_Purchase " },
    { id: 18, name: "Star-Lord", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_StarLord_Avatar_Purchase " },
    { id: 19, name: "Wolverine", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Wolverine_Avatar_Purchase " },
    { id: 20, name: "Gamora", price: 749.00, category: "marvel", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Gamora_Avatar_Purchase " },

    // --- DC Comics ---
    { id: 21, name: "Batman", price: 899.00, category: "dc", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Batman_Avatar_Purchase " },
    { id: 22, name: "Harley Quinn", price: 749.00, category: "dc", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_HarleyQuinn_Avatar_Purchase " },
    { id: 23, name: "Wonder Woman", price: 899.00, category: "dc", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_WonderWoman_Avatar_Purchase " },
    { id: 24, name: "The Flash", price: 749.00, category: "dc", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_TheFlash_Avatar_Purchase " },
    { id: 25, name: "Aquaman", price: 749.00, category: "dc", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Aquaman_Avatar_Purchase " },

    // --- Аниме ---
    { id: 26, name: "Manga Naruto", price: 749.00, category: "anime", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_MangaNaruto_Avatar_Purchase " },
    { id: 27, name: "Luffy", price: 674.00, category: "anime", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Luffy_Avatar_Purchase " },
    { id: 28, name: "Vegeta", price: 749.00, category: "anime", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_Vegeta_Avatar_Purchase " },
    { id: 29, name: "Jin Sakai", price: 899.00, category: "anime", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_JinSakai_Avatar_Purchase " },
    { id: 30, name: "Minecraft Hero", price: 674.00, category: "anime", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Fortnite_BattleRoyale_MinecraftHero_Avatar_Purchase " }
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
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₽${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        container.appendChild(div);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveCart();
    alert(`${product.name} добавлен в корзину`);
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
            <td><button onclick="removeFromCart(${index})">Удалить</button></td>
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
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // --- Авторизация ---
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            if (password.length >= 4) {
                localStorage.setItem("user", username);
                alert(`Вы вошли как ${username}`);
                window.location.href = "index.html";
            } else {
                alert("Неверный пароль");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("reg-username").value;
            const email = document.getElementById("reg-email").value;
            const password = document.getElementById("reg-password").value;

            if (password.length >= 4) {
                localStorage.setItem("user", username);
                localStorage.setItem("email", email);
                alert(`Вы зарегистрировались как ${username}`);
                window.location.href = "index.html";
            } else {
                alert("Пароль слишком короткий");
            }
        });
    }

    // --- Профиль ---
    const user = localStorage.getItem("user");
    const links = document.querySelectorAll("#auth-links, #auth-links-catalog");

    links.forEach(linkContainer => {
        if (user) {
            linkContainer.innerHTML = `<a href="profile.html">Профиль</a> | <a href="#" onclick="logout()">Выход</a>`;
        }
    });

    const userNameEl = document.getElementById("user-name");
    const userEmailEl = document.getElementById("user-email");
    const logoutBtn = document.getElementById("logout-btn");

    if (userNameEl) {
        if (user) {
            userNameEl.textContent = `Имя: ${user}`;
            logoutBtn.style.display = "inline-block";
        } else {
            userNameEl.textContent = "Вы не авторизованы.";
        }
    }

    if (userEmailEl && localStorage.getItem("email")) {
        userEmailEl.textContent = `Email: ${localStorage.getItem("email")}`;
    }

    // --- Инициализация ---
    renderProducts();
    loadCart();

    const filterSelect = document.getElementById("category-filter");
    if (filterSelect) {
        filterSelect.addEventListener("change", renderProducts);
    }
});

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    location.reload();
}