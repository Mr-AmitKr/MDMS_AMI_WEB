import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // TODO: Add signup API logic here
    console.log("Signup Data:", {
      userId,
      password,
    });
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

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

        {/* Signup Card */}
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

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white">
                Create Account
              </h1>

              <p className="text-gray-300 mt-2 text-sm">
                Register to access the MDMS System
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-5">
              {/* User ID */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  User ID
                </label>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-lime-400 transition-all">
                  <FaUser className="text-lime-400" />

                  <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Password
                </label>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-lime-400 transition-all">
                  <FaLock className="text-lime-400" />

                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Confirm Password
                </label>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-lime-400 transition-all">
                  <FaLock className="text-lime-400" />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-lime-500 hover:bg-lime-400 hover:cursor-pointer text-gray-500 font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.35)]"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-gray-400 text-sm">
              <div className="flex justify-center items-center mb-8 gap-1">
                <h3>Already have an account?</h3>

                <button
                  onClick={handleLoginRedirect}
                  className="text-lime-400 hover:text-lime-300 cursor-pointer"
                >
                  Sign In
                </button>
              </div>

              MDMS Management System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;