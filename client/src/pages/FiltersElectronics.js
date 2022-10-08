// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { getElectronics, getCategories } from '../actions/electronic';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { Helmet } from 'react-helmet-async';
// import { ELECTRONIC_DELETE_RESET } from '../constants/electronicActionTypes';
// import { BiX, BiChevronDown } from 'react-icons/bi';
// import {
//   brandArray,
//   rezArray,
//   priceArr,
//   statArray,
//   subCtArray,
//   elCtArray,
//   electronicsArray,
//   mainCategoryArr,
// } from '../utils';
// import Electronic from '../components/Electronic';
// import ElectronicSearchBox from '../components/ElectronicSearchBox';

// export default function FiltersElectronics() {
//   const [subCtArray, setSubCtArray] = useState([]);
//   const [elCtSelected, setElCtSelected] = useState('all');
//   const [subCtSelected, setSubCtSelected] = useState('all');
//   const [brandSelected, setBrandSelected] = useState('all');
//   const [rezSelected, setRezSelected] = useState('all');
//   const [statSelected, setStatSelected] = useState('all');
//   const [minPriceSelected, setMinPriceSelected] = useState('From');
//   const [maxPriceSelected, setMaxPriceSelected] = useState('To');

//   //const [editInput, setEditInput] = useState(false);

//   const navigate = useNavigate();
//   const {
//     elName = 'all',
//     mainCategory = 'all',
//     elCt = 'all',
//     subCt = 'all',
//     brand = 'all',
//     rez = 'all',
//     stat = 'all',
//     minPrice = 0,
//     maxPrice = 0,
//   } = useParams();

//   const dispatch = useDispatch();
//   const electronicsList = useSelector((state) => state.electronicsList);
//   const { loading, error, electronics, count } = electronicsList;

//   const deletedElectronic = useSelector((state) => state.deletedElectronic);
//   const { error: errorDelete, success: successDelete } = deletedElectronic;

//   // const electronicsCategoryList = useSelector((state) => state.electronicsCategoryList);
//   // const {
//   //   loading: loadingCategory,
//   //   error: errorCategory,
//   //   categories,
//   // } = electronicsCategoryList;

//   useEffect(() => {
//     if (successDelete) {
//       dispatch({ type: ELECTRONIC_DELETE_RESET });
//     }
//     //dispatch(getCategories());
//     dispatch(
//       getElectronics({
//         elName: elName !== 'all' ? elName : '',
//         elCt: elCt !== 'all' ? elCt : '',
//         subCt: subCt !== 'all' ? subCt : '',
//         brand: brand !== 'all' ? brand : '',
//         rez: rez !== 'all' ? rez : '',
//         stat: stat !== 'all' ? stat : '',
//         minPrice,
//         maxPrice,
//       })
//     );
//   }, [
//     dispatch,
//     successDelete,
//     elName,
//     elCt,
//     subCt,
//     brand,
//     stat,
//     rez,
//     minPrice,
//     maxPrice,
//   ]);

//   const getFilterUrl = (filter) => {
//     const filterElName = filter.elName || elName;
//     const filterElCt = filter.elCt || elCt;
//     const filterSubCt = filter.subCt || subCt;
//     const filterBrand = filter.brand || brand;
//     const filterRez = filter.rez || rez;
//     const filterStat = filter.stat || stat;

//     const filterMinPrice = filter.minPrice
//       ? filter.minPrice
//       : filter.minPrice === 0
//       ? 0
//       : minPrice;
//     const filterMaxPrice = filter.maxPrice
//       ? filter.maxPrice
//       : filter.maxPrice === 0
//       ? 0
//       : maxPrice;

//     return `/electronics/filters/elName/${filterElName}/elCt/${filterElCt}/subCt/${filterSubCt}/brand/${filterBrand}/minPrice/${filterMinPrice}/maxPrice/${filterMaxPrice}/rez/${filterRez}/stat/${filterStat}`;
//   };

//   const capitalizeFirst = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   useEffect(() => {
//     Object.entries(elCtArray).map((item) => {
//       if (item[0] == elCt) {
//         setSubCtArray(item[1]);
//       }
//     });
//   }, [elCtArray, elCt]);

