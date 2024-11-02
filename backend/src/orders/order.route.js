const express=require("express");
const { createAOrder, getOrderByEmail } = require("./order.controller");

const router=express.Router();

// create order endpoints\
router.post("/",createAOrder);

// get orders by user email
router.get("/email/:email",getOrderByEmail)

module.exports=router;
