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
    gardens: [],
    vegetables: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/notifications"),
      axios.get("http://localhost:8080/api/gardens"),
      axios.get("http://localhost:8080/api/vegetables"),
    ])
      .then((all) => {
        const notificationsData = all[0].data;
        const gardensData = all[1].data;
        const vegetablesData = all[2].data.data;
        setState((prev) => ({
          ...prev,
          notifications: notificationsData,
          gardens: gardensData,
          vegetables: vegetablesData,
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
        //new data
      },
    });
  };

  function bookNotification(state) {
    console.log(state);
    // const time = state.time.toString();  only use to save time as mountain in database
    // console.log(time);
    return axios
      .post(`http://localhost:8080/api/notifications`, { state })
      .then(() => {
        console.log("Sucessful Put!");
      });
  }

  function createGarden(state) {
    console.log('GARDEN',state);
 
    return axios
      .post(`http://localhost:8080/api/gardens/`, { state })
      .then(() => {
        console.log("Sucessful Put!");
      });
  }

  
  return {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
    createGarden,
  };
}
