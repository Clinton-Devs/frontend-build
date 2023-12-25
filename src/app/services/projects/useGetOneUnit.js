import { useState, useEffect } from "react";

import env from "../../../env";
import { http } from "../axios-https";

const useGetOneUnit = (unitId) => {
  const [loading, setLoading] = useState(false);
  const [unitDetail, setUnitDetail] = useState([]);
  const [floorPlanImages, setFloorPlanImages] = useState([]);

  const getOneUnit = () => {
    setLoading(true);
    http
      .get(`${env.clinton_homes_base_url}/public/unit/${unitId}`)
      .then((response) => {
        console.log(response.data.data);
        setUnitDetail([...response.data.data]);
        setFloorPlanImages([...response.data.data[0]["floorPlan"]]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOneUnit();
  }, []);

  return {
    loading,
    unitDetail,
    floorPlanImages,
  };
};

export default useGetOneUnit;
