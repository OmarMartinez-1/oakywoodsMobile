import { Product, MenuItems } from "./types";


export const heightCardAccessories: number = 128


export const drawerMenu: MenuItems[] = [
  {
    title: "Products",
    route: 'Products',
    menuList: [
      {
        title: 'By Function',
        screens: [
          { screen: "Desk", path: "/collections/woodenDesks" },
          { screen: "Desk Organization", path: "/collections/deskOrganization" },
          { screen: "Charging Docks", path: "/collections/chargingDocks" },
          { screen: "Wireless charging" },
          { screen: "Sleeves & Cases" },
          { screen: "Stands" }
        ]
      },

      {
        title: 'By Device',
        screens: [
          { screen: "iPhone" },
          { screen: "iPad" },
          { screen: "AirPods" },
          { screen: "MacBook" },
          { screen: "Apple Watch" },
          { screen: "iMac" }
        ]
      },

      {
        title: 'By Collection',
        screens: [
          { screen: "OakyBlocks" },
          { screen: "Slim" },
          { screen: "Geometric" },
          { screen: "Home Office Essentials" },
          { screen: "MagSafe" }
        ]
      },
    ]
  },


  {
    title: "About",
    route: 'About',
    menuList: [
      {
        title: 'Our Story',
        screens: [
          { screen: "Find out more about Oakywood roots" },
        ]

      },
      {
        title: 'Our Materials',
        screens: [
          { screen: "Sustainable design" },
        ]
      },
      {
        title: 'Environmental Initiatives',
        screens: [
          { screen: "We care about the planet and other people" },
        ]
      },
      {
        title: 'Production process',
        screens: [
          { screen: "Inspired by nature" },
        ]
      },
    ]
  },



  {
    title: "Blog",
    route: 'Blog',
    menuList: [
      {
        title: 'Go to our blog',
        screens: [
          { screen: "Read our recent articles and get to know us better" },
        ]
      }
    ]
  },


  {
    title: "Contact",
    route: 'Contact',
    menuList: [
      {
        title: 'Social Media',
        screens: [
          { screen: "Instagram" },
          { screen: "Facebook" },
          { screen: "Pinterest" },
        ]
      },
      {
        title: 'Reach us at',
        screens: [
          {
            screen: `WhatsApp
        Call +48 797 217 197
        contact@oakywood.shop` },
        ]
      },
    ]
  },


  {
    title: "Reviews",
    route: 'Reviews',
    menuList: [
      {
        title: 'Reviews',
        screens: [
          {
            screen: `WhatsApp
        Call +48 797 217 197
        contact@oakywood.shop` },
        ]
      },
    ]
  },
]

export const hardcodeImage: { uri: string } = { uri: "https://oakywood.shop/cdn/shop/products/220812_Oakywood_D5_0067.jpg?crop=center&height=810&v=1669328101&width=1080" }

