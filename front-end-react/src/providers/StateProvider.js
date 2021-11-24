import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const stateContext = createContext();

export default function StateProvider(props) {
  // Here is our Shared State Object
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
    gardens: {},
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
        console.log(gardensData);
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

  const handleDayChange = (event: any) => {
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

  const handleTime = (newTime: any) => {
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

  function bookNotification(state: any) {
    console.log(state);
    const time = state.time.toString();
    console.log(time);
    return axios
      .post(`http://localhost:8080/api/notifications/1`, { state, time })
      .then(() => {
        console.log("Sucessful Put!");
      });
  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
  };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
