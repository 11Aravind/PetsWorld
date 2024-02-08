const Foods=()=>{
    let products = 
    [
      {
         id: 1,
         title: "Canvas",
         description: "High quality canvas shoes.",
         price: "20",
         discounted: "15",
         currency: "$",
         image: "https://www.petsy.online/cdn/shop/products/30_58e9248f-0129-4cf6-9e67-e4358d2da13b_502x502.jpg?v=1656769619",
      },
      {
         id: 2,
         title: "Sport shoes",
         description: "Sporty shoes, durable at affordable ranges.",
         price: "25",
         currency: "$",
         discounted: "15",
         image: "https://www.petsy.online/cdn/shop/products/UPGRADEDFORMULANEWIMPACTFULPROVENRESULTS_4_223x223.png?v=1607769322",
      },
      {
         id: 3,
         title: "Sustainably Yours - Multi Cat Large Grains - Natural Cat Litter",
         description: "Sustainably Yours",
         currency: " ₹ 2,100",
         price: " ₹ 2,000",
         image: "https://www.petsy.online/cdn/shop/products/1_1b62165f-ddaf-440a-9138-568d1dc5e31d_502x502.png?v=1607684924",
      },
      {
         id: 4,
         title: "Canvas",
         description: "High quality canvas shoes.",
         price: "20",
         discounted: "15",
         currency: "$",
         image: "https://www.petsy.online/cdn/shop/products/30_58e9248f-0129-4cf6-9e67-e4358d2da13b_502x502.jpg?v=1656769619",
      },
      {
         id: 5,
         title: "Sport shoes",
         description: "Sporty shoes, durable at affordable ranges.",
         price: "25",
         currency: "$",
         discounted: "15",
         image: "https://www.petsy.online/cdn/shop/products/UPGRADEDFORMULANEWIMPACTFULPROVENRESULTS_4_223x223.png?v=1607769322",
      },
      {
         id: 6,
         title: "Sustainably Yours - Multi Cat Large Grains - Natural Cat Litter",
         description: "Sustainably Yours",
         currency: " ₹ 2,100",
         price: " ₹ 2,000",
         image: "https://www.petsy.online/cdn/shop/products/1_1b62165f-ddaf-440a-9138-568d1dc5e31d_502x502.png?v=1607684924",
      }
   ];

   const CONTENT_KEYS = 
   {             
      imgKey: "image",
      cardTitleKey: "title",
      cardDescriptionKey: "description",
      priceKey: "price",
      discountedPriceKey: "discounted",
      priceCurrencyKey: "currency",
      discountCurrencyKey: "currency"
   };
    return(
        <div className="topSpacing">
        <h1>foood</h1>
     </div>
   )
}
export default Foods;