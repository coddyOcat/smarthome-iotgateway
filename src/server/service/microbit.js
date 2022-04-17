const MicrobitData = require("./microbitModel")

exports.addMicrobitData = async (deviceName, deviceValue) => {
  const formData = new MicrobitData({
    field_name: deviceName,
    value: deviceValue,
  })
  await formData.save()
}

exports.getMicrobitData = async (req, res, next) => {
  try {
      const device = await MicrobitData.findOneAndDelete()
      if (device)
        res.status(200).send(device)
      else res.status(404).send("NOT OK")
  } catch(err) {
      res.status(404).send("NOT OK")
  }
}
