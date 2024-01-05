import { useState, useEffect } from "react";

import env from "../../../env";
import { http } from "../axios-https";

const useGetUnitUser = (unitId) => {
  const [userLoading, setUserLoading] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  const getUnitUser = () => {
    setUserLoading(true);
    http
      .get(`${env.clinton_homes_base_url}/admin/unit-owner-details/${unitId}`)
      .then((response) => {
        console.log(response.data.data);
        setUserDetail([...response.data.data]);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUnitUser();
  }, []);

  return {
    userLoading,
    userDetail,
  };
};

export default useGetUnitUser;
