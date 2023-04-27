import './propertyList.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setcity from '../../store/actions/citiesAction';

import { Link } from 'react-router-dom';

const PropertyList = () => {
  const location = useLocation();
  // const [destination1, setDestination] = useState('');
  const [destination1, setDestination] = useState(
    location.state?.destination1 || ''
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cities = useSelector((state) => state.cities.getcities);

  useEffect(() => {
    dispatch(setcity(page));
  });

  const navigate = useNavigate();
  const handleSearch = () => {
    console.log(destination1);

    navigate('/hotelsbycity', { state: { destination1 } });
  };

  return (
    <div className="pList">
      <>
        <div className="d-flex pList">
          {cities.map(function (city) {
            return (
              <div key={city._id} className="pListItem">
                <div className="pListItem">
                  <img
                    className=" pListImg"
                    variant="top"
                    src={city.CityImage}
                    alt=""
                  />

                  <div className="pListTitles">
                    <h1
                      onMouseOver={(e) => setDestination(e.target.innerHTML)}
                      onClick={handleSearch}
                    >
                      {city.CityName}
                    </h1>
                    <h2>233 hotels</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};
export default PropertyList;
