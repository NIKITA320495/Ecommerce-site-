
fetch("http://localhost:8080/displaycart")
  .then((res) => res.json())
  .then((cartarr) => {
    var itemcount = cartarr.length;
    localStorage.setItem("itemcount", itemcount);

    var MRP = cartarr.reduce((sum, item) => sum + +item.strikedoffprice.split(" ")[1], 0);
    var amount = cartarr.reduce((sum, item) => sum + +item.price.split(" ")[1], 0);
    var discount = MRP - amount;

    localStorage.setItem("MRP", MRP);
    localStorage.setItem("amount", amount);
    localStorage.setItem("discount", discount);

    document.querySelector(".amount_pay").innerText = amount;
    document.querySelector(".filldiscount").innerText = "- " + discount;
    document.querySelector(".totalprice").innerText = MRP;
    document.querySelector(".pricedets").innerText = `PRICE DETAILS ( ${itemcount} Items)`;

    document.querySelector(".container").innerHTML = "";

    cartarr.forEach((ele, ind) => {
      var box = document.createElement("div");
      box.className = "main";

      var imgbox = document.createElement("div");
      var image = document.createElement("img");
      image.src = ele.image_url;
      imgbox.append(image);

      var detailsbox = document.createElement("div");
      var name = document.createElement("p");
      name.innerText = ele.brand;
      name.style.fontSize = "20px";
      name.style.marginBottom = "-8px";

      var para = document.createElement("p");
      para.innerText = ele.para;
      para.style.color = "gray";

      var price = document.createElement("span");
      price.innerText = ele.price;

      var strikedprice = document.createElement("span");
      strikedprice.innerText = ele.strikedoffprice;
      strikedprice.style.textDecoration = "line-through";
      strikedprice.style.color = "gray";

      var offer = document.createElement("span");
      offer.innerText = ele.offer;
      offer.style.color = "red";

      var pricepara = document.createElement("p");
      pricepara.append(price, strikedprice);

      detailsbox.append(name, para, pricepara, offer);

      var buttonbox = document.createElement("div");
      var remove = document.createElement("button");
      remove.innerText = "REMOVE";
      remove.id = "remove";
      remove.addEventListener("click", function () {
        removeItem(ele.id); // or ele.id if you're deleting by ID
      });

      buttonbox.append(remove);
      box.append(imgbox, detailsbox, buttonbox);
      document.querySelector(".container").append(box);
    });
  })
  .catch((err) => {
    console.error("Error fetching cart data:", err);
  });

function removeItem(id) {
  fetch(`http://localhost:8080/deletecart?id=${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    })
    .then(() => {
      window.location.reload();
    })
    .catch((err) => {
      console.error("Error removing item:", err);
    });
}



