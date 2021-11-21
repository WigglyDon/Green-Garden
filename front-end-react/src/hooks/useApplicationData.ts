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
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/users"),
      axios.get("http://localhost:8001/api/vegetables"),
      axios.get("http://localhost:8001/api/gardens"),
      axios.get("http://localhost:8001/api/gardens_vegetables"),
      axios.get("http://localhost:8001/api/notifications"),
    ]).then((all) => {
      const notificationsData = all[4].data;
      setState((prev) => ({
        ...prev,
        notifications: notificationsData,
      }));
    });
  }, []);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return { state, handleChange };
}