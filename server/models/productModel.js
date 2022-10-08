import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    mainCategory: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: false },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: false },
    rezolution: { type: String, required: false },
    furnished: { type: String, required: false },
    usefulSurface: { type: Number, required: false },
    groundType: {type: String, required: false},
    commerceType: {type: String, required: false},
    rooms: { type: Number, required: false },
    year: { type: Number, required: false },
    model: { type: String, required: false },
    km: { type: Number, required: false },
    carosery: { type: String, required: false },
    fuel: { type: String, required: false },
    engine: { type: Number, required: false },
    horsePower: { type: Number, required: false },
    steeringWheel: { type: String, required: false },
    colour: { type: String, required: false },
    condition: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

var Product = mongoose.model('Product', productSchema);

export default Product;
