"use strict";
class Cart {
    addToCart(tr) {
        var _a;
        if (tr.classList.contains("add-btn")) {
            const childs = tr.parentElement.children;
            let imgSource = "";
            let header = "";
            let price = "";
            for (const key in childs) {
                switch (key) {
                    case "0":
                        const img = childs[key];
                        imgSource = img.src;
                        break;
                    case "1":
                        const h = childs[key];
                        header = h.textContent;
                        break;
                    case "3":
                        const p = childs[key];
                        price = p.textContent;
                        break;
                    default:
                        "";
                        break;
                }
            }
            const newRow = `
                <td class="w-2/12 flex justify-center items-center border border-white p-3">
                <img src=${imgSource} alt="cat-food"></td>
                <td class="w-5/12 flex items-center text-3xl border border-white text-left pl-2">${header}</td>
                <td class="w-2/12 flex justify-center items-center text-2xl text-gold border border-white">${price.substring(7)}</td>
                <td class="w-2/12 flex justify-center items-center text-blue-600 border border-white">
                <button class="remove">REMOVE</button>
                </td>
            `;
            const tbr = document.createElement("tr");
            tbr.className = "w-full h-32 flex flex-row";
            tbr.innerHTML = newRow;
            (_a = document.querySelector("#tbody")) === null || _a === void 0 ? void 0 : _a.appendChild(tbr);
        }
    }
}
