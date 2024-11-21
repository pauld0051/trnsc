// Product data
const products = [
  {
    name: "olive oil",
    linkEU: "https://amzn.to/4gVpL0c",
    linkUS: "https://amzn.to/47SOaPT",
  },
  {
    name: "parchment paper",
    linkEU: "https://amzn.to/3ZRoO2D",
    linkUS: "https://amzn.to/4h3rfWi",
  },
  {
    name: "cocoa nibs",
    linkEU: "https://amzn.to/3ZLUJ4J",
    linkUS: "https://amzn.to/3ZSnxbN",
  },
  {
    name: "vanilla essence",
    linkEU: "https://amzn.to/3Yhyoeb",
    linkUS: "https://amzn.to/4dH7OzB",
  },
  {
    name: "oregano (dried)",
    linkEU: "https://amzn.to/3Ym0qp0",
    linkUS: "https://amzn.to/3Y1LQl4",
  },
  {
    name: "psyllium husk",
    linkEU: "https://amzn.to/3zYWqBb",
    linkUS: "https://amzn.to/3NcDeDh",
  },
  {
    name: "almond flour",
    linkEU: "https://amzn.to/3U7dqfp",
    linkUS: "https://amzn.to/3U6eekP",
  },
  {
    name: "soy sauce - reduced sodium",
    linkEU: "https://amzn.to/48cj31F",
    linkUS: "https://amzn.to/48cj31F",
  },
  {
    name: "miso paste",
    linkEU: "https://amzn.to/3XRVlD9",
    linkUS: "https://amzn.to/3TVdwqu",
  },
  {
    name: "shiratake noodles",
    linkEU: "https://amzn.to/3Ybhlua",
    linkUS: "https://amzn.to/4eMv5Rw",
  },
  {
    name: "tamari",
    linkEU: "https://amzn.to/3TQEsYf",
    linkUS: "https://amzn.to/4dyPFnp",
  },
  {
    name: "peanut butter (natural, unsweetened)",
    linkEU: "https://amzn.to/3NmnhKD",
    linkUS: "https://amzn.to/4eW0kd1",
  },
  {
    name: "tamarind paste",
    linkEU: "https://amzn.to/4eU5NRL",
    linkUS: "https://amzn.to/3XW18aK",
  },
  {
    name: "smoked paprika",
    linkEU: "https://amzn.to/3ZVTQql",
    linkUS: "https://amzn.to/480hOCV",
  },
  {
    name: "cumin (ground)",
    linkEU: "https://amzn.to/3A4aut9",
    linkUS: "https://amzn.to/4eWRf3F",
  },
  {
    name: "red chilli powder",
    linkEU: "https://amzn.to/3BTvSSo",
    linkUS: "https://amzn.to/4dLbOyU",
  },
  {
    name: "basil (dried)",
    linkEU: "https://amzn.to/3Nold4X",
    linkUS: "https://amzn.to/3AbwQZM",
  },
  {
    name: "marjoram (dried)",
    linkEU: "https://amzn.to/4f11ALW",
    linkUS: "https://amzn.to/3BOyAcc",
  },
  {
    name: "cocoa butter",
    linkEU: "https://amzn.to/47Vn9LF",
    linkUS: "https://amzn.to/47T15Be",
  },
  {
    name: "Valrhona cocoa powder",
    linkEU: "https://amzn.to/47YzIWr",
    linkUS: "https://amzn.to/3TVDuKu",
  },
  {
    name: "hibiscus tea",
    linkEU: "https://amzn.to/4eA4SGm",
    linkUS: "https://amzn.to/3zOdGsU",
  },
  {
    name: "stevia",
    linkEU: "https://amzn.to/3A1oDr6",
    linkUS: "https://amzn.to/4dOHjIr",
  },
  {
    name: "erythritol",
    linkEU: "https://amzn.to/3NHtIbz",
    linkUS: "https://amzn.to/3Nl85NJ",
  },
  {
    name: "cinnamon sticks",
    linkEU: "https://amzn.to/401RZAr",
    linkUS: "https://amzn.to/3YjJGP8",
  },
  {
    name: "Greek mountain tea",
    linkEU: "https://amzn.to/4gTiI8f",
    linkUS: "https://amzn.to/3AlR4jF",
  },
  {
    name: "coriander (ground)",
    linkEU: "https://amzn.to/4eXnEHl",
    linkUS: "https://amzn.to/3Ymp60z",
  },
  {
    name: "cinnamon (ground)",
    linkEU: "https://amzn.to/483pOD8",
    linkUS: "https://amzn.to/4f1zyQi",
  },
  {
    name: "garlic powder",
    linkEU: "https://amzn.to/400SACg",
    linkUS: "https://amzn.to/4dFMYAE",
  },
  {
    name: "salt",
    linkEU: "https://amzn.to/3Nrp0hK",
    linkUS: "https://amzn.to/3U9016P",
  },
  {
    name: "baking powder",
    linkEU: "https://amzn.to/3NfIlCz",
    linkUS: "https://amzn.to/3XN0WL6",
  },
  {
    name: "coconut oil",
    linkEU: "https://amzn.to/3UvVPhk",
    linkUS: "https://amzn.to/3NN7sg9",
  },
  {
    name: "turmeric (ground)",
    linkEU: "https://amzn.to/483gXkS",
    linkUS: "https://amzn.to/486pvYj",
  },
  {
    name: "cardamom",
    linkEU: "https://amzn.to/4016RyI",
    linkUS: "https://amzn.to/483fyL0",
  },
  {
    name: "cloves (whole)",
    linkEU: "https://amzn.to/3U6azna",
    linkUS: "https://amzn.to/48lokEx",
  },
  {
    name: "cayenne pepper (ground)",
    linkEU: "https://amzn.to/4054wmv",
    linkUS: "https://amzn.to/4eY6qto",
  },
  {
    name: "black lentils",
    linkEU: "https://amzn.to/3XTzviM",
    linkUS: "https://amzn.to/4013194",
  },
  {
    name: "green lentils",
    linkEU: "https://amzn.to/3BQ8167",
    linkUS: "https://amzn.to/3NNz0SL",
  },
  {
    name: "ghee",
    linkEU: "https://amzn.to/3U4Qrlj",
    linkUS: "https://amzn.to/3NlckJp",
  },
  {
    name: "quinoa flour",
    linkEU: "https://amzn.to/3NpULaW",
    linkUS: "https://amzn.to/3ZXlvap",
  },
  {
    name: "chickpea flour",
    linkEU: "https://amzn.to/3zSUPwV",
    linkUS: "https://amzn.to/4eZuIDm",
  },
  {
    name: "xanthan gum",
    linkEU: "https://amzn.to/4eDPoBd",
    linkUS: "https://amzn.to/3ZWOZFo",
  },
  {
    name: "onion powder",
    linkEU: "https://amzn.to/48d3S8I",
    linkUS: "https://amzn.to/484xQLS",
  },
  {
    name: "rosemary",
    linkEU: "https://amzn.to/3YnjqDm",
    linkUS: "https://amzn.to/3BFrC9l",
  },
  {
    name: "mustard powder",
    linkEU: "https://amzn.to/3YxbVdn",
    linkUS: "https://amzn.to/3zN79ih",
  },
  {
    name: "balsamic vinegar",
    linkEU: "https://amzn.to/3zWcBiN",
    linkUS: "https://amzn.to/3U8Ol3I",
  },
  {
    name: "monk fruit sweetener",
    linkEU: "https://amzn.to/3Yia381",
    linkUS: "https://amzn.to/3Yia381",
  },
  {
    name: "nutritional yeast",
    linkEU: "https://amzn.to/4dQydLk",
    linkUS: "https://amzn.to/3U7fGn6",
  },
  {
    name: "dehydrator",
    linkEU: "https://amzn.to/4eZEghG",
    linkUS: "https://amzn.to/3BIPVmK",
  },
  {
    name: "gelatin powder",
    linkEU: "https://amzn.to/4eEySkc",
    linkUS: "https://amzn.to/4dNoHc3",
  },
  {
    name: "coconut flour",
    linkEU: "https://amzn.to/3zXdLL0",
    linkUS: "https://amzn.to/3UaxFZX",
  },
  {
    name: "bread baking tray",
    linkEU: "https://amzn.to/4eJ5CsK",
    linkUS: "https://amzn.to/40bPD1E",
  },
  {
    name: "apple cider vinegar",
    linkEU: "https://amzn.to/3NsCGJA",
    linkUS: "https://amzn.to/48688qe",
  },
  {
    name: "Dijon mustard",
    linkEU: "https://amzn.to/3YbBu27",
    linkUS: "https://amzn.to/3zYbSxC",
  },
  {
    name: "bean pasta",
    linkEU: "https://amzn.to/4hqjVUM",
    linkUS: "https://amzn.to/4hqjVUM",
  },
  {
    name: "curry powder",
    linkEU: "https://amzn.to/3A7liqE",
    linkUS: "https://amzn.to/3AcAtPk",
  },
  {
    name: "nutmeg (ground)",
    linkEU: "https://amzn.to/40gIxt8",
    linkUS: "https://amzn.to/4eZKK0n",
  },
  {
    name: "cloves (ground)",
    linkEU: "https://amzn.to/3NI9qON",
    linkUS: "https://amzn.to/4hjQdk7",
  },
  {
    name: "vegetable stock cube",
    linkEU: "https://amzn.to/3NO05Fg",
    linkUS: "https://amzn.to/4dVB5Xl",
  },
  {
    name: "chicken stock cube",
    linkEU: "https://amzn.to/3NOp4Zk",
    linkUS: "https://amzn.to/3Uipn25",
  },
  {
    name: "chicken broth (low-sodium)",
    linkEU: "https://amzn.to/3BZg4hf",
    linkUS: "https://amzn.to/4eVhHLt",
  },
  {
    name: "black olives",
    linkEU: "https://amzn.to/4eWRufD",
    linkUS: "https://amzn.to/4eWRufD",
  },
  {
    name: "vanilla paste",
    linkEU: "https://amzn.to/48lCV2B",
    linkUS: "https://amzn.to/3YBOsrf",
  },
  {
    name: "thyme (dried)",
    linkEU: "https://amzn.to/4eDqCRz",
    linkUS: "https://amzn.to/3BPCtO0",
  },
  {
    name: "inulin powder",
    linkEU: "https://amzn.to/3UqTLap",
    linkUS: "https://amzn.to/3YJnJt6",
  },
  {
    name: "parsley (dried)",
    linkEU: "https://amzn.to/3YsRzkb",
    linkUS: "https://amzn.to/4f8fOv8",
  },
  {
    name: "chives (dried)",
    linkEU: "https://amzn.to/3CafjCc",
    linkUS: "https://amzn.to/3NMCOUo",
  },
  {
    name: "avocado oil",
    linkEU: "https://amzn.to/4f5o5Qr",
    linkUS: "https://amzn.to/48vlnBc",
  },
  {
    name: "Metamucil",
    linkEU: "https://amzn.to/4dNv66W",
    linkUS: "https://amzn.to/4h4meN5",
  },
  {
    name: "Fybrogel",
    linkEU: "https://amzn.to/4eOfUIa",
    linkUS: "https://amzn.to/4eOfUIa",
  },
  {
    name: "chicken stock",
    linkEU: "https://amzn.to/3YrMQz2",
    linkUS: "https://amzn.to/3NPtOxy",
  },
  {
    name: "saffron threads",
    linkEU: "https://amzn.to/3YIWmPM",
    linkUS: "https://amzn.to/3C8Zmft",
  },
  {
    name: "baking soda",
    linkEU: "https://amzn.to/3YMLikA",
    linkUS: "https://amzn.to/4f6wIdl",
  },
  {
    name: "almond butter",
    linkEU: "https://amzn.to/3C843Gl",
    linkUS: "https://amzn.to/4ea319V",
  },
  {
    name: "vanilla extract",
    linkEU: "https://amzn.to/3C84dxr",
    linkUS: "https://amzn.to/48t1YAV",
  },
  {
    name: "dark chocolate chips (sugar free)",
    linkEU: "https://amzn.to/3YNowJi",
    linkUS: "https://amzn.to/4hq3w2x",
  },
  {
    name: "hazelnuts",
    linkEU: "https://amzn.to/4f60kaF",
    linkUS: "https://amzn.to/4hq3w2x",
  },
  {
    name: "chocolate mold",
    linkEU: "https://amzn.to/3YLdmoh",
    linkUS: "https://amzn.to/4hy33eX",
  },
  {
    name: "mandolin slicer",
    linkEU: "https://amzn.to/48xrZPu",
    linkUS: "https://amzn.to/40nKML8",
  },
  {
    name: "rolled oats",
    linkEU: "https://amzn.to/40teTka",
    linkUS: "https://amzn.to/3NOzqIm",
  },
  {
    name: "vanilla powder",
    linkEU: "https://amzn.to/4fbxUfC",
    linkUS: "https://amzn.to/4ebvhcr",
  },
  {
    name: "almond milk",
    linkEU: "https://amzn.to/3YxZrAF",
    linkUS: "https://amzn.to/4eje80h",
  },
  {
    name: "paprika",
    linkEU: "https://amzn.to/40sKOBh",
    linkUS: "https://amzn.to/48AYTyw",
  },
  {
    name: "baking sheet paper",
    linkEU: "https://amzn.to/4hzmiVa",
    linkUS: "https://amzn.to/4ejY3aF",
  },
  {
    name: "desiccated coconut",
    linkEU: "https://amzn.to/3YS35af",
    linkUS: "https://amzn.to/40B8inV",
  },
  {
    name: "cocoa powder",
    linkEU: "https://amzn.to/4ehqwyb",
    linkUS: "https://amzn.to/3CcrdLD",
  },
  {
    name: "cake tin",
    linkEU: "https://amzn.to/4eek7ni",
    linkUS: "https://amzn.to/40zX9DO",
  },
  {
    name: "tea strainer",
    linkEU: "https://amzn.to/3UGt2ah",
    linkUS: "https://amzn.to/3UGOiwu",
  },
  {
    name: "sesame oil",
    linkEU: "https://amzn.to/3YUYX9k",
    linkUS: "https://amzn.to/4hIgxoa",
  },
  {
    name: "white vinegar",
    linkEU: "https://amzn.to/4elCeaX",
    linkUS: "https://amzn.to/4fEZulf",
  },
  {
    name: "chilli flakes",
    linkEU: "https://amzn.to/40GBMAO",
    linkUS: "https://amzn.to/4hFKW6z",
  },
  {
    name: "coconut milk",
    linkEU: "https://amzn.to/4flkk9v",
    linkUS: "https://amzn.to/3Ci62rD",
  },
  {
    name: "dried raspberries",
    linkEU: "https://amzn.to/4fH4S7y",
    linkUS: "https://amzn.to/40EArKK",
  },
  {
    name: "walnuts",
    linkEU: "https://amzn.to/40EAu9o",
    linkUS: "https://amzn.to/3AntJyk",
  },
  {
    name: "whey isolate",
    linkEU: "https://amzn.to/3O2FJs4",
    linkUS: "https://amzn.to/3AxQsrt",
  },
  {
    name: "Italian seasoning",
    linkEU: "https://amzn.to/40IuSuX",
    linkUS: "https://amzn.to/4hKlZqU",
  },
  {
    name: "ginger (ground)",
    linkEU: "https://amzn.to/3Ap2bbS",
    linkUS: "https://amzn.to/40BAGX8",
  },
  {
    name: "fennel",
    linkEU: "https://amzn.to/3CkHLkJ",
    linkUS: "https://amzn.to/4hKB0sQ",
  },
  {
    name: "poppadoms",
    linkEU: "https://amzn.to/3O5H2X6",
    linkUS: "https://amzn.to/4fsdlvx",
  },
  {
    name: "quinoa",
    linkEU: "https://amzn.to/3AHLcl5",
    linkUS: "https://amzn.to/40LXrHU",
  },
  {
    name: "rice vinegar",
    linkEU: "https://amzn.to/3AEO1mS",
    linkUS: "https://amzn.to/48PUaco",
  },
  {
    name: "nori (sushi sheets)",
    linkEU: "https://amzn.to/3YEFkB2",
    linkUS: "https://amzn.to/3YTHblM",
  },
  {
    name: "Japanese soy sauce",
    linkEU: "https://amzn.to/3Z3Cabh",
    linkUS: "https://amzn.to/48OP7cr",
  },
  {
    name: "wasabi",
    linkEU: "https://amzn.to/3CAbV3n",
    linkUS: "https://amzn.to/4eofWW9",
  },
  {
    name: "sesame seeds",
    linkEU: "https://amzn.to/3CnKfPb",
    linkUS: "https://amzn.to/4fm2d3t",
  },
  {
    name: "sushi set",
    linkEU: "https://amzn.to/3ARfSAe",
    linkUS: "https://amzn.to/3AIER8X",
  },
  {
    name: "silicon muffin cups",
    linkEU: "https://amzn.to/3Z27cAm",
    linkUS: "https://amzn.to/4frlHDA",
  },
  {
    name: "dill (dried)",
    linkEU: "https://amzn.to/3Z4HhIs",
    linkUS: "https://amzn.to/3Z7uvcj",
  },
  {
    name: "cardamon pods",
    linkEU: "https://amzn.to/3OdHWky",
    linkUS: "https://amzn.to/4ftO7wV",
  },
  {
    name: "peppercorns",
    linkEU: "https://amzn.to/4eB5YAJ",
    linkUS: "https://amzn.to/3Z9oUlK",
  },
  {
    name: "black tea",
    linkEU: "https://amzn.to/48TZ88f",
    linkUS: "https://amzn.to/48WBcRM",
  },
  {
    name: "yogi tea",
    linkEU: "https://amzn.to/4fsJdQR",
    linkUS: "https://amzn.to/4hOuZv3",
  },
  {
    name: "cast iron tea pot",
    linkEU: "https://amzn.to/3OdHFhm",
    linkUS: "https://amzn.to/490gbp9",
  },
  {
    name: "beef stock",
    linkEU: "https://amzn.to/4fpqHbU",
    linkUS: "https://amzn.to/48RvvV6",
  },
  {
    name: "sunflower oil",
    linkEU: "https://amzn.to/3UUKHe9",
    linkUS: "https://amzn.to/40OZBq8",
  },
  {
    name: "ovenproof soufflé molds",
    linkEU: "https://amzn.to/3UUxbra",
    linkUS: "https://amzn.to/3CxwyNM",
  },
  {
    name: "muffin tins",
    linkEU: "https://amzn.to/3YTV5nB",
    linkUS: "https://amzn.to/3OabPC6",
  },
  {
    name: "amaranth flour",
    linkEU: "https://amzn.to/3ZbSMO4",
    linkUS: "https://amzn.to/4fLl2gJ",
  },
  {
    name: "arrowroot flour",
    linkEU: "https://amzn.to/3UZw619",
    linkUS: "https://amzn.to/3UVEz5n",
  },
  {
    name: "green banana flour",
    linkEU: "https://amzn.to/3UTMwbe",
    linkUS: "https://amzn.to/3UTMwbe",
  },
  {
    name: "buckwheat flour",
    linkEU: "https://amzn.to/4fv92zH",
    linkUS: "https://amzn.to/48Wommd",
  },
  {
    name: "cassava flour",
    linkEU: "https://amzn.to/3CxaFye",
    linkUS: "https://amzn.to/3CyNFPp",
  },
  {
    name: "chestnut flour",
    linkEU: "https://amzn.to/4fvUfEG",
    linkUS: "https://amzn.to/4fy9soU",
  },
  {
    name: "flaxseed meal",
    linkEU: "https://amzn.to/3OdOcsz",
    linkUS: "https://amzn.to/3UYJnHs",
  },
  {
    name: "hemp flour",
    linkEU: "https://amzn.to/3Cy9ePZ",
    linkUS: "https://amzn.to/3AB3lkB",
  },
  {
    name: "millet flour",
    linkEU: "https://amzn.to/40SH2Sc",
    linkUS: "https://amzn.to/4ezxwGJ",
  },
  {
    name: "oat flour",
    linkEU: "https://amzn.to/48SWcso",
    linkUS: "https://amzn.to/3Cu6aVd",
  },
  {
    name: "pea flour",
    linkEU: "https://amzn.to/4hQQAmE",
    linkUS: "https://amzn.to/4hQQAmE",
  },
  {
    name: "rye flour",
    linkEU: "https://amzn.to/4hULLIQ",
    linkUS: "https://amzn.to/4fHVb8S",
  },
  {
    name: "sorghum flour",
    linkEU: "https://amzn.to/4fuVBj5",
    linkUS: "https://amzn.to/4fuVBj5",
  },
  {
    name: "teff flour",
    linkEU: "https://amzn.to/4fvUEXZ",
    linkUS: "https://amzn.to/4fxiQcg",
  },
  {
    name: "tapioca flour",
    linkEU: "https://amzn.to/3AB3Qet",
    linkUS: "https://amzn.to/3ZbqIe3",
  },
  {
    name: "active dry yeast",
    linkEU: "https://amzn.to/3Z80WHk",
    linkUS: "https://amzn.to/4fumgMR",
  },
  {
    name: "high speed blender",
    linkEU: "https://amzn.to/3V114pz",
    linkUS: "https://amzn.to/3UXcgUn",
  },
  {
    name: "olive oil spray",
    linkEU: "https://amzn.to/4fxWzeu",
    linkUS: "https://amzn.to/3V2BQHq",
  },
  {
    name: "red wine vinegar",
    linkEU: "https://amzn.to/4eXEMwp",
    linkUS: "https://amzn.to/4fFLLLq",
  },
];
