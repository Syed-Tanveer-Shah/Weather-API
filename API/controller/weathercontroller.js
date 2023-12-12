import weathermodle from "../modle/weather.js";

class weathercontroller {
    static createDoc = async (req, res) => {
        try {
            const doc = new weathermodle({
                temperature:req.body.temperature,
                humidity:req.body.humidity,
                wind:req.body.wind,
                conditions:req.body.conditions
            })
            const result = await doc.save();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getAllDoc = (req, res) => {
        res.send("get all doc");
    }

    static getSingleDocById = async (req, res) => {
        try {
            const {Id} = req.params
            const result = await weathermodle.findById(req.params.Id);
            res.send(result);
        } catch (error) {
            res.send("Data not Found");
        }
    }

    static updatDocById = async (req, res) => {
        try {
            const result = await weathermodle.findByIdAndUpdate({ _id: req.params.id }, req.body); // Corrected updateOne usage
            res.send(result);
        } catch (error) {
            console.log(error); 
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await weathermodle.deleteOne({ _id: req.params.id }); // Corrected deleteOne usage
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
}

export default weathercontroller;
