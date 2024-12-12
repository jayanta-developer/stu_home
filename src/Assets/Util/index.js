import Axios from "axios";

export const gatPropertyData = async () => {
  try {
    await Axios.get("http://localhost:4000/socio/api/flats")
      .then((val) => {
        const data = val.data;
        return data;
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