export const Products: Array<Product> = [
  {
    id: 1,
    name: "Standing Desk",
    price: 1100,
    image: hardcodeImage,
  },
  {
    id: 2,
    name: "Classic Desk",
    price: 550,
    image: hardcodeImage,
  },
  {
    id: 3,
    name: "Desk Shelf",
    price: 180,
    image: hardcodeImage,
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 150,
    image: hardcodeImage,
  },
  {
    id: 5,
    name: "Monitor Stand",
    price: 120,
    image: hardcodeImage,
  },
  {
    id: 6,
    name: "Felt&Cork Desk Mat",
    price: 70,
    image: hardcodeImage,
  },
  {
    id: 7,
    name: "Catchall Tray",
    price: 45,
    image: hardcodeImage,
  },
  {
    id: 8,
    name: "Triple Dock",
    price: 90,
    image: hardcodeImage,
  },
  {
    id: 9,
    name: "Dual Laptop Dock",
    price: 70,
    image: hardcodeImage,
  },
  {
    id: 10,
    name: "Laptop Dock",
    price: 60,
    image: hardcodeImage,
  },
  {
    id: 11,
    name: "2in1 Headphones Stand",
    price: 100,
    image: hardcodeImage,
  },
  {
    id: 12,
    name: "Headphones Stand",
    price: 60,
    image: hardcodeImage,
  },
  {
    id: 13,
    name: "Underdesk Organizer",
    price: 150,
    image: hardcodeImage,
  },
  {
    id: 14,
    name: "Slim Charging Pad",
    price: 70,
    image: hardcodeImage,
  },
  {
    id: 15,
    name: "Geometric Charging Pad",
    price: 90,
    image: hardcodeImage,
  },
  {
    id: 16,
    name: "Pen Tray (OakyBlocks)",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 17,
    name: "Large Tray (OakyBlocks)",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 18,
    name: "Small Tray (OakyBlocks)",
    price: 40,
    image: hardcodeImage,
  },
  {
    id: 19,
    name: "Sticky Notes Tray (OakyBlocks)",
    price: 40,
    image: hardcodeImage,
  },
  {
    id: 20,
    name: "Charging Pad (OakyBlocks)",
    price: 70,
    image: hardcodeImage,
  },
  {
    id: 21,
    name: "Smartphone Stand (OakyBlocks)",
    price: 40,
    image: hardcodeImage,
  },
  {
    id: 22,
    name: "Combo Dock",
    price: 70,
    image: hardcodeImage,
  },
  {
    id: 23,
    name: "Dual Dock",
    price: 80,
    image: hardcodeImage,
  },
  {
    id: 24,
    name: "iPhone Dock",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 25,
    name: "Apple Watch Dock",
    price: 40,
    image: hardcodeImage,
  },
  {
    id: 26,
    name: "Gift Card",
    price: 25,
    image: hardcodeImage,
  },
  {
    id: 27,
    name: "Felt Cable Ties - Set of 3",
    price: 25,
    image: hardcodeImage,
  },
  {
    id: 28,
    name: "Felt&Cork Mouse Pad",
    price: 35,
    image: hardcodeImage,
  },
  {
    id: 29,
    name: "Felt&Cork Coasters",
    price: 30,
    image: hardcodeImage,
  },
  {
    id: 30,
    name: "Cubic Pot",
    price: 40,
    image: hardcodeImage,
  },
  {
    id: 31,
    name: "Geometric Pen Pot",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 32,
    name: "AirPods Case",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 33,
    name: "Felt MacBook Sleeve",
    price: 60,
    image: hardcodeImage,
  },
  {
    id: 34,
    name: "Felt iPad Sleeve",
    price: 60,
    image: hardcodeImage,
  },
  {
    id: 35,
    name: "Geometric Dock",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 36,
    name: "MagSafe iPhone Wall Mount",
    price: 80,
    image: hardcodeImage,
  },
  {
    id: 37,
    name: "MagSafe iPhone Stand",
    price: 150,
    image: hardcodeImage,
  },
  {
    id: 38,
    name: "MagSafe iPhone Desk Shelf Mount",
    price: 90,
    image: hardcodeImage,
  },
  {
    id: 39,
    name: "Magnetic Charging Apple Watch Stand",
    price: 90,
    image: hardcodeImage,
  },
  {
    id: 40,
    name: "Dual Slim Charging Pad",
    price: 110,
    image: hardcodeImage,
  },
  {
    id: 41,
    name: "Casters - Set of 4",
    price: 50,
    image: hardcodeImage,
  },
  {
    id: 42,
    name: "Maintenance Kit",
    price: 40,
    image: hardcodeImage,
  },
]




