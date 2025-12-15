import userModel from '../models/usermodel.js'

// ------------------ ADD ITEM TO CART ------------------
const addtocart = async (req, res) => {
  try {
    const { userId, itemid } = req.body;

    let userdata = await userModel.findById(userId);
    let cartData = userdata.cartData || {};

    // add item
    if (!cartData[itemid]) {
      cartData[itemid] = 1;
    } else {
      cartData[itemid] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding item" });
  }
};

// ------------------ REMOVE ITEM FROM CART ------------------
const removefromcart = async (req, res) => {
  try {
    const { userId, itemid } = req.body;

    let userdata = await userModel.findById(userId);
    let cartData = userdata.cartData || {};

    if (cartData[itemid] > 1) {
      cartData[itemid] -= 1;
    } else {
      delete cartData[itemid];
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing item" });
  }
};

// ------------------ GET USER CART ------------------
const getcart = async (req, res) => {
  try {
    const { userId } = req.body;

    let userdata = await userModel.findById(userId);
    let cartData = userdata.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching cart" });
  }
};

export { addtocart, removefromcart, getcart };
