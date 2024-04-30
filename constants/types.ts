export type Product = {
    id: number;
    name: string;
    price: number;
    image: { uri: string };
}


type Screen = {
    screen: string;
    path?: string
};

type MenuList = {
    title: string;
    screens: Screen[];
};

export type MenuItems = {
    title: string;
    route: string;
    menuList: MenuList[];
};