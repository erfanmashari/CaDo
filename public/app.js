"use strict";
const carts = new Cart();
// variables
const home = document.querySelector("#home");
const cats = document.querySelector("#cats");
const dogs = document.querySelector("#dogs");
const blog = document.querySelector("#blog");
const contact = document.querySelector("#contactus");
const about = document.querySelector("#aboutus");
const shop = document.querySelector("#shop");
const closeCart = document.querySelector("#close-cart");
const removeAll = document.querySelector("#remove-all");
// eventListeners
eventListeners();
function eventListeners() {
    var _a, _b;
    home.addEventListener("click", (e) => {
        location.pathname = "../public/index.html";
    });
    cats.addEventListener("click", (e) => {
        location.pathname = "../public/pages/cats.html";
    });
    dogs.addEventListener("click", (e) => {
        location.pathname = "../public/pages/dogs.html";
    });
    blog.addEventListener("click", (e) => {
        location.pathname = "../public/pages/blog.html";
    });
    contact.addEventListener("click", (e) => {
        location.pathname = "../public/pages/contactus.html";
    });
    about.addEventListener("click", (e) => {
        location.pathname = "../public/pages/aboutus.html";
    });
    shop.addEventListener("click", (e) => {
        location.pathname = "../public/pages/shop.html";
    });
    // -------------------------
    if (location.pathname.includes("shop.html")) {
        // hide cart side
        closeCart.addEventListener("click", (e) => {
            var _a, _b, _c;
            const parent = e.target;
            (_c = (_b = (_a = parent.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("hidden");
        });
        removeAll.addEventListener("click", (e) => {
            var _a, _b, _c, _d, _e;
            const parent = e.target;
            const children = (_d = (_c = (_b = (_a = parent.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.children[1].firstElementChild) === null || _d === void 0 ? void 0 : _d.children;
            for (const key in children) {
                const num = key;
                // check chldren
                if (isNaN(num) === false) {
                    children[1].remove();
                    // create new tbody
                    const tbody = document.createElement("tbody");
                    tbody.id = "tbody";
                    // append tbody to table
                    (_e = document.querySelector("#ul")) === null || _e === void 0 ? void 0 : _e.appendChild(tbody);
                }
            }
        });
        (_a = document.querySelector("#cart")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            (_a = document.querySelector("#cart-side")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        });
        document.querySelector("#products").addEventListener("click", (e) => {
            let tr = e.target;
            carts.addToCart(tr);
        });
        (_b = document.querySelector("#tbody")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
            var _a, _b;
            const element = e.target;
            if (element.classList.contains("remove")) {
                (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
            }
        });
    }
}
