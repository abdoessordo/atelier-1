import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/APIRoutes";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(baseURL);
      console.log(result.data.categories);
      setCategories(result.data.categories);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {categories.map((category) => (
        <div key={category.idCategory}>{category.strCategory}</div>
      ))}
    </div>
  );
}
