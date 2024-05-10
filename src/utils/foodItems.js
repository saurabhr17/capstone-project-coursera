import {
  Greeksalad,
  LemonDessert,
  bruchetta,
  pizza,
  coffe,
  mixed_shake,
  strawberry_shake,
  choclate_shake,
  maggi,
  meal,
  pasta,
  sandwich,
  sandwich2,
  veggie,
  ghee_idli,
  onion_ravva,
  plain_dosa,
  poori,
  vada,
} from "./index";

import {
  Greeksalad_min_2kb,
  LemonDessert_min_2kb,
  bruchetta_min_2kb,
  pizza_min_2kb,
  coffe_min_2kb,
  mixed_shake_min_2kb,
  strawberry_shake_min_2kb,
  choclate_shake_min_2kb,
  maggi_min_2kb,
  meal_min_2kb,
  pasta_min_2kb,
  sandwich_min_2kb,
  sandwich2_min_2kb,
  veggie_min_2kb,
  ghee_idli_min_2kb,
  onion_ravva_min_2kb,
  plain_dosa_min_2kb,
  poori_min_2kb,
  vada_min_2kb,
} from "./index";


import {
  NavLogo_mid,
  HeroImg_mid,
  Greeksalad_mid,
  LemonDessert_mid,
  bruchetta_mid,
  groot_mid,
  superMan_mid,
  stefan_mid,
  Jake_mid,
  rest1_mid,
  rest2_mid,
  footerImg_mid,
  littleLemon_mid,
  rest3_mid,
  rest_chef_mid,
  pizza_mid,
  coffe_mid,
  mixed_shake_mid,
  strawberry_shake_mid,
  choclate_shake_mid,
  maggi_mid,
  meal_mid,
  pasta_mid,
  sandwich_mid,
  sandwich2_mid,
  veggie_mid,
  ghee_idli_mid,
  onion_ravva_mid,
  plain_dosa_mid,
  poori_mid,
  vada_mid,
  min_mid
} from "./index";



const fooditems = [
  {
    id: 1,
    title: "Greek salad",
    category: "main",
    img: Greeksalad,
    midImg:Greeksalad_mid,
    minImg:Greeksalad_min_2kb,
    type: "salad",
    rating: 4.7,
    price: 250,
  },
  {
    id: 2,
    title: "bruchetta",
    category: "main",
    img: bruchetta,
    midImg:bruchetta_mid,
    minImg:bruchetta_min_2kb,
    type: "appetizer",
    rating: 4.3,
    price: 150,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    category: "main",
    img: LemonDessert,
    midImg:LemonDessert_mid,
    minImg:LemonDessert_min_2kb,
    type: "dessert",
    rating: 4.5,
    price: 200,
  },
  {
    id: 4,
    title: "pizza",
    category: "main",
    img: pizza,
    midImg:pizza_mid,
    minImg:pizza_min_2kb,
    type: "pizza",
    rating: 4.0,
    price: 300,
  },
  {
    id: 5,
    title: "coffee",
    category: "coffee",
    img: coffe,
    midImg:coffe_mid,
    minImg:coffe_min_2kb,
    type: "drink",
    rating: 4.2,
    price: 100,
  },
  {
    id: 6,
    title: "mixed shake",
    category: "drink",
    img: mixed_shake,
    midImg:mixed_shake_mid,
    minImg:mixed_shake_min_2kb,
    type: "shake",
    rating: 4.6,
    price: 120,
  },
  {
    id: 7,
    title: "strawberry shake",
    category: "drink",
    img: strawberry_shake,
    midImg:strawberry_shake_mid,
    minImg:strawberry_shake_min_2kb,
    type: "shake",
    rating: 4.8,
    price: 150,
  },
  {
    id: 8,
    title: "maggi",
    category: "main",
    img: maggi,
    midImg:maggi_mid,
    minImg:maggi_min_2kb,
    type: "pasta",
    rating: 4.4,
    price: 80,
  },
  {
    id: 9,
    title: "meal",
    category: "meal",
    img: meal,
    midImg:meal_mid,
    minImg:meal_min_2kb,
    type: "meal",
    rating: 4.9,
    price: 200,
  },
  {
    id: 10,
    title: "pasta",
    category: "main",
    img: pasta,
    midImg:pasta_mid,
    minImg:pasta_min_2kb,
    type: "pasta",
    rating: 4.2,
    price: 180,
  },
  {
    id: 11,
    title: "Roasted Vegetable",
    category: "main",
    img: sandwich,
    midImg:sandwich_mid,
    minImg:sandwich_min_2kb,
    type: "sandwich",
    rating: 4.5,
    price: 120,
  },
  {
    id: 12,
    title: "Caprese",
    category: "main",
    img: sandwich2,
    midImg:sandwich2_mid,
    minImg:sandwich2_min_2kb,
    type: "sandwich",
    rating: 4.4,
    price: 140,
  },
  {
    id: 13,
    title: "veggie",
    category: "main",
    img: veggie,
    midImg:veggie_mid,
    minImg:veggie_min_2kb,
    type: "veggie",
    rating: 4.3,
  },
  {
    id: 14,
    title: "chocolate shake",
    category: "drink",
    img: choclate_shake,
    midImg:choclate_shake_mid,
    minImg:choclate_shake_min_2kb,
    type: "shake",
    rating: 4.7,
    price: 130,
  },
  {
    id: 15,
    title: "ghee idli",
    category: "breakfast",
    img: ghee_idli,
    midImg:ghee_idli_mid,
    minImg:ghee_idli_min_2kb,
    type: "tiffin",
    rating: 4.4,
    price: 130,
  },
  {
    id: 16,
    title: "onion_ravva",
    category: "breakfast",
    img: onion_ravva,
    midImg:onion_ravva_mid,
    minImg:onion_ravva_min_2kb,
    type: "tiffin",
    rating: 4.9,
    price: 50,
  },
  {
    id: 17,
    title: "plain dosa",
    category: "breakfast",
    img: plain_dosa,
    midImg:plain_dosa_mid,
    minImg:plain_dosa_min_2kb,
    type: "tiffin",
    rating: 4.7,
    price: 40,
  },
  {
    id: 18,
    title: "poori",
    category: "breakfast",
    img: poori,
    midImg:poori_mid,
    minImg:poori_min_2kb,
    type: "tiffin",
    rating: 4.2,
    price: 60,
  },
  {
    id: 19,
    title: "vada",
    category: "breakfast",
    img: vada,
    midImg:vada_mid,
    minImg:vada_min_2kb,
    type: "tiffin",
    rating: 4.4,
    price: 30,
  },
];

export default fooditems;
