import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [wish, setWish] = useState([]);
  const [orders, setOrders] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchUser();
    fetchUserOrders();
    fetchCategory();
    // fetchWishlist();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // Fetch user (and their cart)
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      // console.log("User API Response:", res.data);

      setUser(res.data.user); // store full user
      setCart(res.data.user.cart); // extract cart for easy access
      setWish(res.data.user.wishlist);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        setOrders(data.orders);
      } else {
        console.error("Failed to fetch orders:", data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        product,
        setProduct,
        cart,
        setCart,
        fetchUser,
        user,
        setUser,
        wish,
        setWish,
        orders,
        category,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
