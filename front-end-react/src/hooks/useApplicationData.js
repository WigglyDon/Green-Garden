import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    notifications: {},
    notificationFormData: {
      days: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
      time: "",
    },
    garden: null,
    gardens: [],
    vegetables: {},
    auth: false,
    users: {},
    gardensVegetables: {},
    test: 0,
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/notifications"),
      axios.get("http://localhost:8080/api/gardens"),
      axios.get("http://localhost:8080/api/vegetables"),
      axios.get("http://localhost:8080/api/users"),
      axios.get("http://localhost:8080/api/gardensvegetables"),
    ])
      .then((all) => {
        const notificationsData = all[0].data;
        const gardensData = all[1].data;
        const vegetablesData = all[2].data.data;
        const usersData = all[3].data;
        const gardensVegetablesData = all[4].data;
        setState((prev) => ({
          ...prev,
          notifications: notificationsData,
          gardens: gardensData,
          vegetables: vegetablesData,
          gardensVegetables: gardensVegetablesData,
          users: usersData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDayChange = (event) => {
    setState({
      ...state,
      notificationFormData: {
        ...state.notificationFormData,
        days: {
          ...state.notificationFormData.days,
          [event.target.name]: event.target.checked,
        },
      },
    });
  };

  const handleTime = (newTime) => {
    setState({
      ...state,
      notificationFormData: {
        ...state.notificationFormData,
        time: newTime,
      },
    });
  };

  const handleVegetable = () => {
    setState({
      ...state,
      vegetables: {
        ...state.vegetables,
      },
    });
  };

  function bookNotification(state) {
    return axios
      .post(`http://localhost:8080/api/notifications`, { state })
      .then(() => {
        console.log("Sucessful Put!");
      });
  }

  function createGarden(state) {
    // console.log("GARDEN", state);
    return axios
      .post(`http://localhost:8080/api/gardens/`, { state })
      .then((res) => {
        // console.log({ res });
        console.log("Sucessful Put!");
        updateGardenState();
      });
  }
  const login = function () {
    return axios.put(`http://localhost:8080/api/users`).then(() => {
      console.log("Sucessful Put!");
    });
  };

  const updateAuthState = function () {
    return axios
      .get("http://localhost:8080/api/users")
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          auth: data,
        }));
      })
      .catch((err) => console.error(err));
  };

  const logout = function () {
    setState({
      ...state,
      auth: false,
    });
  };

  function updateGardenState() {
    return axios
      .get("http://localhost:8080/api/gardens")
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          gardens: data,
        }));
      })
      .catch((err) => console.error(err));
  }

  function changeGarden(id) {
    setState((prevState) => ({
      ...prevState,
      garden: id,
    }));
  }

  return {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
    createGarden,
    login,
    logout,
    changeGarden,
    updateAuthState,
  };
}
