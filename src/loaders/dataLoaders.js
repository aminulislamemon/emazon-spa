import { getStoredCart } from "../utilities/fakedb";

export const dataLoaders = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const saveCart = getStoredCart();
    const prevCart = [];
  for(const id in saveCart){
    const addedProduct = products.find(product => product.id === id )

    if (addedProduct) {
        const quantity = saveCart[id]
        addedProduct.quantity = quantity
        prevCart.push(addedProduct)
    }
  };
  return {products: products, prevCart: prevCart};
};
