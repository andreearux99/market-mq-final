import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import CreateAuto from './pages/CreateAuto';
//import CreateProperty from './pages/CreateProperty';
//import CreateElectronic from './pages/CreateElectronic';
// import EditProperty from './pages/EditProperty';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from './data/metaquantum3.0.png';
import Filters from './pages/Filters';
import EditProduct from './pages/EditProduct';
// import FiltersProperty from './pages/FiltersProperty';
// import FiltersElectronics from './pages/FiltersElectronics';
// import EditElectronic from './pages/EditElectronic';
import ProductPage from './pages/ProductPage';

const App = () => {
  let a = 'auto';
  return (
    <BrowserRouter>
      <Toaster />
      <div>
        <header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="metaquantum icon" />
          </Link>
          <div className="d-flex">
            <Nav.Link href="/create/auto">
              <Button>New Auto</Button>
            </Nav.Link>
            <Nav.Link href="/create/property">
              <Button>New Property</Button>
            </Nav.Link>
            <Nav.Link href="/create/electronic">
              <Button>New Electronic</Button>
            </Nav.Link>
            <Nav.Link href="/productPage">
              <Button>Product Page</Button>
            </Nav.Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/create/auto" element={<CreateAuto />} />
            {/* <Route path="/create/electronic" element={<CreateElectronic />} />
            <Route path="/create/property" element={<CreateProperty />} /> */}
            <Route path="/productPage" element={<ProductPage />} />

            <Route path="/:id/editProduct" element={<EditProduct />} />
            <Route path="/filters/auto" exact element={<Filters />} />
            <Route
              path="/filters/name/:name/mainCategory/:mainCategory"
              exact
              element={<Filters a={a}/>}
            />
            <Route
              path="/filters/name/:name"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/mainCategory/:mainCategory"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/auto/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower/furnished/:furnished"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower/furnished/:furnished/rooms/:rooms/"
              exact
              element={<Filters />}
            />
            <Route
              path="/filters/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower/furnished/:furnished/rooms/:rooms/minUsefulSurface/:minUsefulSurface/maxUsefulSurface/:maxUsefulSurface"
              exact
              element={<Filters />}
            />


            {/* <Route path="/createProperty" element={<CreateProperty />} />
            <Route path="/:id/editProperty" element={<EditProperty />} />

            <Route
              path="/properties/filters"
              exact
              element={<FiltersProperty />}
            />
            <Route
              path="/properties/filters/propertyName/:propertyName"
              exact
              element={<FiltersProperty />}
            />
            <Route
              path="/properties/filters/propertyName/:propertyName/propertyCategory/:propertyCategory"
              exact
              element={<FiltersProperty />}
            />

            <Route
              path="/properties/filters/propertyName/:propertyName/propertyCategory/:propertyCategory/furnished/:furnished/rooms/:rooms/minPrice/:minPrice/maxPrice/:maxPrice"
              exact
              element={<FiltersProperty />}
            />
            <Route
              path="/properties/filters/propertyName/:propertyName/propertyCategory/:propertyCategory/furnished/:furnished/rooms/:rooms/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear"
              exact
              element={<FiltersProperty />}
            />
            <Route
              path="/properties/filters/propertyName/:propertyName/propertyCategory/:propertyCategory/furnished/:furnished/rooms/:rooms/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minUsefulSurface/:minUsefulSurface/maxUsefulSurface/:maxUsefulSurface"
              exact
              element={<FiltersProperty />}
            />


            <Route path="/createElectronic" element={<CreateElectronic />} />
            <Route path="/:id/editElectronic" element={<EditElectronic />} />
            <Route
              path="/electronics/filters"
              exact
              element={<FiltersElectronics />}
            />
            <Route
              path="/electronics/filters/elName/:elName"
              exact
              element={<FiltersElectronics />}
            />
            <Route
              path="/electronics/filters/elName/:elName/elCt/:elCt"
              exact
              element={<FiltersElectronics />}
            />

            <Route
              path="/electronics/filters/elName/:elName/elCt/:elCt/subCt/:subCt/brand/:brand/minPrice/:minPrice/maxPrice/:maxPrice"
              exact
              element={<FiltersElectronics />}
            />
            <Route
              path="/electronics/filters/elName/:elName/elCt/:elCt/subCt/:subCt/brand/:brand/minPrice/:minPrice/maxPrice/:maxPrice/rez/:rez/stat/:stat"
              exact
              element={<FiltersElectronics />}
            />
            <Route
              path="/electronics/filters/elName/:elName/elCt/:elCt/subCt/:subCt/brand/:brand/minPrice/:minPrice/maxPrice/:maxPrice/rez/:rez/stat/:stat"
              exact
              element={<FiltersElectronics />}
            /> */}
            <Route path="/" exact element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
