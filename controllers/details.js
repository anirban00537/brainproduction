const DetailsModel = require("../models/DetailsModel.js");

exports.getDetailsContent = getDetailsContent = async (req, res) => {
  try {
    const Details = await DetailsModel.find({ detailsId: 1234 });

    res.status(200).json(Details);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createDetailsContent = createDetailsContent = async (req, res) => {
  const Details = req.body;
  const newDetailsContent = new DetailsModel(Details);
  try {
    await newDetailsContent.save();
    res.status(201).json(newDetailsContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.updateDetailsContent = updateDetailsContent = async (req, res) => {
  //   const { DetailsId } = req.params;
  const post = req.body;

  const postMessages = await DetailsModel.findOneAndUpdate(
    { detailsId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};