//   return (
//     <div className="main-container">
//       <Helmet>
//         <title>Market App</title>
//       </Helmet>
//       <ElectronicSearchBox />
//       <h3>Filters</h3>{' '}
//       <div className="filters-container">
//         <section className="mainCategory">
//           <label className="mb-1">Main category</label>
//           <div className="dropdown" controlid="mainCategory">
//             <button className="dropbtn">
//               {'Electronics'}
//               <span>
//                 <BiChevronDown className="icon-style" />
//               </span>
//             </button>
//             <div className="dropdown-content">
//             {mainCategoryArr.map((mc, index) => (
//                 <Link
//                   to={`/${mc}/filters`}
//                   key={index}
//                   style={{ textDecoration: 'none' }}
//                 >
//                   {capitalizeFirst(mc)}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//         <section className="elCt">
//           <label className="mb-1">Category</label>
//           {/* {loadingCategory ? (
//             <LoadingBox></LoadingBox>
//           ) : errorCategory ? (
//             <MessageBox variant="danger">{errorCategory}</MessageBox>
//           ) : ( */}
//           <div className="dropdown" controlid="elCt">
//             <button className="dropbtn">
//               {elCtSelected}
//               <span>
//                 <BiChevronDown className="icon-style" />
//               </span>
//             </button>
//             <div className="dropdown-content">
//               {electronicsArray.map((e, index) => (
//                 <Link
//                   key={index}
//                   to={getFilterUrl({ elCt: e, elName: 'all' })}
//                   style={{ textDecoration: 'none' }}
//                   onClick={() => {
//                     setElCtSelected(e);
//                   }}
//                 >
//                   {e}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           {/* )} */}
//         </section>
//         <section className="subCt">
//           <label className="mb-1">Sub Category</label>
//           <div className="dropdown" controlid="subCt">
//             <button className="dropbtn">
//               {subCtSelected}
//               <span>
//                 <BiChevronDown className="icon-style" />
//               </span>
//             </button>
//             <div className="dropdown-content">
//               {subCtArray.map((s, index) => (
//                 <Link
//                   to={getFilterUrl({ subCt: s })}
//                   style={{ textDecoration: 'none' }}
//                   key={index}
//                   onClick={() => setSubCtSelected(s)}
//                 >
//                   {s}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//         {elCt != 'all' && (
//           <section className="brand">
//             <label className="mb-1">Brand</label>
//             <div className="dropdown" controlid="brand">
//               <button className="dropbtn">
//                 {brandSelected}
//                 <span>
//                   <BiChevronDown className="icon-style" />
//                 </span>
//               </button>
//               <div className="dropdown-content">
//                 {brandArray.map((b, index) => (
//                   <Link
//                     key={index}
//                     to={getFilterUrl({ brand: b })}
//                     style={{ textDecoration: 'none' }}
//                     onClick={() => setBrandSelected(b)}
//                   >
//                     {b}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//         {elCt == 'TVs' ? (
//           <section className="rez">
//             <label className="mb-1">Rezolution</label>
//             <div className="dropdown" controlid="rez">
//               <button className="dropbtn">
//                 {rezSelected}
//                 <span>
//                   <BiChevronDown className="icon-style" />
//                 </span>
//               </button>
//               <div className="dropdown-content">
//                 {rezArray.map((r, index) => (
//                   <Link
//                     key={index}
//                     to={getFilterUrl({ rez: r })}
//                     style={{ textDecoration: 'none' }}
//                     onClick={() => setRezSelected(r)}
//                   >
//                     {r}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </section>
//         ) : null}
//         <section className="price">
//           <label className="mb-1">Price</label>
//           <div className="interval-filter">
//             <div className="dropdown-interval" controlid="price">
//               <button className="dropbtn-interval">
//                 {minPriceSelected}

//                 <span>
//                   {minPriceSelected === 'From' ? (
//                     <BiChevronDown className="icon-style" />
//                   ) : (
//                     <Link to={getFilterUrl({ minPrice: 0 })}>
//                       <BiX
//                         className="icon-style"
//                         onClick={() => setMinPriceSelected('From')}
//                       />
//                     </Link>
//                   )}
//                 </span>
//               </button>
//               <div className="dropdown-content-interval">
//                 {priceArr.map((p, index) => (
//                   <Link
//                     to={getFilterUrl({ minPrice: p })}
//                     key={index}
//                     style={{ textDecoration: 'none' }}
//                     onClick={() => setMinPriceSelected(p)}
//                   >
//                     {p}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="dropdown-interval" controlid="price">
//               <button className="dropbtn-interval">
//                 {maxPriceSelected}
//                 <span>
//                   {maxPriceSelected === 'To' ? (
//                     <BiChevronDown className="icon-style" />
//                   ) : (
//                     <Link to={getFilterUrl({ maxPrice: 0 })}>
//                       <BiX
//                         className="icon-style"
//                         onClick={() => setMaxPriceSelected('To')}
//                       />
//                     </Link>
//                   )}
//                 </span>
//               </button>
//               <div className="dropdown-content-interval">
//                 {priceArr.map((p, index) => (
//                   <Link
//                     to={getFilterUrl({ maxPrice: p })}
//                     key={index}
//                     style={{ textDecoration: 'none' }}
//                     onClick={() => setMaxPriceSelected(p)}
//                   >
//                     {p}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="stat">
//           <label className="mb-1">Status</label>
//           <div className="dropdown" controlid="stat">
//             <button className="dropbtn">
//               {statSelected}
//               <span>
//                 <BiChevronDown className="icon-style" />
//               </span>
//             </button>
//             <div className="dropdown-content">
//               {statArray.map((s, index) => (
//                 <Link
//                   key={index}
//                   to={getFilterUrl({ stat: s })}
//                   style={{ textDecoration: 'none' }}
//                   onClick={() => setStatSelected(s)}
//                 >
//                   {s}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//       <div>
//         {loading ? (
//           <LoadingBox></LoadingBox>
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <>
//             {electronics.length === 0 && (
//               <MessageBox>No Product Found</MessageBox>
//             )}
//             <div className="product-list">
//               {electronics.map((electronic, index) => (
//                 <Electronic key={index} electronic={electronic} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
