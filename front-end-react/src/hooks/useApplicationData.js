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
    gardens: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/notifications"),
      axios.get("http://localhost:8080/api/gardens"),
    ])
      .then((all) => {
        const notificationsData = all[0].data;
        const gardensData = all[1].data;
        setState((prev) => ({
          ...prev,
          notifications: notificationsData,
          gardens: gardensData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      notificationFormData: {
        ...state.notificationFormData,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleTime = (newTime) => {
    setState({
      ...state,
      notificationFormData: {
        ...state.notificationFormData,
        ["time"]: newTime,
      },
    });
  };

  //  function bookInterview(id, interview) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview },
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment,
  //   };
  //   return axios
  //     .put(`http://localhost:8001/api/appointments/${id}`, { interview })
  //     .then(() => {
  //       const days = spotsRemaining(state, appointments);
  //       setState({
  //         ...state,
  //         appointments,
  //         days,
  //       });
  //     });
  //  }

  return { state, handleDayChange, handleTime };
}
