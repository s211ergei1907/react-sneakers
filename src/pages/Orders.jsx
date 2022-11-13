import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Card } from "../components/Card";
import { AppContext } from "../context";
import { fetchApi } from "../fetchApi/fetchApi";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    //Создайся, вызовись и сдохни
    (async () => {
      try {
        const { data } = await fetchApi.get("/order");
        // console.log(data.map((obj) => obj.items).flat());
         setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
         setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    
    })();

    // async function getOrderData() {
    //     const order = await fetchApi.get("order");
    //     setOrders(order.data)
    //     console.log(order.data);
    //   }
    //   getOrderData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((order, index) => {
          return <Card 
          key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...order}
          />          
        })}
      </div>
    </div>
  );
};