export const woodenDesks: any = {
  topImage: require("../assets/images/woodenDesks.webp"),
  title: "Wooden Desks",
  titleDescription: "A desk tailored to your needs",
  textDescription: "Oakywood desks transform the idea of workplace comfort. The functional design, fine materials, and detail-oriented craftsmanship ensure our desks are perfectly ergonomic. Choose a classic wooden desk or a modern desk with automatic height regulation and enjoy a higher level of comfort in your everyday job.",
  productsIds: [1, 2],
  accessories: [13, 41, 42],
  titleAboutProducts: "Solid Wooden Desks from real, natural wood",
  textAboutProducts: "With the rise of remote and hybrid working, it has become increasingly important to invest in a high-quality computer desk. The perfect desk should be comfortable, ergonomic, and functional. Oakywood’s wooden desks offer all of these benefits while also being aesthetically pleasing and crafted from natural, sustainably sourced materials. They last for years if maintained properly, making them a great option for those who plan on using their desks long-term.",
}

export const desksOrganization: any = {
  topImage: require("../assets/images/woodenDesks.webp"),
  title: "Desk Organization",
  titleDescription: "Optimized desk space",
  textDescription: "Good desk organization facilitates productivity, time management, and helps you concentrate on the task at hand. Oakywood accessories can help you construct and optimize your workspace. Arrange small items, place your laptop at an ergonomic position, charge your smartphone on a stylish wireless charger and start working comfortably.",
  productsIds: [],
  accessories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  titleAboutProducts: "Desk Accessories",
  textAboutProducts: "Desk clutter can be not just annoying but also productivity-inhibiting. In an effort to regain order, accessories such as Desk Shelf, Monitor Stand, Mouse Pad, or a variety of desk organizers can prove invaluable. With these tools, the task of desk organization is made infinitely easier. If you use laptop or tablet as a work tool on a daily basis, a Laptop Stand will place devices at eye level so you wont have to hunch over your desk. Accessories like desk mat, wooden tray, wireless charging pad, or phone stand will allow you to work in an environment thats not just orderly but conducive to productivity – giving you all the resources you need right at your fingertips.",
}

export const chargingDocks: any = {
  topImage: require("../assets/images/woodenDesks.webp"),
  title: "Charging Docks",
  titleDescription: "Optimized desk space",
  textDescription: "Good desk organization facilitates productivity, time management, and helps you concentrate on the task at hand. Oakywood accessories can help you construct and optimize your workspace. Arrange small items, place your laptop at an ergonomic position, charge your smartphone on a stylish wireless charger and start working comfortably.",
  productsIds: [],
  accessories: [27, 31, 2, 8, 21],
  titleAboutProducts: "Desk Accessories",
  textAboutProducts: "Desk clutter can be not just annoying but also productivity-inhibiting. In an effort to regain order, accessories such as Desk Shelf, Monitor Stand, Mouse Pad, or a variety of desk organizers can prove invaluable. With these tools, the task of desk organization is made infinitely easier. If you use laptop or tablet as a work tool on a daily basis, a Laptop Stand will place devices at eye level so you wont have to hunch over your desk. Accessories like desk mat, wooden tray, wireless charging pad, or phone stand will allow you to work in an environment thats not just orderly but conducive to productivity – giving you all the resources you need right at your fingertips.",
}

export const carruselExplorMoreData = [
  {
    image: { uri: "https://oakywood.shop/cdn/shop/files/G0A8262-_1__1982x_a085b854-a451-43d2-8b73-4a0dbb1ddbea.jpg?crop=center&height=516&v=1666647656&width=720" },
    title: 'Our story',
    text: 'We are a group of passionate people sharing the same core values: quality, sustainable development, and respect for others. Part of the Oakyteam works on site at the Ciche workshop, whilst others work remotely. Although we usually see each other online, we make a terrific, tightly knit team.',
    buttonTitle: "FIND OUT MORE",
  },
  {
    image: { uri: "https://oakywood.shop/cdn/shop/files/i-n9XTCN2-X5_671afc73-9806-47f1-9922-76adf898af2f.jpg?crop=center&height=516&v=1706129129&width=720" },
    title: 'Environmental Initiatives',
    text: 'At Oakywood, we pay special attention to environmental and social issues – simply because we care about the planet and other people. Our brand philosophy is all about high quality – not just when it comes to our products but in every aspect of life.',
    buttonTitle: "FIND OUT MORE",
  },
  {
    image: { uri: "https://oakywood.shop/cdn/shop/files/G0A8815mniejszy_d0a97b85-5737-4d38-ab12-354a698111c4.jpg?crop=center&height=516&v=1666647791&width=720" },
    title: 'Our Materials',
    text: 'Nature, design, and balance – these are the values that guide our creative process at Oakywood. Therefore, we only use sustainably sourced, noble, natural materials of the highest quality. This makes our products durable, functional, and beautiful so using them is pure joy.',
    buttonTitle: "FIND OUT MORE",
  }]

