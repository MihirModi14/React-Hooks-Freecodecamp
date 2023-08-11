import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    console.log("get product called!!!");
    getProducts();
  }, [url]);
  return { loading, products };
};
