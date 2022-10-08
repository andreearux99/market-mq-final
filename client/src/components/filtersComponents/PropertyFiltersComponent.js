import React, { useState } from 'react';
import { BiChevronDown, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { usefulSurfaceArray, furnishedArray, roomsArray } from '../../utils';

const PropertyFiltersComponent = (props) => {
  const [minUsefulSurfaceSelected, setMinUsefulSurfaceSelected] = useState(
    'From'
  );
  const [maxUsefulSurfaceSelected, setMaxUsefulSurfaceSelected] = useState(
    'To'
  );
  const { getFilterUrl, rooms, furnished, category} = props;
  console.log(category);
  return (
    <>
      {/* {category === 'grounds' && ( */}
        {/* <>
          <section className="furnished">
            <label className="mb-1">Furnished</label>
            <div className="dropdown" controlid="furnished">
              <button className="dropbtn">
                {furnished}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {furnishedArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ furnished: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {m}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="rooms">
            <label className="mb-1">Rooms</label>
            <div className="dropdown" controlid="rooms">
              <button className="dropbtn">
                {rooms}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {roomsArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rooms: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="usefulSurface">
            <label className="mb-1">Useful Surface</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {minUsefulSurfaceSelected}
                  <span>
                    {minUsefulSurfaceSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinUsefulSurfaceSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ minUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {maxUsefulSurfaceSelected}
                  <span>
                    {maxUsefulSurfaceSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxUsefulSurfaceSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ maxUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </> */}
      {/* )} */}
    </>
  );
};

export default PropertyFiltersComponent;
