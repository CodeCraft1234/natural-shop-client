import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles
import useAxiosPublic from "../../Axios/useAxiosPublic";


const Settings = () => {
  const AxiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    phone: "",
    phone2: "",
    email: "",
    email2: "",
    location: "",
    description: "",
    bannerImage: "",
    aboutDescription: "",
    aboutImage: "",
    skillImage: "",
    footerDescription: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    pinterest: "",
    telegram: "",
    threads: "",
    snapchat: "",
  });
  

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await AxiosPublic.get("/socialLinks");
        if (response.data) {
          setFormData(response.data);
          setIsEdit(true);
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, [AxiosPublic]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating: ${name} -> ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Initialize updated data with existing formData
      let updatedFormData = { ...formData };
  
      // Handle `aboutImage` upload
      if (formData.aboutImage && typeof formData.aboutImage !== "string") {
        const aboutImageData = new FormData();
        aboutImageData.append("image", formData.aboutImage);
  
        const aboutImageResponse = await axios.post(image_hosting_api, aboutImageData);
        updatedFormData.aboutImage = aboutImageResponse.data.data.url;
      }

      // Handle `aboutImage` upload
      if (formData.logo1 && typeof formData.logo1 !== "string") {
        const logoImageData = new FormData();
        logoImageData.append("image", formData.logo1);
  
        const logoImageResponse = await axios.post(image_hosting_api, logoImageData);
        updatedFormData.logo1 = logoImageResponse.data.data.url;
      }
      // Handle `aboutImage` upload
      if (formData.logo2 && typeof formData.logo2 !== "string") {
        const logoImageData2 = new FormData();
        logoImageData2.append("image", formData.logo2);
  
        const logoImageResponse2 = await axios.post(image_hosting_api, logoImageData2);
        updatedFormData.logo2 = logoImageResponse2.data.data.url;
      }
  
      // Handle `bannerImage` upload
      if (formData.bannerImage && typeof formData.bannerImage !== "string") {
        const bannerImageData = new FormData();
        bannerImageData.append("image", formData.bannerImage);
  
        const bannerImageResponse = await axios.post(image_hosting_api, bannerImageData);
        updatedFormData.bannerImage = bannerImageResponse.data.data.url;
      }

      // Handle `skillImage` upload
      if (formData.skillImage && typeof formData.skillImage !== "string") {
        const skillImageData = new FormData();
        skillImageData.append("image", formData.skillImage);
  
        const skillImageResponse = await axios.post(image_hosting_api,skillImageData);
        updatedFormData.skillImage = skillImageResponse.data.data.url;
      }
  
      // Handle `contactImage` upload
      if (formData.contactImage && typeof formData.contactImage !== "string") {
        const skillImageData = new FormData();
        skillImageData.append("image", formData.contactImage);
  
        const skillImageResponse = await axios.post(image_hosting_api,skillImageData);
        updatedFormData.contactImage = skillImageResponse.data.data.url;
      }
  

      let response;
      if (isEdit) {
        // Update existing data
        response = await AxiosPublic.patch(`/socialLinks/${formData._id}`, updatedFormData);
      } else {
        // Add new data
        response = await AxiosPublic.post("/socialLinks", updatedFormData);
      }
  
      if (response.status === 200) {
        alert("Information saved successfully!");
      } else {
        alert("Error saving information!");
      }
    } catch (error) {
      console.error("Error saving information:", error);
      alert("Error saving information.");
    }
  };
  

  const socialPlatforms = [
    { key: "facebook", label: "Facebook", icon: <FaFacebookF /> },
    { key: "instagram", label: "Instagram", icon: <FaInstagram /> },
    { key: "twitter", label: "X (Twitter)", icon: <FaTwitter /> },
    { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn /> },
    { key: "youtube", label: "YouTube", icon: <FaYoutube /> },
    { key: "pinterest", label: "Pinterest", icon: <FaPinterest /> },
    { key: "telegram", label: "Telegram", icon: <FaInstagram /> },
    { key: "threads", label: "Threads", icon: <FaThreads /> },
    { key: "tiktok", label: "TikTok", icon: <FaTiktok /> },
    { key: "snapchat", label: "Snapchat", icon: <FaSnapchat /> },
  ];

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-8">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Logo Info */}
       <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Logos</h1>
            <div className="space-y-3">

            <div>
                <label className="block text-gray-700">Main logo Image</label>
                <input
                  type="file"
                  name="logo2"
                  onChange={(e) => setFormData({ ...formData, logo2: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700">White logo Image</label>
                <input
                  type="file"
                  name="logo1"
                  onChange={(e) => setFormData({ ...formData, logo1: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>
            

              <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>

            </div>

            
          </div>
          
          {/* Personal Information */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {[
    { key: "name", label: "Name" },
    { key: "location", label: "Address" },
    { key: "whatsapp", label: "Whatsapp" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email Address" },
    { key: "email2", label: "Contact Email" },
  ].map(({ key, label }) => (
    <div key={key}>
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        name={key}
        value={formData[key] || ""} // Ensure default empty string for undefined values
        onChange={handleInputChange}
        className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  ))}
</div>


            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>
          </div>
             {/* about Info */}
             <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Banner Info</h1>
            <div className="">
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                  placeholder="Enter description"
                />
              </div>
              <div>
                <label className="block text-gray-700">Banner Image</label>
                <input
                  type="file"
                  name="bannerImage"
                  onChange={(e) => setFormData({ ...formData, bannerImage: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>

              <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>

            </div>

            
          </div>
       {/* Skill Info */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Skill Info</h1>
            <div className="">
             
              <div>
                <label className="block text-gray-700">Skill Image</label>
                <input
                  type="file"
                  name="skillImage"
                  onChange={(e) => setFormData({ ...formData, skillImage: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>
            </div>
            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>
          </div>
       {/* contactImage Info */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Contact Image Info</h1>
            <div className="">
             
              <div>
                <label className="block text-gray-700">Contact Image</label>
                <input
                  type="file"
                  name="contactImage"
                  onChange={(e) => setFormData({ ...formData, contactImage: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>
            </div>
            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>
          </div>
          {/* Banner Info */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">About Info</h1>
            <div className="">
              <div>
                <label className="block text-gray-700">Description</label>
                <ReactQuill
                 value={formData.aboutDescription}
                 onChange={(content) => handleInputChange({ target: { name: "aboutDescription", value: content } })}
                 theme="snow"
               />

              </div>
              <div>
                <label className="block text-gray-700">About Image</label>
                <input
                  type="file"
                  name="aboutImage"
                  onChange={(e) => setFormData({ ...formData, aboutImage: e.target.files[0] })}
                  className="w-full mt-1 px-4 py-2 bg-white text-black border-2 rounded-lg"
                />
              </div>
            </div>
            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>
          </div>

          {/* Footer Info */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Footer Info</h1>
            <div className="">
              <div>
                <label className="block text-gray-700">Description</label>
                <ReactQuill
                 value={formData.footerDescription}
                 onChange={(content) => handleInputChange({ target: { name: "footerDescription", value: content } })}
                 theme="snow"
               />

              </div>
            </div>
            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>
          </div>

         

       

          {/* Social Links */}
          <div className="mt-10 border border-gray-400 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Manage Social</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialPlatforms.map(({ key, label, icon }) => (
                <div key={key} className="flex items-center gap-3 border-2 border-gray-300 rounded-lg px-3 py-2">
                  <div className="text-2xl text-gray-600">{icon}</div>
                  <input
                    type="text"
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleInputChange}
                    placeholder={`www.${label.toLowerCase()}.com/`}
                    className="w-full border-none outline-none focus:ring-0 bg-white text-black"
                  />
                </div>
              ))}
            </div>

            <button
            type="submit"
            className=" bg-blue-600 px-4 mt-5 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          >
            {isEdit ? "Update Information" : "Save Information"}
          </button>

          </div>



          
        </form>
      </div>
    </div>
  );
};

export default Settings;
