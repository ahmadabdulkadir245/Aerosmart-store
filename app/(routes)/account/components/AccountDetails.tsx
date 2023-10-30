import { useEffect, useState } from "react";
import { BiMap, BiPencil, BiUser } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  first_name: string;
  last_name: string;
  email: string;
}

interface Message {
  success: string | null;
  error: string | null;
}

interface AccountDetailsProps {
  user_id: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function AccountDetails({ user_id, setLoading }: AccountDetailsProps) {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
  });

  let inputDisabled = false;
  const message: Message = {
    success: "",
    error: "",
  };

  const editName = () => {
    // Implement editName functionality here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEditUserName = async () => {
    if (!user_id) return;
    if (inputDisabled === true) return;

    inputDisabled = true;
    // Implement handleEditUserName functionality here
  };

  const addresses = [
    {
      address_line_1: "No 5 sultan road, Kaduna, Nigeria",
      address_line_2: "address line 2",
      first_name: "John",
      last_name: "Doe",
      phone_number_1: "0816223826",
    },
  ];

  return (
    <div className="col-span-3">
      <div className="lg:flex justify-between bg-white">
        {/* Account Details */}
        <div className="py-4 px-4 font-poppins rounded-md w-full">
          <div className="">
            <div className="bg-gray-200 p-2 rounded-sm flex justify between items-center">
              <h2 className="uppercase">Account Details</h2>
              <BiPencil
                className={`w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in ${
                  !inputDisabled && "hidden"
                }`}
                onClick={editName}
              />
            </div>
            <form className="my-3 text-xs">
              {message.success && (
                <div className="text-green-500 text-xs text-center">
                  {message.success}
                </div>
              )}
              {message.error && (
                <div className="text-red-500 text-xs text-center">
                  {message.error}
                </div>
              )}
              <input
                type="text"
                className={`border-[1px] rounded-lg bg-gray-200 outline-none px-4 py-[12px] w-full m-auto flex my-3 lg:my-3 uppercase ${
                  inputDisabled ? "border-gray-300 cursor-not-allowed" : "bg-gray-50"
                }`}
                required
                disabled={inputDisabled}
                value={user?.first_name}
                onChange={handleChange}
                name="first_name"
                placeholder="Enter first name"
              />
              <input
                type="text"
                className={`border-[1px] rounded-lg bg-gray-200 outline-none px-4 py-[12px] w-full m-auto flex my-3 lg:my-3 uppercase ${
                  inputDisabled ? "border-gray-300 cursor-not-allowed" : "bg-gray-50"
                }`}
                placeholder="Enter last name"
                required
                disabled={inputDisabled}
                value={user?.last_name}
                onChange={handleChange}
                name="last_name"
              />
              <input
                type="text"
                className="border-[1px] rounded-lg border-gray-300 bg-gray-200 cursor-not-allowed outline-none px-4 py-[12px] w-full m-auto flex my-3 lg:my-3"
                placeholder="useremail@gmail.com"
                disabled
                value={user?.email}
                required
              />
            </form>
          </div>
        </div>

        {/* Home Address */}
        <div className="px-4 lg:py-4 bg-white font-poppins rounded-md w-full">
          <div className="">
            <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
              <h2 className="uppercase">Home Address</h2>
              <BiPencil
                className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in"
                onClick={() => router.push("/account/address")}
              />
            </div>
            {addresses[0] ? (
              <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
                <div className="capitalize flex space-x-1 items-center">
                  <BiUser />{" "}
                  <p>
                    {addresses[0]?.first_name.toUpperCase()}{" "}
                    {addresses[0]?.last_name.toUpperCase()}
                  </p>
                </div>
                <div className="capitalize flex space-x-1 items-center">
                  <MdCall /> <p>{addresses[0]?.phone_number_1.toUpperCase()}</p>
                </div>
                <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]" />{" "}
                  <p>{addresses[0]?.address_line_1.toUpperCase()}</p>
                </div>
              </div>
            ) : (
              <div className="uppercase mt-4 text-center text-lg text-red-400">
                No address added
              </div>
            )}
          </div>
        </div>

        {/* Work Address */}
        <div className="py-4 px-4 bg-white font-poppins rounded-md w-full">
          <div className="">
            <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
              <h2 className="uppercase">Work Address</h2>
              <BiPencil
                className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in"
                onClick={() => router.push("/account/address")}
              />
            </div>
            {addresses[1] ? (
              <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
                <div className="capitalize flex space-x-1 items-center">
                  <BiUser />{" "}
                  <p>
                    {addresses[1]?.first_name.toUpperCase()}{" "}
                    {addresses[1]?.last_name.toUpperCase()}
                  </p>
                </div>
                <div className="capitalize flex space-x-1 items-center">
                  <MdCall /> <p>{addresses[1]?.phone_number_1.toUpperCase()}</p>
                </div>
                <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]" />{" "}
                  <p>{addresses[1]?.address_line_1.toUpperCase()}</p>
                </div>
              </div>
            ) : (
              <div className="uppercase mt-4 text-center text-lg text-red-400">
                No address added
              </div>
            )}

            <button
              className={`w-full text-white p-3 rounded-md capitalize lg:hover:bg-green-700 transition-all delay-100 tracking-wide text-xs mt-2 ${
                !inputDisabled ? "bg-green-600" : "bg-green-400"
              }`}
              onClick={handleEditUserName}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
