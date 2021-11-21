import { useState, useEffect } from "react";
import axios from "axios"; 

export default function useApplicationData() {
  const [state, setState] = useState({
      sunday: false,
      monday: false,
      tuesday: true,
      wednesday: false,
      thursday: false,
      friday: true,
      saturday: false,
      time: new Date(),
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/vegetables"),
      // axios.get("/api/gardens"),
      // axios.get("/api/gardens_vegetables"),
      axios.get("/api/notifications"),
    ]).then((all) => {
      const notificationsData = all[2].data;
      setState((prev) => ({
        ...prev,
        notifications: notificationsData,
      }));
    })
    .catch ((error) => {
      console.log(error);
    })
  }, []);

  
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTime = (newTime:any) => {
     setState({
      ...state,
      ['time'] : newTime
    });
  }

  return { state, handleChange, handleTime }
};