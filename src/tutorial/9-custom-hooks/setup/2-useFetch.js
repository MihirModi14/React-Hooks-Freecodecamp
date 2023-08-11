import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, name) => {
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
    getProducts();
  }, [url, name, getProducts]);

  return { loading, products };
};
