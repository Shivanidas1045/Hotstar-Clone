const movies = [
    {
        name: "Selfie",
        rating: 7.2,
        img: "https://i.postimg.cc/zBFKJym5/1.png",
        category:"Bollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Irada",
        rating: 5.2,
        img: "https://i.postimg.cc/9FrRk8fc/2.png",
        category:"Bollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "GasLight",
        rating: 4.2,
        img: "https://i.postimg.cc/9M0CfkKM/3.png",
        category:"Bollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Drishyam",
        rating: 9.2,
        img: "https://i.postimg.cc/rpmwdztM/5.png",
        category:"Bollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Trigger",
        rating: 5.2,
        category:"Tollywood",
        img: "https://i.postimg.cc/85fkH3HY/6.png",
        button: "Subscribe To Watch",
    },
    {
        name: "Sita Ramam",
        rating: 9.6,
        img: "https://i.postimg.cc/XqwjMCtc/7.png",
        category:"Tollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Secret Invasion",
        rating: 6.6,
        img: "https://i.postimg.cc/R0vcP6mk/i.png",
        category:"Hollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Kerela Crime Files",
        rating: 5.4,
        img: "https://i.postimg.cc/FK0BSJZw/k.png",
        category:"Tollywood",
        button: "Subscribe To Watch",
    },
    {
        name: "Anupama",
        rating: 8.4,
        img: "https://i.postimg.cc/SRr0M16X/1.png",
        category:"Show",
        button: "Subscribe To Watch",
    },
    {
        name: "Ye Rishta kya...",
        rating: 9.4,
        img: "https://i.postimg.cc/8cT9Nd2T/2.png",
        category:"Show",
        button: "Subscribe To Watch",
    },

   {
        name: "Rain Or Shine",
        rating: 9.4,
        img: "https://i.postimg.cc/BbXDLbPR/f1.png",
        category:"Show",
        button: "Subscribe To Watch",
    },
    {
        name: "Weather is Nice",
        rating: 6.4,
        img: "https://i.postimg.cc/PJPVM1R4/f5.png",
        category:"Show",
        button: "Subscribe To Watch",
    },
 

]
// appending movie data

function appendMovies(data) {
    let data_div = document.getElementById('gridmain');
    data_div.innerHTML = null;
    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.img);


        let movie_name = document.createElement("h2");
        movie_name.innerHTML = `Name : ${el.name}`;

        let rating = document.createElement("h3");
        rating.innerHTML = `Rating : ${el.rating}`;

        let btn = document.createElement("button");
        btn.innerText = "Watch Now";

        div.append(img, movie_name, rating,btn);
        data_div.append(div);
    });
}
appendMovies(movies);

// sorting functionality
// low to high
// function sortLTH(){
//     let data=movies;
//     data=data.sort((a,b)=>a.rating-b.rating);
// }
// // high to low
// function sortHTL(){
//     let data=movies;
//     data=data.sort((a,b)=>b.rating-a.rating);
//     appendMovies(data);
// }


function handleSort() {

    let data = movies;

    let sorted = document.querySelector("select").value;
    if (sorted == "high") {
        data.sort((a, b) => b.rating - a.rating)
    }
    if (sorted == "low") {
        data.sort((a, b) => a.rating - b.rating)
    }

    console.log(data);
    appendMovies(data);
}
