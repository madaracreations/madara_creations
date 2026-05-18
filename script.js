
const orders = {
  "MC1001":"Your order is currently being crafted.",
  "MC1002":"Your order has been shipped.",
  "MC1003":"Your order is out for delivery."
};

function trackOrder(){
  const orderNo = document.getElementById("orderNumber").value;
  const result = document.getElementById("trackingResult");

  if(orders[orderNo]){
    result.innerHTML = orders[orderNo];
  }else{
    result.innerHTML = "Order number not found.";
  }
}

// smooth hover glow effect

const boxes = document.querySelectorAll(".gallery-box");

boxes.forEach(box => {

    box.addEventListener("mousemove", () => {
        box.style.boxShadow =
            "0 20px 50px rgba(255,255,255,0.15)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "none";
    });

});

//Products popup 
function openPopup(id) {

    document.getElementById(id).style.display = "flex";

}

function closePopup(id) {

    document.getElementById(id).style.display = "none";

}