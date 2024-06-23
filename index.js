const form = document.querySelector(".form-container");

emailjs.init({
  publicKey: "AAOlMU8meHfTCnJKx",
});

function getParams() {
  const userName = document.querySelector("#name").value;
  const userEmail = document.querySelector("#email").value;
  const userPhone = document.querySelector("#phone").value;
  const userAddress = document.querySelector("#address").value;
  const userMessage = document.querySelector("#mess1").value;

  const orderId = Math.random().toString(16).slice(2);

  const currentDate = new Date();
  const orderDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getMinutes()}`;

  return {
    id: orderId,
    date: orderDate,
    items: "Áo thun",
    name: userName,
    email: userEmail,
    phone: userPhone,
    userAddress: userAddress,
    userMessage: userMessage,
    method: "Credit card",
    total: "10$",
  };
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const params = getParams();
  emailjs.send("service_s84v5y6", "template_6fp3ufq", params).then(
    () => {
      window.location.href = "./hoanhanh.html";
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
