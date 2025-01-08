const Delivery = require("../models/Delivery");

exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    const delivery = await Delivery.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(delivery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add functions for marking deliveries as complete and fetching delivery details...
