const root = document.querySelector("#root");

// const fetchApi = async (regionsData) => {
//   let response = await fetch(api);
//   let data = await response.json();
//    displayData(data);
// };

const displayData = (regionsData) => {
  const regions = `<ul class='card-container'>
  ${regionsData
    .map(
      (region) =>
        `<li class='card'><img class='img-card'src=assets/img/${region.code}.jpg><div class='text-card-container'><p>${region.nom}</p><a class='see-more' href=/regions/pageshtlm/${region.code}.html>Voir plus</a></div></li>`
    )
    .join("")}
  </ul>`;
  root.innerHTML = regions;
};

fetch("https://geo.api.gouv.fr/regions?limit=8")
  .then((response) => response.json())
  .then((data) => displayData(data))
  .catch((error) => console.log(error));

const butt = document.quierySelector(".btn");
const maindiv = document.querySelector(".maindiv");

const maindivhidden = () => {
  maindiv.classList.toggle("maindivhidden");
};

butt.addEventListener("click", maindivhidden);
