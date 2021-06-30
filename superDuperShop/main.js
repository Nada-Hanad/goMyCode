var cardsElements = [
  { id: 0, name: "Chcolate", quantity: 1, price: 10.99 },
  { id: 1, name: "IceCream", quantity: 1, price: 5.99 },
  { id: 2, name: "White Wine", quantity: 1, price: 129.99 },
  { id: 3, name: "Red Wine", quantity: 1, price: 149.99 },
];
var panier = [];
const addToCart = (id) => {
  var found = cardsElements.find((e) => e.id == id);
  var panierContentElement = document.getElementById("panier-content");
  var foundInCart = panier.find((e) => e.id == id);
  if (foundInCart) {
    var is = panier[panier.findIndex((e) => e.id == id)];
    is.quantity++;
    console.log(is);
    console.log("quantity " + is.id);
    document.getElementById("quantity " + is.id).innerHTML = is.quantity;
  } else {
    panier.push(found);
    console.log(panier);

    panierContentElement.innerHTML += ` <tr id="row ${found.id}"> 
  <th scope="row">1</th>
  <td>${found.name}</td>
  <td>${found.price}</td>
  <td id="quantity ${found.id}">${found.quantity}</td>
  <td>
    <button onClick= "deleteFromCart(${id})" type="button" class="btn btn-danger">Delete</button>
  </td>
</tr>`;
  }
  document.getElementById("nbItems").innerText = panier.length;
};

const deleteFromCart = (id) => {
  panier = panier.filter((e) => e.id != id);
  document.getElementById("row " + id).remove();
  console.log(panier);
  document.getElementById("nbItems").innerText = panier.length;
};

cardsElements.map((e) => {
  e = `<div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  
              <div class="card-body">
                <p class="card-text">${e.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button class="btn btn-primary my-2" onClick="addToCart(${e.id})">Add to cart</button>
                  </div>
                  <small class="text-muted">${e.price} $</small>
                </div>
              </div>
            </div>
          </div>`;
  document.getElementById("products").innerHTML += e;
  document.getElementById("nbItems").innerText = panier.length;
});
