import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const mainCategory = req.query.mainCategory || '';
    const category = req.query.category || '';
    const subCategory = req.query.subCategory || '';
    const groundType = req.query.groundType || '';
    const rezolution = req.query.rezolution || '';
    const brand = req.query.brand || '';
    const model = req.query.model || '';
    const fuel = req.query.fuel || '';
    const commerceType = req.query.commerceType || '';
    const carosery = req.query.carosery || '';
    const furnished = req.query.furnished || '';
    const rooms = req.query.rooms || '';
    const steeringWheel = req.query.steeringWheel || '';
    const colour = req.query.colour || '';
    const condition = req.query.condition || '';
    const minPrice =
      req.query.minPrice && Number(req.query.minPrice) !== 0
        ? Number(req.query.minPrice)
        : 0;
    const maxPrice =
      req.query.maxPrice && Number(req.query.maxPrice) !== 0
        ? Number(req.query.maxPrice)
        : 0;

    const minYear =
      req.query.minYear && Number(req.query.minYear) !== 0
        ? Number(req.query.minYear)
        : 0;
    const maxYear =
      req.query.maxYear && Number(req.query.maxYear) !== 0
        ? Number(req.query.maxYear)
        : 0;

    const minEngine =
      req.query.minEngine && Number(req.query.minEngine) !== 0
        ? Number(req.query.minEngine)
        : 0;

    const maxEngine =
      req.query.maxEngine && Number(req.query.maxEngine) !== 0
        ? Number(req.query.maxEngine)
        : 0;

    const minHorsePower =
      req.query.minHorsePower && Number(req.query.minHorsePower) !== 0
        ? Number(req.query.minHorsePower)
        : 0;
    const maxHorsePower =
      req.query.maxHorsePower && Number(req.query.maxHorsePower) !== 0
        ? Number(req.query.maxHorsePower)
        : 0;

    const minUsefulSurface =
      req.query.minUsefulSurface && Number(req.query.minUsefulSurface) !== 0
        ? Number(req.query.minUsefulSurface)
        : 0;

    const maxUsefulSurface =
      req.query.maxUsefulSurface && Number(req.query.maxUsefulSurface) !== 0
        ? Number(req.query.maxUsefulSurface)
        : 0;

    const minKm =
      req.query.minKm && Number(req.query.minKm) !== 0
        ? Number(req.query.minKm)
        : 0;

    const maxKm =
      req.query.maxKm && Number(req.query.maxKm) !== 0
        ? Number(req.query.maxKm)
        : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const mainCategoryFilter = mainCategory ? { mainCategory } : {};
    const categoryFilter = category ? { category } : {};
    const subCategoryFilter = subCategory ? { subCategory } : {};
    const groundTypeFilter = groundType ? { groundType } : {};

    const brandFilter = brand ? { brand } : {};
    const rezolutionFilter = rezolution ? { rezolution } : {};
    const modelFilter = model ? { model } : {};
    const fuelFilter = fuel ? { fuel } : {};
    const commerceTypeFilter = commerceType ? { commerceType } : {};
    const caroseryFilter = carosery ? { carosery } : {};
    const furnishedFilter = furnished ? { furnished } : {};
    const roomsFilter = rooms ? { rooms } : {};
    const steeringWheelFilter = steeringWheel ? { steeringWheel } : {};
    const colourFilter = colour ? { colour } : {};
    const conditionFilter = condition ? { condition } : {};

    const priceFilter =
      minPrice && maxPrice
        ? { price: { $gte: minPrice, $lte: maxPrice } }
        : minPrice
        ? { price: { $gte: minPrice } }
        : maxPrice
        ? { price: { $lte: maxPrice } }
        : {};

    const yearFilter =
      minYear && maxYear
        ? { year: { $gte: minYear, $lte: maxYear } }
        : minYear
        ? { year: { $gte: minYear } }
        : maxYear
        ? { year: { $lte: maxYear } }
        : {};

    const engineFilter =
      minEngine && maxEngine
        ? { engine: { $gte: minEngine, $lte: maxEngine } }
        : minEngine
        ? { engine: { $gte: minEngine } }
        : maxEngine
        ? { engine: { $lte: maxEngine } }
        : {};

    const horsePowerFilter =
      minHorsePower && maxHorsePower
        ? { horsePower: { $gte: minHorsePower, $lte: maxHorsePower } }
        : minHorsePower
        ? { horsePower: { $gte: minHorsePower } }
        : maxHorsePower
        ? { horsePower: { $lte: maxHorsePower } }
        : {};

    const usefulSurfaceFilter =
      minUsefulSurface && maxUsefulSurface
        ? { usefulSurface: { $gte: minUsefulSurface, $lte: maxUsefulSurface } }
        : minUsefulSurface
        ? { usefulSurface: { $gte: minUsefulSurface } }
        : maxUsefulSurface
        ? { usefulSurface: { $lte: maxUsefulSurface } }
        : {};

    const kmFilter =
      minKm && maxKm
        ? { km: { $gte: minKm, $lte: maxKm } }
        : minKm
        ? { km: { $gte: minKm } }
        : maxKm
        ? { km: { $lte: maxKm } }
        : {};

    const count = await Product.countDocuments({
      ...nameFilter,
      ...mainCategoryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...rezolutionFilter,
      ...groundTypeFilter,
      ...modelFilter,
      ...furnishedFilter,
      ...usefulSurfaceFilter,
      ...roomsFilter,
      ...fuelFilter,
      ...caroseryFilter,
      ...steeringWheelFilter,
      ...colourFilter,
      ...commerceTypeFilter,
      ...conditionFilter,
      ...yearFilter,
      ...engineFilter,
      ...horsePowerFilter,
      ...kmFilter,
    });

    const products = await Product.find({
      ...nameFilter,
      ...mainCategoryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...groundTypeFilter,
      ...furnishedFilter,
      ...usefulSurfaceFilter,
      ...roomsFilter,
      ...rezolutionFilter,
      ...modelFilter,
      ...fuelFilter,
      ...caroseryFilter,
      ...commerceTypeFilter,
      ...steeringWheelFilter,
      ...colourFilter,
      ...conditionFilter,
      ...yearFilter,
      ...engineFilter,
      ...horsePowerFilter,
      ...kmFilter,
    });

    res.send({ products, count });
  })
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    name,
    mainCategory,
    category,
    subCategory,
    groundType,
    model,
    brand,
    rezolution,
    furnished,
    rooms,
    usefulSurface,
    price,
    year,
    km,
    carosery,
    commerceType,
    fuel,
    engine,
    horsePower,
    steeringWheel,
    image,
    description,
    colour,
    condition,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedProduct = {
    name,
    mainCategory,
    category,
    subCategory,
    commerceType,
    model,
    groundType,
    price,
    brand,
    furnished,
    usefulSurface,
    rooms,
    rezolution,
    year,
    km,
    carosery,
    fuel,
    engine,
    horsePower,
    steeringWheel,
    image,
    description,
    colour,
    condition,
    _id: id,
  };
  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.json(updatedProduct);
});

router.post('/', async (req, res) => {
  const {
    name,
    mainCategory,
    category,
    subCategory,
    commerceType,
    model,
    groundType,
    price,
    brand,
    rezolution,
    year,
    km,
    furnished,
    usefulSurface,
    rooms,
    carosery,
    fuel,
    engine,
    horsePower,
    steeringWheel,
    image,
    description,
    colour,
    condition,
  } = req.body;
  const newProduct = new Product({
    name,
    mainCategory,
    category,
    subCategory,
    model,
    commerceType,
    groundType,
    price,
    brand,
    furnished,
    usefulSurface,
    rooms,
    rezolution,
    year,
    km,
    carosery,
    fuel,
    engine,
    horsePower,
    steeringWheel,
    image,
    description,
    colour,
    condition,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No product with id: ${id}`);
  await Product.findByIdAndRemove(id);
  res.json({ message: 'Product deleted successfully.' });
});

export default router;
