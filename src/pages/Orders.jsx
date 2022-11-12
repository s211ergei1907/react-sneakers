import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { fetchApi } from "../fetchApi/fetchApi";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Создайся, вызовись и сдохни
    (async () => {
      const { data } = await fetchApi.get("/order");
      console.log(data);
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
        {[].map((favorite, index) => {
          return <Card />;
        })}
      </div>
    </div>
  );
};
