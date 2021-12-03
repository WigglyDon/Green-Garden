import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

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

  console.log("gardenid", state.garden);

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
    swal("Added to Garden", {
      buttons: false,
      icon: "success",
      timer: 150000,
    });
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
      },
    });
  };

  function bookNotification(state, id) {
    const gardenID = id;
    console.log("state bookNoti", state);
    return axios
      .post(`http://localhost:8080/api/notifications`, { state, gardenID })
      .then(() => {
        console.log("Sucessful Notification Put!");
      });
  }

  function createGarden(state) {
    return axios
      .post(`http://localhost:8080/api/gardens/`, { state })
      .then((res) => {
        console.log("Sucessful Put!");
        updateGardenState();
      });
  }

  function updateGardenVegetableState() {
    console.log("updateGardenVegetableState()");
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

  function updateGardenVegetableStateAfterDelete(gardenID) {
    console.log("updateGardenVegetableStateAfterDelete()");
    return axios
      .get(`http://localhost:8080/api/gardensvegetables/${gardenID}`)
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          gardensVegetables: data,
        }));
      })
      .catch((err) => console.error(err));
  }

  function updateGardenState() {
    console.log("updateGardenState()");
    return axios
      .get("http://localhost:8080/api/gardens")
      .then(({ data }) => {
        console.log("updateGarden()");
        setState((prevState) => ({
          ...prevState,
          gardens: data,
        }));
      })
      .catch((err) => console.error(err));
  }

  function changeGarden(id) {
    console.log("changeGarden()");
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
    console.log("deleteGarden()");

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

  const deleteGardenVegetable = (gardenID, vegetableID) => {
    console.log("deleteGardenVegetable()");
    const data = {
      vegetableID,
      gardenID,
    };

    return axios
      .delete(`http://localhost:8080/api/gardensvegetables`, {
        data,
      })
      .then((res) => {
        console.log("Sucessful Delete!");
        updateGardenVegetableStateAfterDelete(gardenID);
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
    updateGardenState,
    deleteGardenVegetable,
  };
}
