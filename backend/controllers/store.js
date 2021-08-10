const Store = require("../models/store");

const registerStore = async (req, res) => {

    if(!req.body.name || !req.body.address || !req.body.city) return res.status(401).send("error, incomplete data");

    const dataFound = await Store.findOne({name: req.body.name});
    if(dataFound) return res.status(401).send("the store is already found");

    const store = new Store({

        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        dbStatus: true,

    })

    const result = await store.save();
    if(!result) return res.status(401).send("failed to register store");
    return res.status(200).send({store});


   

}

const listStore = async (req,res) => {

    const store = await Store.find();
    if(!store) return res.status(401).send("No Store")
    return res.status(200).send({store});

}

module.exports = {registerStore,listStore};