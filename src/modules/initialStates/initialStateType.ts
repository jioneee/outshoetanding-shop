export type CartStateType = {
  count: number;
  cartItems: Array<any>;
};

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  img: {
    image: string;
    title: string;
    price: number;
  };
};
