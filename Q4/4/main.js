UserCart = [
  {
    productId: 1,
    productName: "Mobile",
    price: 7000
  },
  {
    productId: 2,
    productName: "Laptpo",
    price: 100000
  },
  {
    productId: 3,
    productName: "Airpods",
    price: 26900
  },
  {
    productId: 4,
    productName: "Watch",
    price: 30000
  },
  {
    productId: 5,
    productName: "Shoes",
    price: 35000
  },
  {
    productId: 6,
    productName: "Bag",
    price: 10000
  },
]

let count = 0
UserCart.reduce(function(val) {
  count = count + val.price
})
console.log(count)
console.log(UserCart[1])
