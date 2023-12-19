import { useState, useEffect } from "react";

import env from "../../../env";
import { http } from "../axios-https";

const useGetOneProject = (projectId) => {
  const [loading, setLoading] = useState(false);
  const [projectDetail, setProjectDetail] = useState([]);
  const [projectImages, setProjectImages] = useState([]);
  const [project3DImages, setProject3DImages] = useState([]);
  const [projectUnits, setProjectUnits] = useState([]);

  const getOneProject = () => {
    setLoading(true);
    http
      .get(`${env.clinton_homes_base_url}/public/project/${projectId}`)
      .then((response) => {
        console.log(response.data.data[0].units);
        setProjectDetail([...response.data.data]);
        setProjectImages([...response.data.data[0]["2D-ProjectImages"]]);
        setProject3DImages([...response.data.data[0]["3D-ProjectImages"]]);
        setProjectUnits([...response.data.data[0].units]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOneProject();
  }, []);

  return {
    loading,
    projectDetail,
    projectImages,
    project3DImages,
    projectUnits,
  };
};

export default useGetOneProject;
