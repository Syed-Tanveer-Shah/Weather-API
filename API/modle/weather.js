import mongoose from "mongoose";

const { Schema } = mongoose;
const WeatherSchema = new mongoose.Schema({

  temperature:
  {
    type: String,
    required: true
  },
  humidity:
  {
    type: String,
    required: true
  },
  wind:
  {
    type: String,
    required: true
  },
  conditions:
  {
    type: String,
    required: true
  },
});

const weather = mongoose.model("Weather", WeatherSchema);

export default weather
