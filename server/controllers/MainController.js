const MainSlider = require("../schemas/MainSlider");

const MainController = {
    getMainSlider: async (req, res) => {
    const data = await MainSlider.find();
    res.send(data).status(200);
    },
    addMainSlider: async (req, res) => {
        const { img, name, author } = req.body;
        const data =  new MainSlider({img, name, author})
        data.save();
        res.send('Album was added!').status(200);
    }
}

module.exports = MainController;

 