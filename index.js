const categories = [
    {
        label: "seafood",
        img: "./images/Link.jpg",
    },
    {
        label: "seafood",
        img: "./images/Link-1.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-2.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-3.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-4.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-5.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-6.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-7.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-8.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-9.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-10.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-11.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-12.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-13.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-14.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-15.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-16.jpg",
    }, {
        label: "seafood",
        img: "./images/Link-17.jpg",
    },
    {
        label: "seafood",
        img: "./images/Link-18.jpg",
    },
    {
        label: "seafood",
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