import './propertyList.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../../axiosConfig/axiosConfig';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setcity from '../../store/actions/citiesAction';

import { Link } from 'react-router-dom';

const PropertyList = () => {
  const location = useLocation();
  // const [destination1, setDestination] = useState('');
  const [cityId, setcitId] = useState('');
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

  const seachactivity = () => {
    return (
      axiosConfig.get(`/activities/searchcity/${cityId}`),
      navigate('/activities')
    );
  };

  return (
    <div className="pList">
      <>
        <div className="d-flex flex-wrap  pList">
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
                      onMouseOver={(e) => {
                        setDestination(e.target.innerHTML), setcitId(city._id);
                      }}
                      onClick={handleSearch}
                    >
                      {city.CityName}
                    </h1>
                    <h2>
                      {' '}
                      hotels: {city.hotelsCount}{' '}
                      <span onClick={seachactivity}>
                        | activities:
                        {city.activitiesCount}{' '}
                      </span>
                      | tours: {city.activitiesCount}{' '}
                    </h2>
                    {/* <h2> tours: {city.activitiesCount}</h2> */}
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
