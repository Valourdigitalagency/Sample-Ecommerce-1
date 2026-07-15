const productData = [
  {
    id: "r1",
    name: "Trial Accessory Pack",
    category: "accessories",
    type: "promo",
    price: 1,
    mrp: 99,
    rating: 4.9,
    reviews: "New",
    discount: "99% off",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A tiny one-rupee promo item for testing and quick cart flow checks.",
    delivery: "Delivery by tomorrow",
    offer: "Introductory offer",
    highlights: ["Budget-friendly trial item", "Easy cart testing", "Lightweight promo pack", "Fast checkout support"],
    included: ["1 promo pack", "1 brand card"],
    specs: [
      ["Price", "1 rupee"],
      ["Category", "Accessories"],
      ["Purpose", "Promo / test item"],
      ["Warranty", "N/A"],
    ],
  },
  {
    id: "a1",
    name: "Classic Chronograph Watch",
    category: "accessories",
    type: "watches",
    price: 3299,
    mrp: 4999,
    rating: 4.7,
    reviews: "1.6k",
    discount: "34% off",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A premium chronograph with a clean dial, polished case, and everyday comfort.",
    delivery: "Delivery by tomorrow",
    offer: "Free premium strap adjustment",
    highlights: ["Quartz movement", "Scratch-resistant glass", "Date display", "Water resistant design"],
    included: ["1 watch", "1 warranty card", "1 premium box"],
    specs: [
      ["Case", "42 mm"],
      ["Strap", "Stainless steel"],
      ["Weight", "Lightweight wear"],
      ["Warranty", "12 months"],
    ],
  },
  {
    id: "a2",
    name: "Everyday Sunglasses",
    category: "accessories",
    type: "eyewear",
    price: 1499,
    mrp: 2499,
    rating: 4.4,
    reviews: "980",
    discount: "40% off",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=60",
    ],
    description: "Lightweight sunglasses with a modern frame and strong UV protection.",
    delivery: "Delivery by Monday",
    offer: "Protective case included",
    highlights: ["UV400 lenses", "Lightweight frame", "Comfort-fit nose pads", "Scratch guard coating"],
    included: ["1 sunglasses pair", "1 hard case", "1 cleaning cloth"],
    specs: [
      ["Lens", "UV400"],
      ["Frame", "Polycarbonate"],
      ["Style", "Unisex"],
      ["Warranty", "6 months"],
    ],
  },
  {
    id: "a3",
    name: "Leather Sling Bag",
    category: "accessories",
    type: "bags",
    price: 2199,
    mrp: 3699,
    rating: 4.6,
    reviews: "1.1k",
    discount: "41% off",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A structured everyday bag with enough room for essentials and a smart finish.",
    delivery: "Delivery by Wednesday",
    offer: "Rain-safe lining",
    highlights: ["Adjustable strap", "Organized pockets", "Soft-touch finish", "Secure zip closure"],
    included: ["1 sling bag", "1 shoulder strap", "1 dust cover"],
    specs: [
      ["Material", "PU leather"],
      ["Capacity", "Medium"],
      ["Compartment", "3"],
      ["Warranty", "12 months"],
    ],
  },
  {
    id: "a4",
    name: "Slim Leather Wallet",
    category: "accessories",
    type: "wallets",
    price: 899,
    mrp: 1499,
    rating: 4.3,
    reviews: "740",
    discount: "40% off",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1609234655815-8e2f6ed2c3fb?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b8?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A compact wallet with clean stitching, card storage, and a thin profile.",
    delivery: "Delivery by Friday",
    offer: "Gift-ready packaging",
    highlights: ["Slim profile", "6 card slots", "Coin pocket", "Soft finish"],
    included: ["1 wallet", "1 gift box"],
    specs: [
      ["Material", "Genuine leather"],
      ["Slots", "6 card"],
      ["Color", "Brown"],
      ["Warranty", "6 months"],
    ],
  },
  {
    id: "a5",
    name: "Gold Tone Hoop Set",
    category: "accessories",
    type: "jewelry",
    price: 1199,
    mrp: 1899,
    rating: 4.5,
    reviews: "620",
    discount: "37% off",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1629224316810-9e8d7a7a8e8b?auto=format&fit=crop&w=700&q=60",
    ],
    description: "Elegant hoop earrings with a polished finish for daily and evening looks.",
    delivery: "Delivery by tomorrow",
    offer: "Tarnish-resistant finish",
    highlights: ["Lightweight wear", "Hypoallergenic", "Polished look", "Everyday styling"],
    included: ["1 pair earrings", "1 box"],
    specs: [
      ["Finish", "Gold tone"],
      ["Style", "Hoop"],
      ["Material", "Alloy"],
      ["Warranty", "3 months"],
    ],
  },
  {
    id: "f1",
    name: "Linen Casual Shirt",
    category: "fashion",
    type: "apparel",
    price: 999,
    mrp: 1799,
    rating: 4.4,
    reviews: "1.2k",
    discount: "44% off",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A breathable shirt with a relaxed fit for everyday casual wear.",
    delivery: "Delivery by Wednesday",
    offer: "Pair with denim for a clean look",
    highlights: ["Breathable fabric", "Relaxed fit", "Easy-care finish", "Versatile styling"],
    included: ["1 shirt", "1 tag set"],
    specs: [
      ["Fabric", "Linen blend"],
      ["Fit", "Relaxed"],
      ["Sleeve", "Full"],
      ["Care", "Machine wash"],
    ],
  },
  {
    id: "f2",
    name: "Relaxed Hoodie",
    category: "fashion",
    type: "apparel",
    price: 1299,
    mrp: 2499,
    rating: 4.5,
    reviews: "860",
    discount: "48% off",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=60",
    ],
    description: "Soft fleece hoodie designed for travel, layering, and cool evenings.",
    delivery: "Delivery by Thursday",
    offer: "Winter-friendly layering",
    highlights: ["Brushed fleece", "Kangaroo pocket", "Rib cuffs", "Comfort fit"],
    included: ["1 hoodie", "1 brand tag"],
    specs: [
      ["Fabric", "Cotton fleece"],
      ["Fit", "Regular"],
      ["Season", "All weather"],
      ["Care", "Cold wash"],
    ],
  },
  {
    id: "f3",
    name: "Straight Fit Jeans",
    category: "fashion",
    type: "denim",
    price: 1499,
    mrp: 2299,
    rating: 4.4,
    reviews: "1.0k",
    discount: "35% off",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=60",
    ],
    description: "Everyday denim with a balanced straight fit and durable stitching.",
    delivery: "Delivery by Friday",
    offer: "Built for daily wear",
    highlights: ["Straight silhouette", "Durable denim", "Five-pocket build", "Mid-rise fit"],
    included: ["1 jeans", "1 care card"],
    specs: [
      ["Fabric", "Denim"],
      ["Fit", "Straight"],
      ["Rise", "Mid"],
      ["Care", "Machine wash"],
    ],
  },
  {
    id: "f4",
    name: "Cotton Kurta Set",
    category: "fashion",
    type: "apparel",
    price: 1699,
    mrp: 2799,
    rating: 4.6,
    reviews: "1.4k",
    discount: "39% off",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=60",
    ],
    description: "A breathable kurta set with a polished everyday ethnic look.",
    delivery: "Delivery by Tuesday",
    offer: "Soft cotton comfort",
    highlights: ["Breathable cotton", "Ethnic styling", "Easy movement", "Soft finish"],
    included: ["1 kurta", "1 bottom wear", "1 dupatta"],
    specs: [
      ["Fabric", "Cotton"],
      ["Fit", "Regular"],
      ["Style", "Ethnic"],
      ["Care", "Gentle wash"],
    ],
  },
  {
    id: "f5",
    name: "Everyday Sneakers",
    category: "fashion",
    type: "footwear",
    price: 1799,
    mrp: 2999,
    rating: 4.5,
    reviews: "2.0k",
    discount: "40% off",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=60",
    ],
    description: "Comfort-first sneakers with a cushioned sole and clean daily styling.",
    delivery: "Delivery by tomorrow",
    offer: "Soft sole comfort",
    highlights: ["Cushioned sole", "Breathable upper", "Everyday grip", "Lightweight build"],
    included: ["1 pair sneakers", "1 box", "1 extra lace set"],
    specs: [
      ["Upper", "Fabric mesh"],
      ["Sole", "Rubber"],
      ["Fit", "True to size"],
      ["Care", "Wipe clean"],
    ],
  },
  {
    id: "p1",
    name: "Purple Pro iPhone",
    category: "electronics",
    type: "smartphone",
    price: 1299,
    mrp: 1599,
    rating: 4.8,
    reviews: "2.4k",
    discount: "19% off",
    image: "7.jpg",
    gallery: ["7.jpg", "1.png", "2.png", "3.png"],
    description: "A premium purple smartphone with a triple-camera design, vivid display, and all-day performance.",
    delivery: "Delivery by tomorrow",
    offer: "Free protective case",
    highlights: ["Triple camera system", "Vivid OLED display", "All-day battery", "Premium finish"],
    included: ["1 phone", "1 charging cable", "1 quick start guide"],
    specs: [["Price", "1299"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p2",
    name: "Galaxy Note Ultra",
    category: "electronics",
    type: "smartphone",
    price: 1199,
    mrp: 1499,
    rating: 4.7,
    reviews: "2.1k",
    discount: "20% off",
    image: "6.jpg",
    gallery: ["6.jpg", "5.jpg", "4.jpg", "3.png"],
    description: "A flagship-style Samsung phone with an S Pen, large display, and strong camera setup.",
    delivery: "Delivery by tomorrow",
    offer: "S Pen included",
    highlights: ["S Pen support", "Large AMOLED screen", "Multi-lens camera", "Fast charging"],
    included: ["1 phone", "1 stylus", "1 charging cable"],
    specs: [["Price", "1199"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p3",
    name: "Redmi Prime",
    category: "electronics",
    type: "smartphone",
    price: 899,
    mrp: 1099,
    rating: 4.5,
    reviews: "1.9k",
    discount: "18% off",
    image: "5.jpg",
    gallery: ["5.jpg", "4.jpg", "3.png", "2.png"],
    description: "A budget-friendly Redmi phone with a bright display, dependable battery, and everyday speed.",
    delivery: "Delivery by Monday",
    offer: "Value pack",
    highlights: ["Bright display", "Reliable battery", "Everyday performance", "Compact design"],
    included: ["1 phone", "1 charging cable", "1 user manual"],
    specs: [["Price", "899"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p4",
    name: "Vivo Y39 5G",
    category: "electronics",
    type: "smartphone",
    price: 999,
    mrp: 1199,
    rating: 4.6,
    reviews: "1.5k",
    discount: "17% off",
    image: "4.jpg",
    gallery: ["4.jpg", "3.png", "2.png", "1.png"],
    description: "A sleek Vivo 5G phone with a curved-style display and a refined purple finish.",
    delivery: "Delivery by Wednesday",
    offer: "5G ready",
    highlights: ["5G connectivity", "Curved aesthetic", "Fast app response", "Slim profile"],
    included: ["1 phone", "1 charging cable", "1 SIM ejector"],
    specs: [["Price", "999"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p5",
    name: "Oppo A60",
    category: "electronics",
    type: "smartphone",
    price: 949,
    mrp: 1149,
    rating: 4.5,
    reviews: "1.4k",
    discount: "17% off",
    image: "3.png",
    gallery: ["3.png", "2.png", "1.png", "7.jpg"],
    description: "An Oppo A60 handset with a clean display, modern camera module, and smooth daily use.",
    delivery: "Delivery by Wednesday",
    offer: "Camera-first design",
    highlights: ["Large screen", "Dual camera setup", "Smooth multitasking", "Elegant body"],
    included: ["1 phone", "1 charging cable", "1 quick guide"],
    specs: [["Price", "949"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p6",
    name: "Xiaomi 14",
    category: "electronics",
    type: "smartphone",
    price: 1399,
    mrp: 1699,
    rating: 4.8,
    reviews: "1.8k",
    discount: "18% off",
    image: "2.png",
    gallery: ["2.png", "1.png", "7.jpg", "6.jpg"],
    description: "A compact Xiaomi flagship with Leica-branded camera styling and a vibrant display.",
    delivery: "Delivery by tomorrow",
    offer: "Leica-inspired imaging",
    highlights: ["Premium camera layout", "Vibrant screen", "Fast charging", "Flagship feel"],
    included: ["1 phone", "1 charger", "1 cable"],
    specs: [["Price", "1399"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p7",
    name: "Pixel Duo",
    category: "electronics",
    type: "smartphone",
    price: 1249,
    mrp: 1499,
    rating: 4.7,
    reviews: "1.3k",
    discount: "17% off",
    image: "1.png",
    gallery: ["1.png", "7.jpg", "6.jpg", "5.jpg"],
    description: "A clean Google-style phone with a minimal look, smart camera bar, and balanced performance.",
    delivery: "Delivery by Friday",
    offer: "Smart camera experience",
    highlights: ["Minimal design", "AI photo tools", "Smooth interface", "Balanced battery life"],
    included: ["1 phone", "1 cable", "1 SIM tool"],
    specs: [["Price", "1249"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p8",
    name: "Huawei Mate Fold",
    category: "electronics",
    type: "foldable phone",
    price: 1799,
    mrp: 2199,
    rating: 4.7,
    reviews: "980",
    discount: "18% off",
    image: "8.jpg",
    gallery: ["8.jpg", "9.jpg", "10.jpg", "7.jpg"],
    description: "A luxury foldable Huawei phone with a leather finish and a large unfolding screen.",
    delivery: "Delivery by Friday",
    offer: "Premium foldable design",
    highlights: ["Foldable display", "Luxury finish", "Large inner screen", "Statement design"],
    included: ["1 foldable phone", "1 charging cable", "1 case"],
    specs: [["Price", "1799"], ["Category", "Electronics"], ["Type", "Foldable phone"], ["Warranty", "12 months"]],
  },
  {
    id: "p9",
    name: "Huawei Pura Red",
    category: "electronics",
    type: "smartphone",
    price: 1699,
    mrp: 2099,
    rating: 4.7,
    reviews: "1.1k",
    discount: "19% off",
    image: "9.jpg",
    gallery: ["9.jpg", "8.jpg", "10.jpg", "7.jpg"],
    description: "A red Huawei handset with a bold camera triangle and a polished flagship look.",
    delivery: "Delivery by Friday",
    offer: "Bold color edition",
    highlights: ["Distinctive camera layout", "Premium red finish", "High-end look", "Fast charging"],
    included: ["1 phone", "1 charger", "1 cable"],
    specs: [["Price", "1699"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p10",
    name: "Infinix Neo",
    category: "electronics",
    type: "smartphone",
    price: 799,
    mrp: 999,
    rating: 4.4,
    reviews: "1.7k",
    discount: "20% off",
    image: "10.jpg",
    gallery: ["10.jpg", "9.jpg", "8.jpg", "7.jpg"],
    description: "A practical Infinix phone with a large display, generous battery, and everyday value.",
    delivery: "Delivery by Monday",
    offer: "Value performance",
    highlights: ["Large display", "Battery-focused", "Smooth everyday use", "Budget friendly"],
    included: ["1 phone", "1 cable", "1 charger"],
    specs: [["Price", "799"], ["Category", "Electronics"], ["Type", "Smartphone"], ["Warranty", "12 months"]],
  },
  {
    id: "p11",
    name: "Windows 11 Notebook",
    category: "electronics",
    type: "laptop",
    price: 2499,
    mrp: 3199,
    rating: 4.6,
    reviews: "1.2k",
    discount: "22% off",
    image: "11.jpg",
    gallery: ["11.jpg", "12.jpg", "13.jpg", "14.jpg"],
    description: "A slim Windows 11 laptop for work, study, streaming, and everyday productivity.",
    delivery: "Delivery by Tuesday",
    offer: "Windows ready",
    highlights: ["Full HD screen", "Comfort keyboard", "Portable body", "Everyday productivity"],
    included: ["1 laptop", "1 charger", "1 user guide"],
    specs: [["Price", "2499"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p12",
    name: "MacBook Air Style",
    category: "electronics",
    type: "laptop",
    price: 3299,
    mrp: 3999,
    rating: 4.8,
    reviews: "1.5k",
    discount: "18% off",
    image: "12.jpg",
    gallery: ["12.jpg", "11.jpg", "13.jpg", "14.jpg"],
    description: "A sleek silver notebook inspired by the MacBook Air form factor with clean everyday styling.",
    delivery: "Delivery by Tuesday",
    offer: "Ultra-slim body",
    highlights: ["Slim aluminum body", "Quiet operation", "Lightweight design", "Portable setup"],
    included: ["1 laptop", "1 charger", "1 cable"],
    specs: [["Price", "3299"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p13",
    name: "HP Pavilion Violet",
    category: "electronics",
    type: "laptop",
    price: 2199,
    mrp: 2799,
    rating: 4.5,
    reviews: "940",
    discount: "21% off",
    image: "13.jpg",
    gallery: ["13.jpg", "12.jpg", "11.jpg", "14.jpg"],
    description: "A purple HP laptop with a clean finish for classes, home office work, and casual use.",
    delivery: "Delivery by Thursday",
    offer: "Student-friendly design",
    highlights: ["Balanced performance", "Violet finish", "Comfort typing", "Daily productivity"],
    included: ["1 laptop", "1 charger", "1 guide"],
    specs: [["Price", "2199"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p14",
    name: "ASUS SlimBook",
    category: "electronics",
    type: "laptop",
    price: 2399,
    mrp: 2999,
    rating: 4.6,
    reviews: "1.0k",
    discount: "20% off",
    image: "14.jpg",
    gallery: ["14.jpg", "13.jpg", "12.jpg", "11.jpg"],
    description: "A dark blue ASUS laptop built for everyday work with a refined metallic finish.",
    delivery: "Delivery by Thursday",
    offer: "Work-ready laptop",
    highlights: ["Metallic finish", "Slim profile", "Good multitasking", "Reliable build"],
    included: ["1 laptop", "1 charger", "1 warranty card"],
    specs: [["Price", "2399"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p15",
    name: "ROG Creator Edition",
    category: "electronics",
    type: "gaming laptop",
    price: 3999,
    mrp: 4999,
    rating: 4.8,
    reviews: "860",
    discount: "20% off",
    image: "15.jpg",
    gallery: ["15.jpg", "16.jpg", "17.jpg", "19.jpg"],
    description: "A white ASUS ROG-style gaming laptop with high-performance hardware and an aggressive look.",
    delivery: "Delivery by Saturday",
    offer: "Performance edition",
    highlights: ["Gaming-ready design", "High-performance cooling", "RGB style", "Fast processing"],
    included: ["1 gaming laptop", "1 charger", "1 quick guide"],
    specs: [["Price", "3999"], ["Category", "Electronics"], ["Type", "Gaming laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p16",
    name: "Acer Predator Max",
    category: "electronics",
    type: "gaming laptop",
    price: 4299,
    mrp: 5299,
    rating: 4.7,
    reviews: "790",
    discount: "19% off",
    image: "16.jpg",
    gallery: ["16.jpg", "15.jpg", "17.jpg", "19.jpg"],
    description: "A black gaming laptop with angular styling, bold vents, and a performance-first build.",
    delivery: "Delivery by Saturday",
    offer: "Built for gaming",
    highlights: ["Aggressive cooling", "Gaming keyboard", "Strong graphics look", "Heavy-duty chassis"],
    included: ["1 gaming laptop", "1 charger", "1 guide"],
    specs: [["Price", "4299"], ["Category", "Electronics"], ["Type", "Gaming laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p17",
    name: "ASUS TUF Gaming",
    category: "electronics",
    type: "gaming laptop",
    price: 4499,
    mrp: 5499,
    rating: 4.8,
    reviews: "1.1k",
    discount: "18% off",
    image: "17.jpg",
    gallery: ["17.jpg", "16.jpg", "15.jpg", "19.jpg"],
    description: "A rugged TUF gaming laptop with a bold lid, orange-lit keyboard, and all-round power.",
    delivery: "Delivery by Sunday",
    offer: "TUF durability",
    highlights: ["Military-style design", "Backlit keyboard", "Durable build", "Gaming focus"],
    included: ["1 gaming laptop", "1 charger", "1 warranty card"],
    specs: [["Price", "4499"], ["Category", "Electronics"], ["Type", "Gaming laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p18",
    name: "HP Victus Gaming",
    category: "electronics",
    type: "gaming laptop",
    price: 3599,
    mrp: 4399,
    rating: 4.6,
    reviews: "1.0k",
    discount: "18% off",
    image: "18.jpg",
    gallery: ["18.jpg", "19.jpg", "17.jpg", "16.jpg"],
    description: "A slim black HP Victus laptop aimed at gaming and fast everyday work sessions.",
    delivery: "Delivery by Sunday",
    offer: "Slim gaming profile",
    highlights: ["Victus design", "Portable gaming", "Fast refresh look", "Simple black finish"],
    included: ["1 laptop", "1 charger", "1 manual"],
    specs: [["Price", "3599"], ["Category", "Electronics"], ["Type", "Gaming laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p19",
    name: "MSI Pulse Gaming",
    category: "electronics",
    type: "gaming laptop",
    price: 3899,
    mrp: 4799,
    rating: 4.7,
    reviews: "930",
    discount: "19% off",
    image: "19.jpg",
    gallery: ["19.jpg", "18.jpg", "17.jpg", "16.jpg"],
    description: "A powerful MSI gaming laptop with rainbow keys, a sharp display, and a performance build.",
    delivery: "Delivery by Sunday",
    offer: "RGB gaming package",
    highlights: ["RGB keyboard", "Gaming chassis", "Performance cooling", "Immersive display"],
    included: ["1 gaming laptop", "1 charger", "1 warranty card"],
    specs: [["Price", "3899"], ["Category", "Electronics"], ["Type", "Gaming laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p20",
    name: "MacBook Air Blue",
    category: "electronics",
    type: "laptop",
    price: 2699,
    mrp: 3299,
    rating: 4.8,
    reviews: "1.4k",
    discount: "18% off",
    image: "1.png",
    gallery: ["1.png", "2.png", "3.png", "4.jpg"],
    description: "A slim blue laptop with a clean display, lightweight body, and everyday portability.",
    delivery: "Delivery by Thursday",
    offer: "Portable productivity",
    highlights: ["Lightweight body", "Slim bezels", "Comfort keyboard", "Good battery life"],
    included: ["1 laptop", "1 charger"],
    specs: [["Price", "2699"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p21",
    name: "Classic Leather Wallet",
    category: "accessories",
    type: "wallet",
    price: 799,
    mrp: 1199,
    rating: 4.4,
    reviews: "1.3k",
    discount: "33% off",
    image: "2.png",
    gallery: ["2.png", "3.png", "4.jpg", "5.jpg"],
    description: "A brown leather wallet with a simple fold design and room for everyday cards and cash.",
    delivery: "Delivery by Monday",
    offer: "Everyday carry",
    highlights: ["Slim fold", "Card slots", "Cash pocket", "Soft leather finish"],
    included: ["1 wallet"],
    specs: [["Price", "799"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p22",
    name: "Premium Brown Wallet",
    category: "accessories",
    type: "wallet",
    price: 899,
    mrp: 1299,
    rating: 4.5,
    reviews: "1.1k",
    discount: "31% off",
    image: "3.png",
    gallery: ["3.png", "4.jpg", "5.jpg", "6.jpg"],
    description: "A refined brown wallet with multiple slots, a sturdy build, and a polished everyday look.",
    delivery: "Delivery by Monday",
    offer: "Gift-ready finish",
    highlights: ["Multiple slots", "Durable stitching", "Soft grain texture", "Compact shape"],
    included: ["1 wallet"],
    specs: [["Price", "899"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p23",
    name: "Slim Black Wallet",
    category: "accessories",
    type: "wallet",
    price: 749,
    mrp: 1099,
    rating: 4.5,
    reviews: "980",
    discount: "32% off",
    image: "4.jpg",
    gallery: ["4.jpg", "5.jpg", "6.jpg", "7.jpg"],
    description: "A black wallet with a slim profile, practical card storage, and a premium minimalist finish.",
    delivery: "Delivery by Tuesday",
    offer: "Minimal carry",
    highlights: ["Slim profile", "Card storage", "Easy pocket fit", "Clean finish"],
    included: ["1 wallet"],
    specs: [["Price", "749"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p24",
    name: "Green Card Wallet",
    category: "accessories",
    type: "wallet",
    price: 699,
    mrp: 999,
    rating: 4.3,
    reviews: "860",
    discount: "30% off",
    image: "5.jpg",
    gallery: ["5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    description: "A compact green wallet with quick-access card pockets and a clean everyday design.",
    delivery: "Delivery by Tuesday",
    offer: "Compact carry",
    highlights: ["Quick card access", "Soft texture", "Compact shape", "Organized layout"],
    included: ["1 wallet"],
    specs: [["Price", "699"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p25",
    name: "Navy Card Holder",
    category: "accessories",
    type: "wallet",
    price: 649,
    mrp: 949,
    rating: 4.3,
    reviews: "770",
    discount: "32% off",
    image: "6.jpg",
    gallery: ["6.jpg", "7.jpg", "8.jpg", "9.jpg"],
    description: "A dark navy card holder for carrying essentials in a slim, modern profile.",
    delivery: "Delivery by Wednesday",
    offer: "Pocket-friendly style",
    highlights: ["Ultra slim", "Secure card slots", "Clean stitching", "Lightweight build"],
    included: ["1 card holder"],
    specs: [["Price", "649"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p26",
    name: "Suede Brown Belt",
    category: "accessories",
    type: "belt",
    price: 599,
    mrp: 899,
    rating: 4.4,
    reviews: "1.0k",
    discount: "33% off",
    image: "7.jpg",
    gallery: ["7.jpg", "8.jpg", "9.jpg", "10.jpg"],
    description: "A brown suede belt with a clean buckle and a versatile finish for daily wear.",
    delivery: "Delivery by Wednesday",
    offer: "Wardrobe staple",
    highlights: ["Soft suede look", "Versatile style", "Strong buckle", "Comfort fit"],
    included: ["1 belt"],
    specs: [["Price", "599"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p27",
    name: "Formal Black Belt",
    category: "accessories",
    type: "belt",
    price: 699,
    mrp: 999,
    rating: 4.5,
    reviews: "920",
    discount: "30% off",
    image: "8.jpg",
    gallery: ["8.jpg", "9.jpg", "10.jpg", "1.png"],
    description: "A classic black formal belt with a polished buckle and a clean office-ready finish.",
    delivery: "Delivery by Thursday",
    offer: "Office essential",
    highlights: ["Formal design", "Polished buckle", "Durable strap", "Easy pairing"],
    included: ["1 belt"],
    specs: [["Price", "699"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p28",
    name: "Brown Casual Belt",
    category: "accessories",
    type: "belt",
    price: 649,
    mrp: 949,
    rating: 4.4,
    reviews: "840",
    discount: "32% off",
    image: "9.jpg",
    gallery: ["9.jpg", "10.jpg", "1.png", "2.png"],
    description: "A brown everyday belt with a smooth strap and a simple buckle for casual outfits.",
    delivery: "Delivery by Thursday",
    offer: "Casual everyday wear",
    highlights: ["Smooth strap", "Simple buckle", "Flexible fit", "Daily use"],
    included: ["1 belt"],
    specs: [["Price", "649"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p29",
    name: "Textured Brown Belt",
    category: "accessories",
    type: "belt",
    price: 729,
    mrp: 1049,
    rating: 4.5,
    reviews: "890",
    discount: "31% off",
    image: "10.jpg",
    gallery: ["10.jpg", "1.png", "2.png", "3.png"],
    description: "A textured brown belt with a premium buckle and a rugged look that still feels refined.",
    delivery: "Delivery by Friday",
    offer: "Premium texture",
    highlights: ["Textured finish", "Strong buckle", "Dress-up or down", "Comfort fit"],
    included: ["1 belt"],
    specs: [["Price", "729"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p30",
    name: "Burgundy Dress Belt",
    category: "accessories",
    type: "belt",
    price: 759,
    mrp: 1099,
    rating: 4.5,
    reviews: "760",
    discount: "31% off",
    image: "1.png",
    gallery: ["1.png", "3.png", "5.jpg", "7.jpg"],
    description: "A burgundy dress belt with a sleek buckle and a stylish finish for formal outfits.",
    delivery: "Delivery by Friday",
    offer: "Sharp formal look",
    highlights: ["Dressy finish", "Polished buckle", "Rich color", "Long-wear comfort"],
    included: ["1 belt"],
    specs: [["Price", "759"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p31",
    name: "Kids Denim Belt",
    category: "accessories",
    type: "belt",
    price: 499,
    mrp: 799,
    rating: 4.3,
    reviews: "640",
    discount: "38% off",
    image: "2.png",
    gallery: ["2.png", "4.jpg", "6.jpg", "8.jpg"],
    description: "A casual kids belt with a flexible strap and an easy buckle for everyday wear.",
    delivery: "Delivery by Saturday",
    offer: "Kids casual wear",
    highlights: ["Flexible strap", "Easy buckle", "Comfortable fit", "Daily durability"],
    included: ["1 belt"],
    specs: [["Price", "499"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p32",
    name: "Classic Brown Belt",
    category: "accessories",
    type: "belt",
    price: 679,
    mrp: 979,
    rating: 4.4,
    reviews: "800",
    discount: "31% off",
    image: "3.png",
    gallery: ["3.png", "5.jpg", "7.jpg", "9.jpg"],
    description: "A dependable brown leather belt with a balanced profile for casual and formal outfits.",
    delivery: "Delivery by Saturday",
    offer: "All-round use",
    highlights: ["Classic profile", "Durable leather look", "Easy pairing", "Reliable buckle"],
    included: ["1 belt"],
    specs: [["Price", "679"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p33",
    name: "Street Style Belt",
    category: "accessories",
    type: "belt",
    price: 589,
    mrp: 849,
    rating: 4.3,
    reviews: "710",
    discount: "31% off",
    image: "4.jpg",
    gallery: ["4.jpg", "6.jpg", "8.jpg", "10.jpg"],
    description: "A casual street-style belt with a modern buckle and an easy everyday feel.",
    delivery: "Delivery by Sunday",
    offer: "Street-ready style",
    highlights: ["Modern buckle", "Casual styling", "Comfort fit", "Simple wear"],
    included: ["1 belt"],
    specs: [["Price", "589"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p34",
    name: "Minimal Black Belt",
    category: "accessories",
    type: "belt",
    price: 639,
    mrp: 929,
    rating: 4.4,
    reviews: "690",
    discount: "31% off",
    image: "5.jpg",
    gallery: ["5.jpg", "7.jpg", "9.jpg", "1.png"],
    description: "A minimal black belt with a clean buckle, soft lining, and a versatile wardrobe-friendly look.",
    delivery: "Delivery by Sunday",
    offer: "Minimal wardrobe essential",
    highlights: ["Minimal design", "Soft lining", "Versatile black tone", "Secure buckle"],
    included: ["1 belt"],
    specs: [["Price", "639"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p35",
    name: "Blade Edge Laptop",
    category: "electronics",
    type: "laptop",
    price: 2899,
    mrp: 3499,
    rating: 4.7,
    reviews: "1.2k",
    discount: "17% off",
    image: "6.jpg",
    gallery: ["6.jpg", "8.jpg", "10.jpg", "2.png"],
    description: "A slim performance laptop with a sharp blue display, lightweight build, and modern everyday design.",
    delivery: "Delivery by Thursday",
    offer: "Portable performance",
    highlights: ["Slim profile", "Bright display", "Lightweight body", "Daily productivity"],
    included: ["1 laptop", "1 charger"],
    specs: [["Price", "2899"], ["Category", "Electronics"], ["Type", "Laptop"], ["Warranty", "12 months"]],
  },
  {
    id: "p36",
    name: "Luxury Black Wallet",
    category: "accessories",
    type: "wallet",
    price: 849,
    mrp: 1249,
    rating: 4.5,
    reviews: "1.0k",
    discount: "32% off",
    image: "7.jpg",
    gallery: ["7.jpg", "9.jpg", "1.png", "3.png"],
    description: "A premium black leather wallet with neat stitching, multiple slots, and a clean fold design.",
    delivery: "Delivery by Monday",
    offer: "Gift-ready wallet",
    highlights: ["Premium leather look", "Card slots", "Cash pocket", "Smooth finish"],
    included: ["1 wallet"],
    specs: [["Price", "849"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p37",
    name: "Executive Brown Wallet",
    category: "accessories",
    type: "wallet",
    price: 899,
    mrp: 1299,
    rating: 4.5,
    reviews: "920",
    discount: "31% off",
    image: "8.jpg",
    gallery: ["8.jpg", "10.jpg", "2.png", "4.jpg"],
    description: "An executive-style brown wallet with a polished finish and organized storage for daily carry.",
    delivery: "Delivery by Tuesday",
    offer: "Office essential",
    highlights: ["Organized layout", "Premium finish", "Slim carry", "Durable stitching"],
    included: ["1 wallet"],
    specs: [["Price", "899"], ["Category", "Accessories"], ["Type", "Wallet"], ["Warranty", "6 months"]],
  },
  {
    id: "p38",
    name: "Designer Brown Belt",
    category: "accessories",
    type: "belt",
    price: 729,
    mrp: 1049,
    rating: 4.4,
    reviews: "870",
    discount: "31% off",
    image: "9.jpg",
    gallery: ["9.jpg", "1.png", "3.png", "5.jpg"],
    description: "A designer brown belt with a glossy buckle and a refined look for everyday and formal wear.",
    delivery: "Delivery by Wednesday",
    offer: "Refined daily wear",
    highlights: ["Glossy buckle", "Refined finish", "Comfort fit", "Versatile styling"],
    included: ["1 belt"],
    specs: [["Price", "729"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p39",
    name: "Black Formal Belt",
    category: "accessories",
    type: "belt",
    price: 699,
    mrp: 999,
    rating: 4.5,
    reviews: "980",
    discount: "30% off",
    image: "10.jpg",
    gallery: ["10.jpg", "2.png", "4.jpg", "6.jpg"],
    description: "A polished black formal belt with a sharp buckle and a presentable finish for office wear.",
    delivery: "Delivery by Wednesday",
    offer: "Formal staple",
    highlights: ["Sharp buckle", "Office-ready", "Durable strap", "Easy to match"],
    included: ["1 belt"],
    specs: [["Price", "699"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p40",
    name: "Monogram Black Belt",
    category: "accessories",
    type: "belt",
    price: 759,
    mrp: 1099,
    rating: 4.5,
    reviews: "860",
    discount: "31% off",
    image: "1.png",
    gallery: ["1.png", "4.jpg", "7.jpg", "10.jpg"],
    description: "A black belt with a bold monogram buckle and a premium logo-inspired look.",
    delivery: "Delivery by Thursday",
    offer: "Statement accessory",
    highlights: ["Bold buckle", "Premium styling", "Daily durability", "Modern design"],
    included: ["1 belt"],
    specs: [["Price", "759"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
  {
    id: "p41",
    name: "Heritage Brown Belt",
    category: "accessories",
    type: "belt",
    price: 679,
    mrp: 969,
    rating: 4.4,
    reviews: "790",
    discount: "30% off",
    image: "2.png",
    gallery: ["2.png", "5.jpg", "8.jpg", "10.jpg"],
    description: "A heritage-style brown belt with a classic buckle and a clean look that works anywhere.",
    delivery: "Delivery by Thursday",
    offer: "Classic everyday belt",
    highlights: ["Classic buckle", "Smooth strap", "Versatile finish", "Comfortable wear"],
    included: ["1 belt"],
    specs: [["Price", "679"], ["Category", "Accessories"], ["Type", "Belt"], ["Warranty", "6 months"]],
  },
];

const UNIQUE_PRODUCT_IMAGES = Array.from({ length: 100 }, (_, index) => `product-image/${index + 1}.jpg`);

const PRODUCT_BLUEPRINTS = [
  {
    category: "accessories",
    type: "watch",
    namePrefix: "Signature Watch",
    description: "A polished everyday watch with a clean face, dependable build, and balanced styling.",
    highlights: ["Clean dial", "Comfort fit", "Daily wear", "Gift ready"],
    included: ["1 watch", "1 box"],
    specs: [
      ["Category", "Accessories"],
      ["Type", "Watch"],
      ["Warranty", "12 months"],
      ["Use", "Daily wear"],
    ],
  },
  {
    category: "accessories",
    type: "wallet",
    namePrefix: "Slim Wallet",
    description: "A compact wallet with card slots, neat stitching, and an easy-carry profile.",
    highlights: ["Slim profile", "Card storage", "Cash pocket", "Soft finish"],
    included: ["1 wallet"],
    specs: [
      ["Category", "Accessories"],
      ["Type", "Wallet"],
      ["Warranty", "6 months"],
      ["Use", "Daily carry"],
    ],
  },
  {
    category: "fashion",
    type: "apparel",
    namePrefix: "Style Jacket",
    description: "A versatile fashion piece with a modern fit and comfortable all-day wear.",
    highlights: ["Modern fit", "Comfort wear", "Style focused", "Easy pairing"],
    included: ["1 apparel piece"],
    specs: [
      ["Category", "Fashion"],
      ["Type", "Apparel"],
      ["Warranty", "N/A"],
      ["Use", "Casual wear"],
    ],
  },
  {
    category: "fashion",
    type: "footwear",
    namePrefix: "Daily Sneakers",
    description: "Comfort-first sneakers made for walking, casual outfits, and all-day movement.",
    highlights: ["Cushioned sole", "Breathable upper", "Lightweight build", "Daily comfort"],
    included: ["1 pair sneakers"],
    specs: [
      ["Category", "Fashion"],
      ["Type", "Footwear"],
      ["Warranty", "3 months"],
      ["Use", "Casual wear"],
    ],
  },
  {
    category: "electronics",
    type: "smartphone",
    namePrefix: "Nova Phone",
    description: "A modern smartphone with a vivid display, smooth performance, and strong battery life.",
    highlights: ["Vivid display", "Fast response", "Strong battery", "Modern design"],
    included: ["1 phone", "1 charger"],
    specs: [
      ["Category", "Electronics"],
      ["Type", "Smartphone"],
      ["Warranty", "12 months"],
      ["Use", "Everyday phone"],
    ],
  },
  {
    category: "electronics",
    type: "laptop",
    namePrefix: "Aero Laptop",
    description: "A slim laptop for work, browsing, and streaming with a portable form factor.",
    highlights: ["Slim body", "Portable", "Comfort keyboard", "Work ready"],
    included: ["1 laptop", "1 charger"],
    specs: [
      ["Category", "Electronics"],
      ["Type", "Laptop"],
      ["Warranty", "12 months"],
      ["Use", "Study and work"],
    ],
  },
  {
    category: "electronics",
    type: "gaming laptop",
    namePrefix: "Titan Gaming",
    description: "A bold gaming laptop with aggressive styling and high-performance focus.",
    highlights: ["Gaming-ready", "Strong cooling", "Bold design", "High performance"],
    included: ["1 gaming laptop", "1 charger"],
    specs: [
      ["Category", "Electronics"],
      ["Type", "Gaming laptop"],
      ["Warranty", "12 months"],
      ["Use", "Gaming"],
    ],
  },
  {
    category: "accessories",
    type: "jewelry",
    namePrefix: "Royal Necklace",
    description: "An ornate jewelry piece with a premium look for special occasions and celebrations.",
    highlights: ["Ornate finish", "Occasion wear", "Premium look", "Gift worthy"],
    included: ["1 necklace"],
    specs: [
      ["Category", "Accessories"],
      ["Type", "Jewelry"],
      ["Warranty", "N/A"],
      ["Use", "Special occasions"],
    ],
  },
  {
    category: "accessories",
    type: "bag",
    namePrefix: "Urban Bag",
    description: "A practical everyday bag with organized compartments and a clean, modern look.",
    highlights: ["Organized pockets", "Modern look", "Daily use", "Durable build"],
    included: ["1 bag"],
    specs: [
      ["Category", "Accessories"],
      ["Type", "Bag"],
      ["Warranty", "6 months"],
      ["Use", "Daily carry"],
    ],
  },
];

const imageSeedCatalog = UNIQUE_PRODUCT_IMAGES.map((image, index) => {
  const blueprint = PRODUCT_BLUEPRINTS[index % PRODUCT_BLUEPRINTS.length];
  const number = String(index + 1).padStart(3, "0");
  const price = Math.round(499 + index * 41);
  const mrp = Math.round(price * 1.35);
  const discount = `${Math.max(8, Math.min(45, Math.round((1 - price / mrp) * 100)))}% off`;
  const rating = (4.2 + (index % 8) * 0.1).toFixed(1);
  const gallery = [
    image,
    UNIQUE_PRODUCT_IMAGES[(index + 1) % UNIQUE_PRODUCT_IMAGES.length],
    UNIQUE_PRODUCT_IMAGES[(index + 2) % UNIQUE_PRODUCT_IMAGES.length],
    UNIQUE_PRODUCT_IMAGES[(index + 3) % UNIQUE_PRODUCT_IMAGES.length],
  ];
  return {
    id: `p${number}`,
    name: `${blueprint.namePrefix} ${number}`,
    category: blueprint.category,
    type: blueprint.type,
    price,
    mrp,
    rating: Number(rating),
    reviews: `${(820 + index * 17).toLocaleString("en-IN")}`,
    discount,
    image,
    gallery,
    description: blueprint.description,
    delivery: index % 2 === 0 ? "Delivery by tomorrow" : "Delivery by Tuesday",
    offer: index % 3 === 0 ? "Best value offer" : "Limited time offer",
    highlights: blueprint.highlights,
    included: blueprint.included,
    specs: blueprint.specs,
  };
});

productData.length = 0;
productData.push(...imageSeedCatalog);

function mergeSeedCatalog() {
  const catalogById = new Map(state.catalog.map((item) => [item.id, item]));
  let changed = false;
  productData.forEach((product) => {
    if (!catalogById.has(product.id)) {
      state.catalog.unshift({ ...product });
      changed = true;
    } else {
      Object.assign(catalogById.get(product.id), product);
      changed = true;
    }
  });
  if (changed) {
    persistCatalog();
  }
}

const ORDER_STAGES = ["Order placed", "Packed", "Shipped", "Out for delivery", "Delivered"];
const ADMIN_EMAILS = ["owner@example.com"];
const GOOGLE_CLIENT_ID = "";
const API_BASE_URL = window.VALVA_API_BASE_URL || "";
const UPI_MERCHANT_VPA = window.VALVA_UPI_VPA || "7904564217@ptyes@upi";
const UPI_APP_PACKAGES = {
  phonepe: "com.phonepe.app",
  gpay: "com.google.android.apps.nbu.paisa.user",
  paytm: "net.one97.paytm",
  bhim: "in.org.npci.upiapp",
};
const UPI_APPS = [
  { id: "phonepe", name: "PhonePe", short: "P", note: "Fast UPI approval" },
  { id: "gpay", name: "Google Pay", short: "G", note: "Trusted UPI app" },
  { id: "paytm", name: "Paytm", short: "T", note: "UPI and wallet" },
  { id: "bhim", name: "BHIM", short: "B", note: "NPCI powered UPI" },
];

function upiAppLabel(id) {
  return UPI_APPS.find((app) => app.id === id)?.name || id || "UPI";
}

function buildUpiPaymentUrl(appId) {
  const { subtotal, total } = cartStats();
  const shipping = subtotal > 0 ? 3 : 0;
  const payable = Math.max(1, total + shipping);
  const params = new URLSearchParams({
    pa: UPI_MERCHANT_VPA,
    pn: "Valva Market",
    am: payable.toFixed(2),
    cu: "INR",
    tn: state.paymentDetails.note || `Order for ${state.profile.name || "customer"}`,
  });
  const packageName = UPI_APP_PACKAGES[appId];
  const query = params.toString();
  if (/Android/i.test(navigator.userAgent) && packageName) {
    return `intent://pay?${query}#Intent;scheme=upi;package=${packageName};end`;
  }
  return `upi://pay?${query}`;
}

function buildUpiQrImageUrl() {
  const upiUrl = buildUpiPaymentUrl("gpay");
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(upiUrl)}`;
}

function openUpiApp(appId) {
  state.paymentDetails.upiApp = appId;
  localStorage.setItem("valva-upi-app", appId);
}

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "");
}

const state = {
  view: "home",
  filter: "all",
  search: "",
  priceCap: 5000,
  activeProductId: productData[0].id,
  detailQty: 1,
  detailImageIndex: 0,
  catalog: (() => {
    const saved = JSON.parse(localStorage.getItem("valva-catalog") || "null");
    if (!Array.isArray(saved) || saved.length !== productData.length) {
      return productData.map((product) => ({ ...product }));
    }
    return saved.map((item, index) => ({
      ...productData[index],
      ...item,
      image: productData[index].image,
      gallery: [...productData[index].gallery],
    }));
  })(),
  cart: JSON.parse(localStorage.getItem("valour-cart") || localStorage.getItem("greencart-cart") || "[]"),
  profile:
    JSON.parse(localStorage.getItem("valour-profile") || localStorage.getItem("greencart-profile") || "null") || {
    name: "Guest User",
    email: "guest@example.com",
    phone: "7904564217",
    addresses: ["12/77a, I Block, Medavakkam, Chennai 600100"],
    orders: [],
    deliverySaved: false,
  },
  paymentMethod: "cod",
  paymentDetails: {
    upiApp: "phonepe",
    upiRef: "",
    mobile: "",
    note: "",
  },
  order: null,
  userFiltered: false,
  deliveryEditing: false,
  selectedOrderId: null,
  auth: JSON.parse(localStorage.getItem("valva-auth") || "null") || {
    signedIn: false,
    name: "",
    email: "",
    picture: "",
    role: "guest",
    provider: "google",
    token: "",
    serverVerified: false,
  },
};

const viewMap = [...document.querySelectorAll(".view")];
const chipMap = [...document.querySelectorAll(".chip")];
const searchInput = document.getElementById("searchInput");
const cartBadge = document.getElementById("cartBadge");
const cartBadgeDesktop = document.getElementById("cartBadgeDesktop");
const homeGrid = document.getElementById("homeGrid");
const cartList = document.getElementById("cartList");
const cartItemCount = document.getElementById("cartItemCount");
const cartTotal = document.getElementById("cartTotal");
const priceRange = document.getElementById("priceRange");
const priceRangeLabel = document.getElementById("priceRangeLabel");
const heroBanner = document.getElementById("heroBanner");
const detailName = document.getElementById("detailName");
const detailCategory = document.getElementById("detailCategory");
const detailImage = document.getElementById("detailImage");
const detailThumbs = document.getElementById("detailThumbs");
const detailRating = document.getElementById("detailRating");
const detailReviewCount = document.getElementById("detailReviewCount");
const detailPrice = document.getElementById("detailPrice");
const detailMrp = document.getElementById("detailMrp");
const detailDiscount = document.getElementById("detailDiscount");
const detailOffer = document.getElementById("detailOffer");
const detailDelivery = document.getElementById("detailDelivery");
const detailDescription = document.getElementById("detailDescription");
const detailHighlights = document.getElementById("detailHighlights");
const detailIncluded = document.getElementById("detailIncluded");
const detailSpecs = document.getElementById("detailSpecs");
const detailQtyMinus = document.getElementById("detailQtyMinus");
const detailQtyPlus = document.getElementById("detailQtyPlus");
const detailQtyValue = document.getElementById("detailQtyValue");
const addFromDetail = document.getElementById("addFromDetail");
const buyFromDetail = document.getElementById("buyFromDetail");
const addressName = document.getElementById("addressName");
const addressEmail = document.getElementById("addressEmail");
const addressPhone = document.getElementById("addressPhone");
const addressText = document.getElementById("addressText");
const deliveryAddressBody = document.getElementById("deliveryAddressBody");
const saveAddressBtn = document.getElementById("saveAddressBtn");
const orderSummary = document.getElementById("orderSummary");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const paymentFormBody = document.getElementById("paymentFormBody");
const timeline = document.getElementById("timeline");
const trackingEta = document.getElementById("trackingEta");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const savedAddresses = document.getElementById("savedAddresses");
const orderHistory = document.getElementById("orderHistory");
const selectedOrderDetails = document.getElementById("selectedOrderDetails");
const roleBadge = document.getElementById("roleBadge");
const authStatus = document.getElementById("authStatus");
const googleSignInButton = document.getElementById("googleSignInButton");
const ownerDashboard = document.getElementById("ownerDashboard");
const ownerProductForm = document.getElementById("ownerProductForm");
const ownerFormTitle = document.getElementById("ownerFormTitle");
const ownerProductId = document.getElementById("ownerProductId");
const ownerProductName = document.getElementById("ownerProductName");
const ownerProductCategory = document.getElementById("ownerProductCategory");
const ownerProductType = document.getElementById("ownerProductType");
const ownerProductPrice = document.getElementById("ownerProductPrice");
const ownerProductMrp = document.getElementById("ownerProductMrp");
const ownerProductImage = document.getElementById("ownerProductImage");
const ownerProductDescription = document.getElementById("ownerProductDescription");
const saveOwnerProductBtn = document.getElementById("saveOwnerProductBtn");
const resetOwnerFormBtn = document.getElementById("resetOwnerFormBtn");
const ownerCatalogList = document.getElementById("ownerCatalogList");
const ownerOrderList = document.getElementById("ownerOrderList");
const ownerPaymentDetails = document.getElementById("ownerPaymentDetails");
const logoutBtn = document.getElementById("logoutBtn");
const downloadCartSheetBtn = document.getElementById("downloadCartSheet");
const paymentCost = document.getElementById("paymentCost");
const paymentShipping = document.getElementById("paymentShipping");
const paymentGrandTotal = document.getElementById("paymentGrandTotal");

const heroSlides = Array.from({ length: 10 }, (_, index) => `ad-banner/${101 + index}.png`);
let heroSlideIndex = 0;
let heroTimer = null;

function money(v) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(state.auth.token ? { Authorization: `Bearer ${state.auth.token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "Request failed");
  }
  return payload;
}

function compressImageUrl(url, width) {
  if (/^https?:\/\//i.test(url)) {
    return url.replace(/w=\d+/g, `w=${width}`).replace(/q=\d+/g, "q=60");
  }
  return new URL(url, window.location.href).href;
}

function productImage(product, size = 700) {
  return compressImageUrl(product.image, size);
}

function startHeroRotation() {
  if (!heroBanner || heroSlides.length < 2) return;

  const preload = heroSlides.map((src) => {
    const image = new Image();
    image.src = src;
    return image;
  });

  const showSlide = (index) => {
    heroBanner.classList.add("is-fading");
    window.setTimeout(() => {
      heroBanner.src = heroSlides[index];
      heroBanner.alt = `Featured accessories showcase ${index + 1}`;
      heroBanner.classList.remove("is-fading");
    }, 180);
  };

  heroBanner.src = heroSlides[0];
  heroBanner.alt = "Featured accessories showcase 1";
  heroTimer = window.setInterval(() => {
    heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
    showSlide(heroSlideIndex);
  }, 2600);

  void preload;
}

function galleryImage(url, size = 700) {
  return compressImageUrl(url, size);
}

function adBannerImage(index = 0) {
  return heroSlides[index % heroSlides.length];
}

function productById(id) {
  return state.catalog.find((product) => product.id === id) || state.catalog[0] || productData[0];
}

function persistCatalog() {
  localStorage.setItem("valva-catalog", JSON.stringify(state.catalog));
}

function setView(view) {
  state.view = view;
  viewMap.forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  document.body.dataset.view = view;

  if (view === "checkout-address") {
    renderDeliveryAddress();
  }

  if (view === "checkout-confirm") {
    renderOrderSummary();
  }

  if (view === "tracking") {
    renderTracking();
  }

  if (view === "payment") {
    renderPaymentSummary();
    renderPaymentForm();
  }

  if (view === "profile") {
    renderProfile();
  }

  try {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch {
    window.scrollTo(0, 0);
  }
}

function setActiveChip(filter) {
  chipMap.forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === filter));
}

function filteredProducts() {
  const q = state.userFiltered
    ? (state.search || "").replace(/[\u200B-\u200D\uFEFF]/g, "").trim().toLowerCase()
    : "";
  return state.catalog.filter((product) => {
    const searchTarget = [product.name, product.category, product.type, product.description].join(" ").toLowerCase();
    const matchesSearch = !q || searchTarget.includes(q);
    const matchesFilter =
      state.filter === "all" ||
      product.category === state.filter ||
      product.type === state.filter;
    const matchesPrice = product.price <= state.priceCap;
    return matchesSearch && matchesFilter && matchesPrice;
  });
}

function productMarkup(product, index) {
  return `
    <article class="product-card">
      <button class="product-image" data-open-product="${product.id}" aria-label="Open ${product.name}">
        <img src="${productImage(product, 420)}" alt="${product.name}" loading="eager" decoding="async" />
      </button>
      <div class="product-body">
        <div class="card-kicker">${product.category}</div>
        <h3>${product.name}</h3>
        <span class="rating">&#9733; ${product.rating} (${product.reviews})</span>
        <div class="price-line">
          <strong>${money(product.price)}</strong>
          <del>${money(product.mrp)}</del>
          <span class="discount">${product.discount}</span>
        </div>
        <div class="card-actions">
          <button class="secondary-btn" data-add="${product.id}" type="button">Add to Cart</button>
          <button class="primary-btn" data-buy="${product.id}" type="button">Buy Now</button>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const list = filteredProducts();
  if (priceRangeLabel) {
    priceRangeLabel.textContent = `Under ${money(state.priceCap)}`;
  }
  const hasStrictFilters = state.userFiltered && (Boolean((state.search || "").trim()) || state.filter !== "all" || state.priceCap < 5000);
  const visibleProducts = hasStrictFilters ? list : state.catalog;
  if (visibleProducts.length) {
    const blocks = [];
    const itemsPerBanner = window.matchMedia("(max-width: 780px)").matches ? 6 : 5;
    visibleProducts.forEach((product, index) => {
      blocks.push(productMarkup(product, index));
      if ((index + 1) % itemsPerBanner === 0 && index !== visibleProducts.length - 1) {
        blocks.push(`
          <section class="inline-banner" aria-label="Advertisement banner">
            <div class="inline-banner-art" aria-hidden="true">
              <img src="${adBannerImage(index)}" alt="" loading="lazy" decoding="async" />
            </div>
          </section>
        `);
      }
    });
    homeGrid.innerHTML = blocks.join("");
  } else {
    homeGrid.innerHTML = `<div class="cart-empty">No products match this search or filter.</div>`;
  }

  homeGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add, 1, { openCart: true }));
  });

  homeGrid.querySelectorAll("[data-buy]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.buy, 1, { openCart: false });
      setView("cart");
    });
  });
}

function cartItems() {
  return state.cart
    .map((entry) => {
      const product = productById(entry.id);
      return product ? { ...product, qty: entry.qty } : null;
    })
    .filter(Boolean);
}

function cartStats() {
  const items = cartItems();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const mrpTotal = items.reduce((sum, item) => sum + item.mrp * item.qty, 0);
  const savings = Math.max(0, mrpTotal - subtotal);
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  return { items, subtotal, savings, count, total: subtotal };
}

function renderCart() {
  const { items, subtotal, savings, count, total } = cartStats();
  cartBadge.textContent = String(count);
  if (cartBadgeDesktop) {
    cartBadgeDesktop.textContent = String(count);
  }
  cartList.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="cart-item">
              <img src="${productImage(item, 420)}" alt="${item.name}" loading="lazy" decoding="async" />
              <div class="cart-item-body">
                <h3>${item.name}</h3>
                <p class="muted">${item.category} / ${item.type}</p>
                <div class="price-line">
                  <strong>${money(item.price)}</strong>
                  <del>${money(item.mrp)}</del>
                </div>
                <div class="qty">
                  <button data-qty="-1" data-id="${item.id}">-</button>
                  <span>${item.qty}</span>
                  <button data-qty="1" data-id="${item.id}">+</button>
                </div>
              </div>
              <div class="cart-actions">
                <strong>${money(item.price * item.qty)}</strong>
                <button class="remove-btn" data-remove="${item.id}">Remove</button>
              </div>
            </article>
          `,
        )
        .join("")
    : `<div class="cart-empty">Your cart is empty. Pick accessories or fashion items to begin.</div>`;

  cartItemCount.textContent = String(count);
  cartTotal.textContent = money(total);
}

function renderDetail(product) {
  state.detailQty = 1;
  state.detailImageIndex = 0;
  detailName.textContent = product.name;
  detailCategory.textContent = product.category;
  detailImage.src = productImage(product, 820);
  detailImage.alt = product.name;
  detailRating.textContent = `★ ${product.rating}`;
  detailReviewCount.textContent = `${product.reviews} reviews`;
  detailPrice.textContent = money(product.price);
  detailMrp.textContent = money(product.mrp);
  detailDiscount.textContent = product.discount;
  detailOffer.textContent = product.offer;
  detailDelivery.textContent = product.delivery;
  detailDescription.textContent = product.description;
  detailQtyValue.textContent = String(state.detailQty);
  detailHighlights.innerHTML = product.highlights.map((item) => `<li>${item}</li>`).join("");
  detailIncluded.innerHTML = product.included.map((item) => `<li>${item}</li>`).join("");
  detailSpecs.innerHTML = product.specs
    .map(
      ([label, value]) => `
        <div class="spec-item">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
  detailThumbs.innerHTML = product.gallery
    .map(
      (img, index) =>
        `<button data-photo="${index}" aria-label="View ${product.name} image ${index + 1}">
          <img src="${galleryImage(img, 220)}" alt="${product.name} view ${index + 1}" loading="lazy" decoding="async" />
        </button>`,
    )
    .join("");
  addFromDetail.dataset.id = product.id;
  buyFromDetail.dataset.id = product.id;
  setView("product");
}

function openProduct(id) {
  state.activeProductId = id;
  renderDetail(productById(id));
  setView("product");
}

function persistCart() {
  localStorage.setItem("valour-cart", JSON.stringify(state.cart));
}

function addToCart(id, qty = 1, options = {}) {
  const { openCart = true } = options;
  const entry = state.cart.find((item) => item.id === id);
  if (entry) {
    entry.qty += qty;
  } else {
    state.cart.push({ id, qty });
  }
  persistCart();
  renderCart();
  if (openCart) {
    setView("cart");
  }
}

function updateQty(id, delta) {
  const entry = state.cart.find((item) => item.id === id);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) {
    state.cart = state.cart.filter((item) => item.id !== id);
  }
  persistCart();
  renderCart();
}

function removeItem(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  persistCart();
  renderCart();
}

function renderOrderSummary() {
  const { items, total } = cartStats();
  const deliveryAddress = state.profile.addresses[0] || "No address saved yet";

  orderSummary.innerHTML = `
    <section class="order-summary-card">
      <h3>Review your order</h3>
      <p class="muted">Items in cart, delivery address, and total amount.</p>
      <div class="order-summary-items">
        ${items
          .map(
            (item) => `
              <div class="order-summary-row order-summary-product">
                <img src="${productImage(item, 220)}" alt="${item.name}" />
                <div>
                  <strong>${item.name}</strong>
                  <span>${item.qty} item${item.qty > 1 ? "s" : ""}</span>
                </div>
                <strong>${money(item.price * item.qty)}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="order-summary-total">
        <span>Total</span>
        <strong>${money(total)}</strong>
      </div>
      <p class="order-summary-address muted">Deliver to: ${deliveryAddress}</p>
    </section>
  `;
}

function hasSavedDelivery() {
  const defaultName = "Guest User";
  const defaultEmail = "guest@example.com";
  const defaultPhone = "7904564217";
  const defaultAddress = "12/77a, I Block, Medavakkam, Chennai 600100";
  return Boolean(
    state.profile.addresses[0] &&
      (state.profile.deliverySaved ||
        state.profile.name !== defaultName ||
        state.profile.email !== defaultEmail ||
        state.profile.phone !== defaultPhone ||
        state.profile.addresses[0] !== defaultAddress),
  );
}

function renderDeliveryAddress() {
  if (!deliveryAddressBody) return;

  const saved = hasSavedDelivery() && !state.deliveryEditing;
  if (saved) {
    deliveryAddressBody.innerHTML = `
      <div class="saved-delivery">
        <div class="saved-delivery-head">
          <strong>${state.profile.name}</strong>
          <button class="secondary-btn" id="editDeliveryBtn" type="button">Edit</button>
        </div>
        <div class="saved-delivery-grid">
          <div><span>Email</span><strong>${state.profile.email}</strong></div>
          <div><span>Phone</span><strong>${state.profile.phone}</strong></div>
          <div class="saved-delivery-full">
            <span>Address</span>
            <strong>${state.profile.addresses[0]}</strong>
          </div>
        </div>
      </div>
    `;

    const editBtn = document.getElementById("editDeliveryBtn");
    editBtn?.addEventListener("click", () => {
      state.deliveryEditing = true;
      renderDeliveryAddress();
    });
    return;
  }

  deliveryAddressBody.innerHTML = `
    <label class="field">
      <span>Full name</span>
      <input id="addressName" type="text" placeholder="Your name" value="${state.profile.name || ""}" />
    </label>
    <label class="field">
      <span>Email</span>
      <input id="addressEmail" type="email" placeholder="you@example.com" value="${state.profile.email || ""}" />
    </label>
    <label class="field">
      <span>Phone</span>
      <input id="addressPhone" type="tel" placeholder="Mobile number" value="${state.profile.phone || ""}" />
    </label>
    <label class="field">
      <span>Address</span>
      <textarea id="addressText" rows="4" placeholder="House no, street, city, state, pin code">${state.profile.addresses[0] || ""}</textarea>
    </label>
  `;
}

function renderTracking() {
  const order = state.order;
  const eta = order?.eta || "soon";
  const steps = [
    ["Order placed", "Now"],
    ["Packed", "Shortly"],
    ["Shipped", "In transit"],
    ["Out for delivery", eta],
    ["Delivered", eta],
  ];
  const activeStep = Math.max(0, Math.min(order?.statusIndex ?? 0, steps.length - 1));
  timeline.innerHTML = `
    ${steps
      .map(
        ([label, when], index) => `
          <div class="step ${index < activeStep ? "done" : index === activeStep ? "active" : ""}">
            <span class="dot"></span>
            <span>${label}</span>
            <span>${when}</span>
          </div>
        `,
      )
      .join("")}
  `;
  trackingEta.textContent = `Estimated delivery: ${eta}`;
}

function renderPaymentSummary() {
  const { subtotal, total } = cartStats();
  const shipping = subtotal > 0 ? 3 : 0;
  if (paymentCost) paymentCost.textContent = money(subtotal);
  if (paymentShipping) paymentShipping.textContent = money(shipping);
  if (paymentGrandTotal) paymentGrandTotal.textContent = money(total + shipping);
}

function renderPaymentForm() {
  if (!paymentFormBody) return;

  if (state.paymentMethod === "upi") {
    if (isMobileDevice()) {
      const activeUpiApp = state.paymentDetails.upiApp || localStorage.getItem("valva-upi-app") || "phonepe";
      const upiAppButtons = UPI_APPS.map(
        (app) => `
          <a class="upi-app-btn ${activeUpiApp === app.id ? "active" : ""}" data-upi-app="${app.id}" href="${buildUpiPaymentUrl(app.id)}" rel="noreferrer">
            <span class="upi-app-logo ${app.id}" aria-hidden="true">${app.short}</span>
            <span class="upi-app-copy">
              <strong>${app.name}</strong>
              <small>${app.note}</small>
            </span>
            <span class="payment-dot" aria-hidden="true"></span>
          </a>
        `,
      ).join("");

      paymentFormBody.innerHTML = `
        <div class="upi-app-picker">
          <div class="upi-app-picker-head">
            <span class="eyebrow">Choose UPI app</span>
            <span class="muted">Tap an app to open it directly</span>
          </div>
          <div class="upi-app-grid">${upiAppButtons}</div>
          <div class="payment-note">
            No extra details are needed here. The app will open directly for payment.
          </div>
        </div>
      `;
    } else {
      const { total } = cartStats();
      const shipping = cartStats().subtotal > 0 ? 3 : 0;
      paymentFormBody.innerHTML = `
        <div class="upi-qr-card">
          <div class="upi-qr-head">
            <div>
              <span class="eyebrow">Scan to pay</span>
              <h4>Open your UPI app from the QR code</h4>
            </div>
            <span class="payment-status">Desktop</span>
          </div>
          <div class="upi-qr-frame">
            <img src="${buildUpiQrImageUrl()}" alt="UPI QR code for Valva Market payment" loading="eager" decoding="async" />
          </div>
          <div class="upi-qr-meta">
            <div class="summary-row"><span>Payee UPI ID</span><strong>${UPI_MERCHANT_VPA}</strong></div>
            <div class="summary-row"><span>Amount</span><strong>${money(total + shipping)}</strong></div>
            <div class="summary-row"><span>Merchant</span><strong>Valva Market</strong></div>
          </div>
          <div class="payment-note">
            Scan this QR code using any UPI app on your phone, then complete the payment there.
          </div>
        </div>
      `;
    }
    placeOrderBtn.textContent = "Add Now";
    return;
  }

  paymentFormBody.innerHTML = `
    <div class="payment-note">
      Cash on delivery selected. No extra payment details are needed now.
    </div>
  `;
  placeOrderBtn.textContent = "Confirm order";
}

function renderProfile() {
  profileName.textContent = state.profile.name;
  profileEmail.textContent = state.profile.email;
  savedAddresses.innerHTML = state.profile.addresses.length
    ? state.profile.addresses.map((address) => `<div class="profile-address-item muted">${address}</div>`).join("")
    : '<div class="profile-address-item muted">No saved addresses yet</div>';
  orderHistory.innerHTML = state.profile.orders.length
    ? state.profile.orders
        .map(
          (order) => `
            <div class="profile-order-row">
              <div>
                <strong>${order.number}</strong>
                <span>${money(order.total)} - ${order.status}</span>
              </div>
              <button class="secondary-btn" data-check-order="${order.number}" type="button">Check</button>
            </div>
          `,
        )
        .join("")
    : '<div class="profile-address-item muted">No orders yet</div>';

  if (selectedOrderDetails) {
    const selected = state.profile.orders.find((order) => order.number === state.selectedOrderId) || state.profile.orders[0];
    if (!selected) {
      selectedOrderDetails.innerHTML = '<div class="profile-address-item muted">Select an order to view details.</div>';
    } else {
      const summary = selected.items?.length
        ? selected.items
            .map(
              (item) => `
                <div class="selected-order-line">
                  <span>${item.name} x ${item.qty}</span>
                  <strong>${money(item.price * item.qty)}</strong>
                </div>
              `,
            )
            .join("")
        : "";
      selectedOrderDetails.innerHTML = `
        <div class="selected-order-card">
          <strong>${selected.number}</strong>
          <div class="muted">Status: ${selected.status}</div>
          <div class="muted">Total: ${money(selected.total)}</div>
          <div class="muted">Payment: ${selected.method}</div>
          ${selected.paymentDetails?.upiApp ? `<div class="muted">UPI app: ${upiAppLabel(selected.paymentDetails.upiApp)}</div>` : ""}
          <div class="muted">Deliver to: ${selected.deliveryAddress || "No address saved yet"}</div>
          ${selected.paymentDetails?.note ? `<div class="muted">Note: ${selected.paymentDetails.note}</div>` : ""}
          ${summary ? `<div class="selected-order-lines">${summary}</div>` : ""}
        </div>
      `;
    }
  }

  renderAuthPanel();
  renderOwnerDashboard();
}

function saveAddress() {
  if (hasSavedDelivery() && !state.deliveryEditing) {
    setView("checkout-confirm");
    return;
  }

  const nameInput = document.getElementById("addressName");
  const emailInput = document.getElementById("addressEmail");
  const phoneInput = document.getElementById("addressPhone");
  const textInput = document.getElementById("addressText");

  state.profile = {
    ...state.profile,
    name: nameInput?.value.trim() || state.profile.name || "Guest User",
    email: emailInput?.value.trim() || state.profile.email || "guest@example.com",
    phone: phoneInput?.value.trim() || state.profile.phone || "7904564217",
    addresses: [textInput?.value.trim() || state.profile.addresses[0] || "12/77a, I Block, Medavakkam, Chennai 600100"],
    deliverySaved: true,
  };
  state.deliveryEditing = false;
  localStorage.setItem("valour-profile", JSON.stringify(state.profile));
  renderProfile();
  setView("checkout-confirm");
}

function finalizeOrder(order) {
  state.order = order;
  state.profile.orders.unshift(order);
  state.selectedOrderId = order.number;
  localStorage.setItem("valour-profile", JSON.stringify(state.profile));
  state.cart = [];
  persistCart();
  renderCart();
  renderProfile();
  renderOwnerDashboard();
  setView("tracking");
}

function buildOrderDraft() {
  const { items, total } = cartStats();
  if (!items.length) {
    return null;
  }

  if (state.paymentMethod === "upi") {
    state.paymentDetails = {
      upiApp: state.paymentDetails.upiApp || "phonepe",
      upiRef: "",
      mobile: "",
      note: "",
    };
  } else {
    state.paymentDetails = { upiApp: "phonepe", upiRef: "", mobile: state.profile.phone || "", note: "" };
  }

  return {
    number: `VM-${Date.now().toString().slice(-7)}`,
    total,
    status: "Order placed",
    statusIndex: 0,
    eta: "18 Jun",
    method: state.paymentMethod,
    paymentDetails: { ...state.paymentDetails },
    deliveryAddress: state.profile.addresses[0] || "",
    customerName: state.profile.name || "",
    customerEmail: state.profile.email || "",
    customerPhone: state.profile.phone || "",
    items: items.map((item) => ({ name: item.name, qty: item.qty, price: item.price })),
  };
}

async function placeOrder() {
  const order = buildOrderDraft();
  if (!order) {
    setView("cart");
    return;
  }

  finalizeOrder(order);
}

function persistAuth() {
  localStorage.setItem("valva-auth", JSON.stringify(state.auth));
}

function syncAuthRole() {
  if (state.auth.serverVerified) {
    state.auth.isAdmin = state.auth.role === "admin";
    persistAuth();
    return;
  }
  const email = (state.auth.email || "").trim().toLowerCase();
  const isAdmin = ADMIN_EMAILS.includes(email);
  state.auth.role = isAdmin ? "admin" : state.auth.signedIn ? "customer" : "guest";
  state.auth.isAdmin = isAdmin;
  persistAuth();
}

function setAuthSession(authData) {
  state.auth = {
    signedIn: true,
    provider: "google",
    name: authData.name || "",
    email: authData.email || "",
    picture: authData.picture || "",
    role: authData.role || "customer",
    token: authData.token || "",
    serverVerified: Boolean(authData.token),
  };
  syncAuthRole();
  renderAuthPanel();
  renderOwnerDashboard();
  renderProfile();
}

function signOutSession() {
  state.auth = {
    signedIn: false,
    name: "",
    email: "",
    picture: "",
    role: "guest",
    provider: "google",
    token: "",
    serverVerified: false,
  };
  syncAuthRole();
  renderAuthPanel();
  renderOwnerDashboard();
}

function renderAuthPanel() {
  if (roleBadge) {
    roleBadge.textContent = state.auth.isAdmin ? "Owner" : state.auth.signedIn ? "Signed in" : "Guest";
  }
  if (authStatus) {
    authStatus.textContent = state.auth.isAdmin
      ? `Signed in as ${state.auth.email}. Owner controls are unlocked.`
      : state.auth.signedIn
        ? `Signed in as ${state.auth.email}. Owner controls stay locked for this account.`
        : "Sign in with the approved Google account to unlock owner tools.";
  }
  if (googleSignInButton) {
    if (state.auth.signedIn) {
      googleSignInButton.innerHTML = `
        <button class="secondary-btn full" id="signOutGoogleBtn" type="button">Sign out</button>
      `;
      document.getElementById("signOutGoogleBtn")?.addEventListener("click", signOutSession);
      return;
    }

    googleSignInButton.innerHTML = `
      <button class="primary-btn full" id="googleLoginFallbackBtn" type="button">Continue with Google</button>
      <p class="muted google-hint">Set <code>GOOGLE_CLIENT_ID</code> and keep the Google Identity Services script enabled for real sign-in.</p>
    `;
    document.getElementById("googleLoginFallbackBtn")?.addEventListener("click", () => {
      const email = window.prompt("Enter the Google email for this demo sign-in:");
      if (!email) return;
      setAuthSession({ name: email.split("@")[0], email, picture: "" });
    });
  }
}

async function verifyGoogleCredential(credential) {
  try {
    const result = await apiRequest("/api/auth/google/verify", {
      method: "POST",
      body: JSON.stringify({ credential }),
    });
    setAuthSession({
      name: result.user?.name || "",
      email: result.user?.email || "",
      picture: result.user?.picture || "",
      role: result.user?.role || "customer",
      token: result.token || "",
    });
    return true;
  } catch {
    return false;
  }
}

function renderOwnerCatalogList() {
  if (!ownerCatalogList) return;
  const items = state.catalog;
  ownerCatalogList.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <div class="owner-item">
              <div class="owner-item-head">
                <div>
                  <strong>${item.name}</strong>
                  <div class="muted">${item.category} / ${item.type}</div>
                </div>
                <strong>${money(item.price)}</strong>
              </div>
              <div class="muted">${item.description}</div>
              <div class="owner-item-actions">
                <button class="secondary-btn" data-owner-edit-product="${item.id}" type="button">Edit</button>
                <button class="secondary-btn" data-owner-remove-product="${item.id}" type="button">Remove</button>
              </div>
            </div>
          `,
        )
        .join("")
    : '<div class="owner-item muted">No products added yet.</div>';
}

function renderOwnerOrderList() {
  if (!ownerOrderList) return;
  const orders = state.profile.orders;
  ownerOrderList.innerHTML = orders.length
    ? orders
        .map((order) => {
          const stageIndex = Math.max(0, Math.min(order.statusIndex ?? 0, ORDER_STAGES.length - 1));
          return `
            <div class="owner-item">
              <div class="owner-item-head">
                <div>
                  <strong>${order.number}</strong>
                  <div class="muted">${money(order.total)} - ${order.status}</div>
                </div>
                <span class="payment-status">${ORDER_STAGES[stageIndex]}</span>
              </div>
              <div class="muted">${order.customerName || ""}</div>
              <div class="owner-item-actions">
                <button class="secondary-btn" data-owner-stage="${order.number}" data-stage-index="1" type="button">Approve</button>
                <button class="secondary-btn" data-owner-stage="${order.number}" data-stage-index="2" type="button">Pack</button>
                <button class="secondary-btn" data-owner-stage="${order.number}" data-stage-index="3" type="button">Ship</button>
                <button class="secondary-btn" data-owner-stage="${order.number}" data-stage-index="4" type="button">Deliver</button>
              </div>
            </div>
          `;
        })
        .join("")
    : '<div class="owner-item muted">No orders yet.</div>';
}

function renderOwnerPaymentDetails() {
  if (!ownerPaymentDetails) return;
  const order = state.profile.orders.find((item) => item.number === state.selectedOrderId) || state.profile.orders[0];
  if (!order) {
    ownerPaymentDetails.innerHTML = '<div class="owner-item muted">Payment details will appear here after checkout.</div>';
    return;
  }

  ownerPaymentDetails.innerHTML = `
    <div class="owner-item">
      <div class="owner-item-head">
        <div>
          <strong>${order.number}</strong>
          <div class="muted">${order.method.toUpperCase()} payment</div>
        </div>
        <span class="payment-status">${money(order.total)}</span>
      </div>
      ${order.paymentDetails?.upiApp ? `<div class="muted">UPI app: ${upiAppLabel(order.paymentDetails.upiApp)}</div>` : ""}
      <div class="muted">UPI ref: ${order.paymentDetails?.upiRef || "n/a"}</div>
      <div class="muted">Mobile: ${order.paymentDetails?.mobile || order.customerPhone || "n/a"}</div>
      ${order.paymentDetails?.note ? `<div class="muted">Note: ${order.paymentDetails.note}</div>` : ""}
    </div>
  `;
}

function renderOwnerDashboard() {
  if (!ownerDashboard) return;
  const visible = Boolean(state.auth.isAdmin);
  ownerDashboard.classList.toggle("is-visible", visible);
  if (!visible) {
    ownerDashboard.style.display = "none";
    return;
  }
  ownerDashboard.style.display = "";
  renderOwnerCatalogList();
  renderOwnerOrderList();
  renderOwnerPaymentDetails();
}

function fillOwnerProductForm(product) {
  if (!ownerProductForm) return;
  ownerProductId.value = product?.id || "";
  ownerFormTitle.textContent = product ? "Edit product" : "Add product";
  ownerProductName.value = product?.name || "";
  ownerProductCategory.value = product?.category || "";
  ownerProductType.value = product?.type || "";
  ownerProductPrice.value = product?.price || "";
  ownerProductMrp.value = product?.mrp || "";
  ownerProductImage.value = product?.image || "";
  ownerProductDescription.value = product?.description || "";
}

function resetOwnerProductForm() {
  fillOwnerProductForm(null);
}

function saveOwnerProduct(event) {
  event.preventDefault();
  if (!state.auth.isAdmin) return;

  const name = ownerProductName.value.trim();
  if (!name) return;
  const category = ownerProductCategory.value.trim().toLowerCase() || "accessories";
  const type = ownerProductType.value.trim().toLowerCase() || "general";
  const price = Number(ownerProductPrice.value) || 0;
  const mrp = Number(ownerProductMrp.value) || price;
  const image = ownerProductImage.value.trim() || "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=60";
  const description = ownerProductDescription.value.trim() || "Product description";

  const existingId = ownerProductId.value.trim();
  const baseProduct = state.catalog.find((item) => item.id === existingId);
  const nextProduct = {
    id: existingId || `u${Date.now().toString().slice(-6)}`,
    name,
    category,
    type,
    price,
    mrp,
    rating: baseProduct?.rating || 4.5,
    reviews: baseProduct?.reviews || "0",
    discount: baseProduct?.discount || `${Math.max(0, Math.round((1 - price / Math.max(1, mrp)) * 100))}% off`,
    image,
    gallery: baseProduct?.gallery?.length ? baseProduct.gallery : [image, image, image, image],
    description,
    delivery: baseProduct?.delivery || "Delivery by tomorrow",
    offer: baseProduct?.offer || "Owner managed product",
    highlights: baseProduct?.highlights || ["Managed by owner", "Editable product details", "Live catalog control", "Ready for checkout"],
    included: baseProduct?.included || ["1 product"],
    specs: baseProduct?.specs || [["Status", "New"]],
  };

  const index = state.catalog.findIndex((item) => item.id === existingId);
  if (index >= 0) {
    state.catalog[index] = { ...state.catalog[index], ...nextProduct };
  } else {
    state.catalog.unshift(nextProduct);
    state.activeProductId = nextProduct.id;
  }

  if (state.auth.serverVerified) {
    const method = existingId ? "PATCH" : "POST";
    const path = existingId ? `/api/admin/products/${existingId}` : "/api/admin/products";
    apiRequest(path, {
      method,
      body: JSON.stringify(nextProduct),
    })
      .then((response) => {
        if (response?.product?.id) {
          state.catalog = state.catalog.map((item) => (item.id === response.product.id ? response.product : item));
        }
      })
      .catch(() => {});
  }

  persistCatalog();
  renderHome();
  renderDetail(productById(state.activeProductId));
  renderOwnerDashboard();
  fillOwnerProductForm(null);
}

function updateOrderStage(orderNumber, stageIndex) {
  const order = state.profile.orders.find((item) => item.number === orderNumber);
  if (!order) return;
  const nextIndex = Math.max(0, Math.min(stageIndex, ORDER_STAGES.length - 1));
  order.statusIndex = nextIndex;
  order.status = ORDER_STAGES[nextIndex];
  if (state.order?.number === order.number) {
    state.order = { ...state.order, statusIndex: nextIndex, status: ORDER_STAGES[nextIndex] };
  }
  localStorage.setItem("valour-profile", JSON.stringify(state.profile));
  if (state.auth.serverVerified) {
    apiRequest(`/api/admin/orders/${orderNumber}/status`, {
      method: "PATCH",
      body: JSON.stringify({
        status: order.status,
        statusIndex: nextIndex,
      }),
    }).catch(() => {});
  }
  renderTracking();
  renderProfile();
  renderOwnerDashboard();
}

async function applyGoogleCredential(credentialResponse) {
  const payload = credentialResponse?.credential;
  if (!payload) return;

  const verified = await verifyGoogleCredential(payload);
  if (verified) {
    return;
  }

  try {
    const parts = payload.split(".");
    const decoded = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    setAuthSession({
      name: decoded.name || decoded.email?.split("@")[0] || "Google User",
      email: decoded.email || "",
      picture: decoded.picture || "",
    });
  } catch {
    const email = window.prompt("Enter the Google email for this sign-in:");
    if (email) {
      setAuthSession({ name: email.split("@")[0], email, picture: "" });
    }
  }
}

function initGoogleSignIn() {
  if (!googleSignInButton) return;
  if (window.google?.accounts?.id && GOOGLE_CLIENT_ID) {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: applyGoogleCredential,
    });
    google.accounts.id.renderButton(googleSignInButton, {
      theme: "outline",
      size: "large",
      shape: "pill",
      text: "signin_with",
      width: 280,
    });
    return;
  }

  if (GOOGLE_CLIENT_ID && !window.google?.accounts?.id) {
    window.setTimeout(initGoogleSignIn, 300);
    return;
  }

  renderAuthPanel();
}

function renderActiveDetailImage(index) {
  const product = productById(state.activeProductId);
  const nextImage = product.gallery[index] || product.gallery[0] || product.image;
  state.detailImageIndex = index;
  detailImage.src = galleryImage(nextImage, 820);
}

function downloadCartSheet() {
  const rows = [["Product", "Category", "Type", "Price", "Qty", "Line Total"]];
  cartItems().forEach((item) => {
    rows.push([
      item.name,
      item.category,
      item.type,
      String(item.price),
      String(item.qty),
      String(item.price * item.qty),
    ]);
  });

  const csv = rows
    .map((row) =>
      row
        .map((cell) => {
          const value = String(cell ?? "");
          return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
        })
        .join(","),
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "valva-market-cart.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function changeDetailQty(delta) {
  state.detailQty = Math.max(1, state.detailQty + delta);
  detailQtyValue.textContent = String(state.detailQty);
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const viewBtn = event.target.closest("button[data-view], a[data-view]");
  if (viewBtn) {
    const view = viewBtn.dataset.view;
    if (view === "shop") {
      document.querySelector(".grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if ((view === "checkout-address" || view === "checkout-confirm" || view === "payment") && !cartItems().length) {
      setView("cart");
      return;
    }
    setView(view);
    return;
  }

  const filterBtn = event.target.closest("[data-filter]");
  if (filterBtn) {
    state.userFiltered = true;
    state.filter = filterBtn.dataset.filter;
    setActiveChip(state.filter);
    renderHome();
    return;
  }

  const openBtn = event.target.closest("[data-open-product]");
  if (openBtn) {
    openProduct(openBtn.dataset.openProduct);
    return;
  }

  const qtyBtn = event.target.closest("[data-qty]");
  if (qtyBtn) {
    updateQty(qtyBtn.dataset.id, Number(qtyBtn.dataset.qty));
    return;
  }

  const removeBtn = event.target.closest("[data-remove]");
  if (removeBtn) {
    removeItem(removeBtn.dataset.remove);
    return;
  }

  const photoBtn = event.target.closest("[data-photo]");
  if (photoBtn) {
    renderActiveDetailImage(Number(photoBtn.dataset.photo));
    return;
  }

  const checkOrderBtn = event.target.closest("[data-check-order]");
  if (checkOrderBtn) {
    state.selectedOrderId = checkOrderBtn.dataset.checkOrder;
    renderProfile();
    return;
  }

  const ownerEditBtn = event.target.closest("[data-owner-edit-product]");
  if (ownerEditBtn) {
    const product = productById(ownerEditBtn.dataset.ownerEditProduct);
    fillOwnerProductForm(product);
    setView("profile");
    return;
  }

  const ownerRemoveBtn = event.target.closest("[data-owner-remove-product]");
  if (ownerRemoveBtn) {
    const id = ownerRemoveBtn.dataset.ownerRemoveProduct;
    state.catalog = state.catalog.filter((item) => item.id !== id);
    if (!state.catalog.length) {
      state.catalog = productData.map((product) => ({ ...product }));
    }
    if (!productById(state.activeProductId)) {
      state.activeProductId = state.catalog[0].id;
    }
    persistCatalog();
    renderHome();
    renderDetail(productById(state.activeProductId));
    renderOwnerDashboard();
    return;
  }

  const ownerStageBtn = event.target.closest("[data-owner-stage]");
  if (ownerStageBtn) {
    updateOrderStage(ownerStageBtn.dataset.ownerStage, Number(ownerStageBtn.dataset.stageIndex));
    return;
  }
});

document.querySelectorAll(".payment-option-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".payment-option-card").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.paymentMethod = button.dataset.pay;
    renderPaymentForm();
  });
});

document.addEventListener("click", (event) => {
  const upiButton = event.target.closest("[data-upi-app]");
  if (!upiButton) return;
  document.querySelectorAll("[data-upi-app]").forEach((item) => item.classList.remove("active"));
  upiButton.classList.add("active");
  openUpiApp(upiButton.dataset.upiApp || "phonepe");
});

searchInput.addEventListener("input", (event) => {
  state.userFiltered = true;
  state.search = event.target.value;
  renderHome();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput?.focus();
    return;
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.search = "";
    renderHome();
  }
});

window.addEventListener("resize", () => {
  if (state.view === "home") {
    renderHome();
  }
});

priceRange?.addEventListener("input", (event) => {
  state.userFiltered = true;
  state.priceCap = Number(event.target.value);
  renderHome();
});

detailQtyMinus.addEventListener("click", () => changeDetailQty(-1));
detailQtyPlus.addEventListener("click", () => changeDetailQty(1));

saveAddressBtn.addEventListener("click", saveAddress);
placeOrderBtn.addEventListener("click", placeOrder);

addFromDetail.addEventListener("click", () => addToCart(addFromDetail.dataset.id, state.detailQty, { openCart: true }));
buyFromDetail.addEventListener("click", () => {
  addToCart(buyFromDetail.dataset.id, state.detailQty, { openCart: false });
  setView("cart");
});

downloadCartSheetBtn?.addEventListener("click", downloadCartSheet);

logoutBtn.addEventListener("click", () => {
  state.profile = {
    name: "Guest User",
    email: "guest@example.com",
    phone: "7904564217",
    addresses: ["12/77a, I Block, Medavakkam, Chennai 600100"],
    orders: [],
    deliverySaved: false,
  };
  state.selectedOrderId = null;
  state.deliveryEditing = false;
  localStorage.setItem("valour-profile", JSON.stringify(state.profile));
  signOutSession();
  renderProfile();
});

ownerProductForm?.addEventListener("submit", saveOwnerProduct);
resetOwnerFormBtn?.addEventListener("click", resetOwnerProductForm);

function init() {
  mergeSeedCatalog();
  persistCart();
  persistCatalog();
  syncAuthRole();
  if (!state.profile.deliverySaved && state.profile.name !== "Guest User") {
    state.profile.deliverySaved = true;
  }
  localStorage.setItem("valour-profile", JSON.stringify(state.profile));
  state.search = "";
  state.filter = "all";
  state.priceCap = 5000;
  state.userFiltered = false;
  if (priceRange) {
    priceRange.value = String(state.priceCap);
  }
  if (searchInput) {
    searchInput.value = "";
  }
  startHeroRotation();
  initGoogleSignIn();
  renderAuthPanel();
  renderHome();
  renderCart();
  renderDetail(productById(state.activeProductId));
  renderTracking();
  renderPaymentForm();
  renderProfile();
  renderOwnerDashboard();
  setActiveChip(state.filter);
  setView("home");
}

init();
