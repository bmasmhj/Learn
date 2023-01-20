
import axios from "axios";
const Instance = axios.create({
  baseURL: "https://learn.bimash.com.np/api/",
});

export default Instance;