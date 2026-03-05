const express=require('express');
const Cart=require('../models/Cart');
const Product=require('../models/Product');
const router=express.Router();

//Add to cart
router.post("/add/:id",async(req,res)=>{
    const product=await Product.findById(req.params.id);
    let existing=await Cart.findOne({productId:product._id});

    if(existing){
        existing.quantity+=1;
        await existing.save();
        return res.json(existing);
    }

    const cartItem=await Cart.create({
        productId:product._id,
        quantity:1,
        price:product.price
    });
    res.json(cartItem);
});


//Increase quantity

router.put("/increase/:id",async(req,res)=>{
    const item=await Cart.findById(req.params.id);
    item.quantity+=1;
    await item.save();
    res.json(item);
})

//Decrease quantity

router.put("/decrease/:id",async(req,res)=>{
    const item=await Cart.findById(req.params.id);
    if(item.quantity>1){
        item.quantity-=1;
        await item.save();
        res.json(item);

    }else{
        await Cart.findByIdAndDelete(req.params.id);
        res.json({message:"Item removed"});
    }
})


// Remove product
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});


// Get cart
router.get("/", async (req, res) => {
  const items = await Cart.find().populate("productId");
  res.json(items);
});


router.get("/", async (req, res) => {
  const items = await Cart.find().populate("productId");

  let total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const { code } = req.query;

  if (code === "SAVE10") {
    total = total * 0.9;
  }

  res.json({ items, total });
});




module.exports = router;


