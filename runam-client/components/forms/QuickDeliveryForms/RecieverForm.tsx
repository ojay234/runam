import React, { useState } from "react";
import CustomInput from "../../ui/input/CustomInput";
import CustomTextarea from "../../ui/input/CustomTextarea";

function RecieverForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  console.log(location);

  return (
    <div className="">
      <form className="flex flex-col mt-10 gap-5 w-[30%] shadow-md rounded-[5px] mx-auto p-5">
        <h1 className="text-3xl">Reciever Form</h1>
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Full Name"
            error=""
            value={name}
            changeFunc={(e) => setName(e.target.value)}
          />
          <CustomInput
            label="Phone Number"
            error=""
            value={phone}
            changeFunc={(e) => setPhone(e.target.value)}
          />
          <CustomInput
            label="Address"
            error=""
            value={address}
            changeFunc={(e) => setAddress(e.target.value)}
          />
          <div>
            <button
              onClick={handleLocation}
              className="text-[#3d3d3c] text-sm font-bold rounded-md"
            >
              Share Live Location
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-fit mx-auto bg-[#14a74f] text-white px-3 py-2 rounded-md my-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecieverForm;
