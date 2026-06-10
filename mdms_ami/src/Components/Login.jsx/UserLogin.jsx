// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

     const handleLogin = (e) => {
    e.preventDefault();
};

    // Add your authentication logic here

 const handleSignup = () =>{
  navigate("/Dashboard/Dashboard")
 }
  
  return (
    <div>
      <div className="min-h-screen w-full bg-black relative">
    {/* Aurora Mystic Mist Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(58, 175, 169, 0.6) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(255, 140, 0, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(238, 130, 238, 0.3) 0%, transparent 80%)
        `,
      }}
    />

             {/* Login Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div
          className="
            relative
            w-full
            max-w-md
            p-8

            bg-white/10
            backdrop-blur-xl

            border
            border-white/20

            rounded-3xl

            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          "
        >
          {/* Glass Reflection */}
          <div
            className="
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-br
              from-white/15
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Logo / Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-2 text-sm">
              Sign in to access the MDMS System
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* User ID */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                User ID
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  bg-white/5
                  border
                  border-white/10

                  rounded-xl
                  px-4
                  py-3

                  focus-within:border-lime-400
                  transition-all
                "
              >
                <FaUser className="text-lime-400" />

                <input
                  type="text"
                  placeholder="Enter User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-white
                    placeholder-gray-500
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Password
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  bg-white/5
                  border
                  border-white/10

                  rounded-xl
                  px-4
                  py-3

                  focus-within:border-lime-400
                  transition-all
                "
              >
                <FaLock className="text-lime-400" />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-white
                    placeholder-gray-500
                  "
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-lime-500"
                />
                Remember Me
              </label>

              <button
                type="button"
                className="text-lime-400 hover:text-lime-300 hover:cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                py-3

                rounded-xl

                bg-lime-500
                hover:bg-lime-400 hover:cursor-pointer

                text-gray-500
                font-semibold

                transition-all
                duration-300

                shadow-[0_0_20px_rgba(132,204,22,0.35)]
              "
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-gray-400 text-sm">
             <div className="flex justify-center items-center mb-8 gap-1">
               <h3>Does Not Have Account..?</h3>
               <button onClick={handleSignup} className="text-lime-400 hover:text-lime-300 cursor-pointer">Sign Up</button>
             </div>
            MDMS Management System  
           
          </div>
        </div>
        </div>
  </div>
    </div>
  )
}

export default UserLogin
