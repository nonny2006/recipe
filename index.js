const categories = [
    {
        label: "seafood",
        img: "./images/Link.jpg",
    },
    {
        label: "soup",
        img: "./images/Link-1.jpg",
    }, {
        label: "pancakes",
        img: "./images/Link-2.jpg",
    }, {
        label: "meat",
        img: "./images/Link-3.jpg",
    }, {
        label: "chicken",
        img: "./images/Link-4.jpg",
    }, {
        label: "less than 30 min",
        img: "./images/Link-5.jpg",
    }, {
        label: "pasta",
        img: "./images/Link-6.jpg",
    }, {
        label: "pizza",
        img: "./images/Link-7.jpg",
    }, {
        label: "cake",
        img: "./images/Link-8.jpg",
    }, {
        label: "pastries",
        img: "./images/Link-9.jpg",
    }, {
        label: "burger",
        img: "./images/Link-10.jpg",
    }, {
        label: "vegan",
        img: "./images/Link-11.jpg",
    }, {
        label: "desserts",
        img: "./images/Link-12.jpg",
    }, {
        label: "smoothies",
        img: "./images/Link-13.jpg",
    }, {
        label: "breakfast",
        img: "./images/Link-14.jpg",
    }, {
        label: "salad",
        img: "./images/Link-15.jpg",
    }, {
        label: "sandwiches",
        img: "./images/Link-16.jpg",
    }, {
        label: "waffles",
        img: "./images/Link-17.jpg",
    },
    {
        label: "ramen",
        img: "./images/Link-18.jpg",
    },
    {
        label: "dips",
        img: "./images/Link-19.jpg",
    },
]

function displayCategories(){
    const container = document.querySelector("#category__container");

    for (let i = 0; i < categories.length; i++){
        const element = categories[i];

        const category = document.createElement("div");
        category.classList.add("category");

        //img
        const categoryImg = document.createElement("img");
        categoryImg.src = element.img;

        //p
        const categoryP = document.createElement("p");
        categoryP.textContent = element.label;

        category.appendChild("categoryImg");
        category.appendChild("categoryP");

        container.appendChild(category);
    }
}

window.addEventListener("load", () => {
    displayCategories;
})