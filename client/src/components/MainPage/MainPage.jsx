import { Link } from "react-router-dom";
import Countries from '../Countries/Countries'
import React, { useEffect } from "react";
import { getCountries } from '../../actions/actions'
import { useDispatch } from "react-redux";
import Nav from '../nav/Nav.jsx'
export function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <div>
        <Countries />
      </div>
    </div>
  );
}

export default MainPage;