export const mainPage: any = {
  homeEssentials: [1, 2, 3, 7, 4, 6],

  newArrivals: [27, 31, 2, 8, 21, 1],

  suggestedUse: [
    {
      image: { uri: 'https://oakywood.shop/cdn/shop/files/Kopia_220810_Oakywood_D3_3361hr_ab712d75-cbca-474a-96dc-a569f42ab2cc.jpg?crop=center&height=540&v=1669305835&width=540' }
    },
    {
      image: { uri: 'https://oakywood.shop/cdn/shop/files/220810_Oakywood_D3_2733.jpg?crop=center&height=540&v=1669122869&width=540' }
    },
    {
      image: { uri: "https://oakywood.shop/cdn/shop/files/Kopia_220808_Oakywood_D1_1113.jpg?crop=center&height=540&v=1669312966&width=540" }
    },
    {
      image: { uri: "https://oakywood.shop/cdn/shop/files/Kopia_Kopia_Kopia_220810_Oakywood_D3_3287.jpg?crop=center&height=540&v=1669313051&width=540" }
    },
    {
      image: { uri: "https://oakywood.shop/cdn/shop/files/220809_Oakywood_D2_1901_b589dab3-9471-4262-939d-c1d4d9c04781.jpg?crop=center&height=540&v=1669306514&width=540" }
    },],
}


export const blog: any = [
  {
    image: { uri: "https://oakywood.shop/cdn/shop/articles/hr_migdal_oakywood_2_591feb31-2d40-4eb8-b026-f8c509368144.jpg?crop=center&height=386&v=1706176054&width=540" },
    title: 'How to work ergonomically without much space',
    text: 'We are sure that no one here needs any convincing that a well designed and expertly arranged home office is of huge importance in work and in life. However, not everyone has the ability to make their office look like an inspirational instagram post - they simply don’...',
    date: 'Jan 25, 2024'
  },
  {
    image: { uri: "https://oakywood.shop/cdn/shop/articles/Kopia_220809_Oakywood_D2_1883_3a42cce0-123d-421b-9bd4-41a290d1932e.jpg?crop=center&height=386&v=1705568121&width=540" },
    title: 'How multitasking kills productivity',
    text: 'The beginning of each year is when our New Year’s resolutions are still freshly exciting, our motivation levels are high, and we feel ready to pursue them with ferocity. Unfortunately, that’s where we often run into problems, especially if our plans are very ambitiou...',
    date: 'Jan 18, 2024'
  },
  {
    image: { uri: "https://oakywood.shop/cdn/shop/articles/Kopia_220809_Oakywood_D2_1883_3a42cce0-123d-421b-9bd4-41a290d1932e.jpg?crop=center&height=386&v=1705568121&width=540" },
    title: 'Laptop Dock and Laptop Stand: what’s new?',
    text: 'Every now and then, even the iconic favorites need to be refreshed and perfected. At Oakywood, we make sure our accessories are tailored to our clients’ needs  hence, apart from coming up with new solutions, we regularly analyze our existing products and their usabi...',
    date: 'Dec 7, 2023'
  }]