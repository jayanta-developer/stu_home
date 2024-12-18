import Axios from "axios";

export const gatPropertyData = async () => {
  try {
    await Axios.get(process.env.REACT_APP_BASE_URL + "/flats")
      .then((val) => {
        const data = val.data;
        return data;
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
