import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import {
  createOrder,
  getAllOrders,
  newPayment,
  sendStripePublishableKey,
} from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAutheticated, createOrder);

orderRouter.get(
  "/get-orders",
  isAutheticated,
  authorizeRoles("admin"),
  getAllOrders
);

orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);
orderRouter.get("/payment_intents/stripepublishablekey/confirm", sendStripePublishableKey);// i have added
orderRouter.post("/payment", isAutheticated, newPayment);
orderRouter.post("/payment_intents/stripepublishablekey/confirm", isAutheticated, newPayment, sendStripePublishableKey);//i have added
export default orderRouter;
