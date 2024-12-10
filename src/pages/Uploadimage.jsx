import { useState } from "react";
import axiosInstance  from "../utils/axiosInstance.js";

const Uploadimage = () => {
  const [filename, setFilename] = useState();

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    console.log(filename)
    const data = new FormData();
    data.append("file", filename);
    console.log(data);

    try {
      const response = await axiosInstance.post("/api/upload/uploadfile", data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleFileSubmit} >
        <input
          type="file"
          onChange={(e) => {
            setFilename(e.target.files[0]);
          }}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};
export default Uploadimage;
