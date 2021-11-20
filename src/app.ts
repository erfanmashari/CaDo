const carts = new Cart()

// variables
const home = document.querySelector("#home") as HTMLButtonElement;
const cats = document.querySelector("#cats") as HTMLButtonElement;
const dogs = document.querySelector("#dogs") as HTMLButtonElement;
const blog = document.querySelector("#blog") as HTMLButtonElement;
const contact = document.querySelector("#contactus") as HTMLButtonElement;
const about = document.querySelector("#aboutus") as HTMLButtonElement;
const shop = document.querySelector("#shop") as HTMLButtonElement;
const closeCart = document.querySelector("#close-cart") as HTMLButtonElement;
const removeAll = document.querySelector("#remove-all") as HTMLButtonElement;

// eventListeners
eventListeners()

function eventListeners() {
    home.addEventListener("click", (e: Event) => {
        location.pathname = "../public/index.html";
    });

    cats.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/cats.html";
    });

    dogs.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/dogs.html";
    });

    blog.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/blog.html";
    });

    contact.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/contactus.html";
    });

    about.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/aboutus.html";
    });

    shop.addEventListener("click", (e: Event) => {
        location.pathname = "../public/pages/shop.html";
    });

    // -------------------------

    if (location.pathname.includes("shop.html")) {
        // hide cart side
        closeCart.addEventListener("click", (e: Event) => {
            const parent = e.target as HTMLElement
            parent.parentElement?.parentElement?.parentElement?.classList.add("hidden")
        })

        removeAll.addEventListener("click", (e: Event) => {
            const parent = e.target as HTMLElement
            const children = parent.parentElement?.parentElement?.parentElement?.children[1].firstElementChild?.children as HTMLCollection

            for (const key in children) {
                const num: any = key
                // check chldren
                if (isNaN(num) === false) {
                    children[1].remove()

                    // create new tbody
                    const tbody = document.createElement("tbody")
                    tbody.id = "tbody"

                    // append tbody to table
                    document.querySelector("#ul")?.appendChild(tbody)
                }
            }

        })

        document.querySelector("#cart")?.addEventListener("click", () => {
            document.querySelector("#cart-side")?.classList.remove("hidden")
        });

        document.querySelector("#products")!.addEventListener("click", (e: Event) => {
            let tr = e.target as HTMLElement;

            carts.addToCart(tr);
        })

        document.querySelector("#tbody")?.addEventListener("click", (e: Event) => {
            const element = e.target as HTMLElement
            
            if (element.classList.contains("remove")) {
                element.parentElement?.parentElement?.remove()
            }
        })
    }
}