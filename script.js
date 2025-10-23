const products = [
  {
    id: 1,
    name: "Whey Protein - 2kg",
    price: 50.33,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbPafEEd13O4s_vyJB630idOD1nQ4vXRQY3INmsHs2WYQL2C-T_Bfrj4gYS64bJoW3a3oOKewyoev_dcfLHCEXXt1Vf1HZFavGUMgehxjR7Wa3T_vB700uY9U-6I8bBt9cDLeEi-U&usqp=CAc"
  },
  {
    id: 2,
    name: "Creatine Monohydrate - 300g",
    price: 24.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmWmubBL97nCKkNi9-L1nAWDDYa6aTinVTpHeaRlEFmcewkRJs7xreAWFGUULByQ55yfPN0GbA-K2Qs5RKzvqpYxwSVx9O_R0G5J2CdHh_AivC74kT4ywk6ucUg-PlcGsNf3bOqA&usqp=CAc"
  },
  {
    id: 3,
    name: "Multivitamin - 60 Capsules",
    price: 14.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtQnzub_RzueuGD4ZwJL6pKaZtn0g_-VVYS-zTS_4GQ9qKANSu_bexhJK2uoly63L1ZBNEHaFqSYGYSmQ92fauSafLrKRGy3lahcOZp5ZX0yZH3FYqvDuNsjijO-9y1BMShMkwEg&usqp=CAc"
  },
  {
    id: 4,
    name: "Mass Gainer - 3kg",
    price: 69.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7vWu77nATexKBvt-92a01Q7_Nn9KNs6b-thaHlm5am3FMt7-HtR_68OzY8Wcp_ScA_58j2KL72Hd_oqNNk5nqHRBECD5TEa4N712NxED5qTYLbDuNF84yADsYAQ67ngr011WJlUU&usqp=CAc"
  },
  {
    id: 5,
    name: "Preworkout - 15 servings",
    price: 39.34,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6fEwHEAM6qyOvrl_LjSmM5LPdOVsZMH02tNqxhK6f1ogDUeQDl1uOa_EOX6gcfjIgKgGq_KjYjUjmNUVfoyEdoNOIb6EVIbRIRUkdVBoiqGg2x2srdZ2fRiQoVnnz5nXWEukq_Ng&usqp=CAc"
  },
  { 
    id: 6,
    name: "Fishoil - 1000 mg",
    price: 24.00,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5GJqPIvateeIHikVmDqM99cEEf4xn-bh1Yb2nj9VdFYKLGlcC6kiwIMXAq5vUI0VSmsvOx9D-rbh0IzmCgyAEWSQwAseCHrZT-43qA2vSqu5IC4iPmFGtyOXP7uq2XnfaSIpHb3o&usqp=CAc"
  },
  {
    id: 7,
    name: "Fat burner",
    price: 30.00,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSU1yaf9I6t7BbtddDfGG7zce1bKt-jC-ArDfBsFPGrtHMs1TBfQ5RM2BxovED7sJHHtuQaHlqyVpSWrgsigSY8m3S8p4DkWalBu9kTuDng4JRTKwbYnkcvGGEnt679VSQP3RrdHc&usqp=CAc"
  },
  {
    id: 8,
    name: "compression",
    price: 32.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxpH2sWkxIdWB7CNyLboKudHml81wr1fluGlxI2aFHmFHCDXzFmx31oAr-jMWolYNNYDku-iboolQvZ_1mV4_MPTrtEP8PD4c_bjlhW211LW74yqWVX-n9cjC7q5I0tmYiPLFuIfmh3g&usqp=CAc"
  }
];

let cartCount = 0;

function displayProducts() {
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

document.addEventListener('DOMContentLoaded', displayProducts);
