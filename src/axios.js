
import axios from "axios";
const Instance = axios.create({
  baseURL: "https://learn.bimash.com.np/api/", 
  // baseURL: "http://localhost/Learn/staticss/api/", 
});

export default Instance;