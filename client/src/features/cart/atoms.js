import { atom } from "jotai";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartAtom = atom(storedCart);

export const addToCartAtom = atom(null, (get, set, item) => {
  const cart = get(cartAtom);
  const existing = cart.find((c) => c.productId === item.productId);

  let updated;

  if (existing) {
    updated = cart.map((c) =>
      c.productId === item.productId
        ? { ...c, quantity: c.quantity + 1 }
        : c
    );
  } else {
    updated = [
      ...cart,
      {
        ...item,
        quantity: 1,
        timestamp: Date.now(),
      },
    ];
  }

  set(cartAtom, updated);
  localStorage.setItem("cart", JSON.stringify(updated));
});

export const updateQuantityAtom = atom(
  null,
  (get, set, { productId, type }) => {
    const cart = get(cartAtom);

    const updated = cart
      .map((item) => {
        if (item.productId !== productId) return item;

        if (type === "increase")
          return { ...item, quantity: item.quantity + 1 };

        if (type === "decrease")
          return { ...item, quantity: item.quantity - 1 };

        return item;
      })
      .filter((item) => item.quantity > 0);

    set(cartAtom, updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }
);
export const totalAtom = atom((get) => {
  return get(cartAtom).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
});

export const discountAtom = atom(0);

export const cartCountAtom = atom((get) =>
  get(cartAtom).reduce((sum, item) => sum + item.quantity, 0)
);