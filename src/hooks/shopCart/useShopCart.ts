import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IProduct } from "../../interfaces/IProduct";

interface ShopCartStore {
  products: IProduct[];
  iscartopen: boolean;
  addProduct: (product: IProduct) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
  clearProducts: () => void;
  openShopCart: () => void;
}

const findProduct = (state: ShopCartStore, productId: number) => {
  return state.products.find((product) => product.id === productId);
};

export const useShopCart = create<ShopCartStore>()((set, get) => ({
  products: [],
  iscartopen: false,
  addProduct: (product: IProduct) => {
    set((state) => {
      const productFound = findProduct(state, product.id);

      if (productFound) {
        return { ...state };
      }

      product.quantity = 1;
      return { products: [...state.products, product] };
    });
  },
  increaseProductQuantity: (productId: number) => {
    set((state) => {
      const productFound = findProduct(state, productId) || ({} as IProduct);

      productFound?.quantity
        ? (productFound.quantity += 1)
        : (productFound.quantity = 1);

      return { products: [...state.products] };
    });
  },
  decreaseProductQuantity: (productId: number) => {
    set((state) => {
      const productFound = findProduct(state, productId);

      if (productFound) {
        if (productFound.quantity > 1) {
          productFound.quantity -= 1;
        } else {
          return {
            products: state.products.filter(
              (productItem) => productItem.id !== productId
            ),
          };
        }
      }

      return { products: [...state.products] };
    });
  },
  removeProduct: (productId: number) => {
    set((state) => {
      return {
        products: state.products.filter(
          (productItem) => productItem.id !== productId
        ),
      };
    });
  },
  clearProducts: () => {
    set(() => ({ products: [] }));
  },
  openShopCart: () => {
    set((state) => ({ iscartopen: !state.iscartopen }));
  },
}));
