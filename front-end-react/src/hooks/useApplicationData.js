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
    gardensVegetables: {},
    test: 0
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
        updateGardenState()
      });
  }

  function updateGardenState() {
    return axios.get("http://localhost:8080/api/gardens")
      .then(({data}) =>  {
//        console.log("GARDEN DATA", { gardenData })
      // const {data} = gardenData;
        setState(prevState => ({
          ...prevState,
          gardens: data
        }))

      }).catch((err) => console.error(err));



    // return axios.get("http://localhost:8080/api/gardens")
    // .then((gardenData) => {
    //   setState(prevState => ({
    //     ...prevState,
    //       gardens: gardenData
    //   }))
    // })

  }

  function changeGarden(id) {
    setState(prevState => ({
      ...prevState,
      garden: id
    }))
  }


  //setState(prevState => ({   ...prevState,   metawords: evt.target.value, }))
  // ...state,
  // notificationFormData: {
  //   ...state.notificationFormData,
  //   time: newTime,
  // },

  return {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
    createGarden,
    changeGarden,
    //  updateGardenState
  };
}
