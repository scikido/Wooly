import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Kirtan",
      email: "kirtan@gmail.com",
      password: bcrypt.hashSync("123456"),
    },
    {
      name: "nirali",
      email: "nirali@gmail.com",
      password: bcrypt.hashSync("123456"),
    },
  ],
  categories: [
    {
      name: "Raw Wool",
      slug: "raw-wool",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/raw-wool-img.jpg",
    },
    {
      name: "Combed Wool",
      slug: "combed-wool",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/combed-wool-img.jpg",
    },
    {
      name: "Roving Wool",
      slug: "roving-wool",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/roving-wool-img.jpg",
    },
  ],
  products: [
    {
      name: "Merino Wool",
      slug: "merino-wool",
      price: "20.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/merino-wool-img.jpg",
      category: "raw-wool",
      color: "white",
    },
    {
      name: "Cashmere Wool",
      slug: "cashmere-wool",
      price: "30.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/cashmere-wool-img.jpg",
      category: "raw-wool",
      color: "cream",
    },
    {
      name: "Alpaca Wool",
      slug: "alpaca-wool",
      price: "25.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/alpaca-wool-img.jpg",
      category: "combed-wool",
      color: "brown",
    },
    {
      name: "Mohair Wool",
      slug: "mohair-wool",
      price: "28.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/mohair-wool-img.jpg",
      category: "combed-wool",
      color: "white",
    },
    {
      name: "Woolen Throw Blanket",
      slug: "woolen-throw-blanket",
      price: "35.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/throw-blanket-img.jpg",
      category: "roving-wool",
      color: "cream",
    },
    {
      name: "Woolen Mittens",
      slug: "woolen-mittens",
      price: "12.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/woolen-mittens-img.jpg",
      category: "roving-wool",
      color: "brown",
    },
    {
      name: "Woolen Beanie Hat",
      slug: "woolen-beanie-hat",
      price: "10.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/woolen-hat-img.jpg",
      category: "roving-wool",
      color: "white",
    },
    {
      name: "Lambswool",
      slug: "lambswool",
      price: "22.00",
      img: "https://ik.imagekit.io/7fdb87f3f/wooly/lambswool-img.jpg",
      category: "combed-wool",
      color: "white",
    },
  ],
};
