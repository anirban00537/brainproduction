const ServiceModel = require("../models/ServiceModel.js");
const mongoose = require("mongoose");
exports.getServiceContent = getServiceContent = async (req, res) => {
  try {
    const Service = await ServiceModel.find();

    res.status(200).json(Service);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.createServiceContent = createServiceContent = async (req, res) => {
  const Service = req.body;
  const newServiceContent = new ServiceModel(Service);
  try {
    await newServiceContent.save();
    res.status(201).json(newServiceContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.deleteServicePost = deleteServicePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await ServiceModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};
