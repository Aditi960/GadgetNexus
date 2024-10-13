const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "boAt Rockerz 450",
    price: 1500,
    colors: [
      {
        code: "black",
        img: "R.png",
      },
    
    ],

  },
  {
    id: 2,
    title: "HP Pavilion 15",
    price: 67000,
    colors: [
      {
        code: "black",
        img: "Game_ready_image_desktop.webp",
      },
    
    ],
  },
  {
    id: 3,
    title: "Iphone15 Pro Max",
    price: 128900,
    colors: [
      {
        code: "black",
        img: "Apple-iPhone-15-Pro-Max-White-Titanium-frontimage.webp",
      },
    
    ],
    
  },
  {
    id: 4,
    title: "DENON SYS-5.1 Home theater",
    price: 50000,
    colors: [
      {
        code: "black",
        img: "homet.png",
      },
    
    ],
  
  },
  {
    id: 5,
    title: "LG Invertor A/C",
    price: 42000,
    colors: [
      {
        code: "black",
        img: "air_conditioner_PNG63.png",
      },
    
    ],
    
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // You can implement your own logic here (e.g., send data to a server)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  // Example: Logging feedback to the console
  console.log('Feedback received:', { name, email, feedback });

  // Show a success message or reset the form
  alert('Thank you for your feedback, ' + name + '!');
  document.getElementById('feedbackForm').reset();
});
