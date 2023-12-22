import { useState, useEffect } from "react";

import env from "../../../env";
import { http } from "../axios-https";

const useGetAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  const getAllProjects = () => {
    setLoading(true);
    http
      .get(`${env.clinton_homes_base_url}/admin/all-users`)
      .then((response) => {
        const users = response.data.data;
        const usersData = users.map((user) => {
          return {
            id: user._id.substring(0, 5),
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
          };
        });
        setUserList([...usersData]);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return { userList, loading };
};

export default useGetAllUsers;
