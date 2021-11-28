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
    gardensVegetables: [],
    selected: false,
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/notifications"),
      axios.get("http://localhost:8080/api/gardens"),
      axios.get("http://localhost:8080/api/vegetables"),
      axios.get("http://localhost:8080/api/gardensvegetables"),
    ])
      .then((all) => {
        const notificationsData = all[0].data;
        const gardensData = all[1].data;
        const vegetablesData = all[2].data.data;
        const gardensVegetablesData = all[3].data;
        setState((prev) => ({
          ...prev,
          notifications: notificationsData,
          gardens: gardensData,
          vegetables: vegetablesData,
          gardensVegetables: gardensVegetablesData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddVegetable = (gardenId, vegetableId) => {
    // console.log("HANDLE ADD VEGETABLE CALLED", gardenId, vegetableId);
    axios
      .post("http://localhost:8080/api/gardensvegetables", {
        gardenId,
        vegetableId,
      })
      .then(function (response) {
        updateGardenVegetableState();
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("posted to database");
  };

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
    // console.log(state);
    // const time = state.time.toString();  only use to save time as mountain in database
    // console.log(time);
    return axios
      .post(`http://localhost:8080/api/notifications`, { state })
      .then(() => {
        console.log("Sucessful Put!");
      });
  }

  function createGarden(state) {
    // console.log('createGarden', state)
    //const newGarden ;
    //const newGardenId ;

    return axios
      .post(`http://localhost:8080/api/gardens/`, { state })
      .then((res) => {
        // console.log({ res });
        console.log("Sucessful Put!");
        updateGardenState();
      });
  }

  function updateGardenVegetableState() {
    return axios
      .get("http://localhost:8080/api/gardensvegetables")
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          garden: null,
          gardensVegetables: data,
        }));
      })
      .catch((err) => console.error(err));
  }

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
    return axios
      .get(`http://localhost:8080/api/gardensvegetables/${id}`)
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          gardensVegetables: data,
          garden: id,
          selected: true,
        }));
      })
      .catch((err) => console.error(err));
  }

  const deleteGarden = (id) => {
    return axios
      .delete(`http://localhost:8080/api/gardens/${id}`)
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          gardensVegetables: data,
          garden: id,
          selected: false,
        }));
        updateGardenState();
      })
      .catch((err) => console.error(err));
  };
  return {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
    createGarden,
    changeGarden,
    handleAddVegetable,
    updateGardenVegetableState,
    deleteGarden,
  };
}
