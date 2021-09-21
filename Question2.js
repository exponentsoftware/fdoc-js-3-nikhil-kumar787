// 2 .Questions:a, b and c are based on the following two arrays:users and products

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },

  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* a. Create a function called ***signUp*** which allows user to add to the collection. 
   If user exists, inform the user that he has already an account.
  */

const signup = (newuser) => {
  let count = 0;
  for (let user of users) {
    if (user.email == newuser.email) {
      count++;
      return "User already exists";
    }
  }
  if (count == 0) {
    users.push(newuser);
    return "The user has been added";
  }
};

const newuser = {
  _id: "d6ye9y",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "17/05/2019 10:00 AM",
  isLoggedIn: false,
};
// console.log(signup(newuser));

/* b. Create a function called ***signIn*** which allows user to sign in to the application
 */

const signIn = (user_input) => {
  for (let user of users) {
    if (
      user.email == user_input.email &&
      user.password == user_input.password
    ) {
      user.isLoggedIn = true;
      return "Welcome to the application " + user.username;
    }
  }
  return "Email or Password incorrect";
};

const user_input = {
  email: "brook@brook.com",
  password: "123111",
};
// console.log(signIn(user_input));

///////////////////////// 2b. The products array has three elements and each of them has six properties. ////////////
//a. Create a function called ***rateProduct*** which rates the product

const rateProduct = (prodNmae, ratingObj) => {
  for (let key in products) {
    if (products[key].name == prodNmae) {
      products[key].ratings.push(ratingObj);
    }
    console.log(products[key].ratings);
  }
};

// rateProduct("mobile phone", { userId: "ab12ex", rate: 5 });

//b. Create a function called ***averageRating*** which calculate the average rating of a product

const calculateRating = (prodNmae) => {
  let len,
    avg,
    sum = 0;
  for (let key in products) {
    if (products[key].name == prodNmae) {
      for (let key2 in products[key].ratings) {
        len = products[key].ratings.length;
        sum += products[key].ratings[key2].rate;
      }
    }
  }
  console.log(sum / len);
};

// calculateRating("mobile phone");

// c. Create a function called ***likeProduct***. This function will
// helps to like to the product if it is not liked and remove like if it was liked.

// {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },

const likeProduct = (pid, uid) => {
  for (let product of products) {
    if (product._id == pid) {
      for (let like_by of product.likes) {
        if (uid == like_by) {
          console.log("ssplice ");
          let ind = product.likes.indexOf(uid);
          product.likes.splice(ind, 1);
        } else {
          product.likes.push(uid);
        }
      }
    }
  }
  console.log(products);
};
let pid = "hedfcg";
let uid = "fg12cy";
console.log(likeProduct(pid, uid));
