import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      })
  }

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      {/* Netflix Logo Image */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* User Icon  */}
      {user && (
        <div className="flex p-2 m-2">
          <img
            alt="usericon"
            className="w-12 h-12 rounded-4xl"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 rounded-lg text-white px-2 mx-2 cursor-pointer">
            Sign Out
          </button>
        </div>)
      }

    </div>
  )
}

export default Header
