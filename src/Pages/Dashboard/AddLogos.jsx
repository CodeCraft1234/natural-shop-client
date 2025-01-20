import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Axios/useAxiosPublic";


const AddLogos = () => {
  const [image, setImage] = useState(null);
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please select an image",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    console.log("Image:", image);

    // Create FormData object and append the image
    const formData = new FormData();
    formData.append("image", image);

    try {
      // Upload image
      const res = await AxiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const photo = res.data.data.display_url;
      console.log(photo);

      const date = new Date();
      const logoInfoo = {
        photo,
        date,
      };
      console.log(logoInfoo);

      // Post logo to the server
      const logoResponse = await AxiosPublic.post("/logos", logoInfoo);
      console.log(logoResponse.data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logo has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset the form
      setImage(null);
    } catch (error) {
      console.error('Error uploading image or saving logo:', error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to save the logo",
        text: error.response ? error.response.data.message : error.message,
        showConfirmButton: true,
      });
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="text-white flex items-center justify-center overflow-x-hidden">
      <Helmet>
        <title>Digital Network| AddLogo</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-white text-black p-8 rounded-lg shadow-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Add your Logos</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <label htmlFor="image" className="block font-bold mb-1">
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            accept="image/*"
            required
          />
          <button
            type="submit"
            className="bg-green-900 text-white rounded-lg p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLogos;
