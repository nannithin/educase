import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="relative h-screen w-full md:max-w-sm md:mx-auto bg-[#F7F8F9]">
            <div className="absolute bottom-12 left-5 right-5 space-y-5">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-2xl font-semibold">Welcome to popX</h1>
                    <p className="text-xl md:text-[16px] text-gray-600 font-medium">Start your journey with us <br />
                        Create an account or sign in
                    </p>
                </div>
                <div className="grid gap-3">
                    <Link to="signup"
                        type="submit"
                        className=" bg-[#6C25FF] hover:bg-purple-700 text-center text-white font-semibold rounded-md transition duration-200 py-3"
                    >
                        Create Account
                    </Link>
                    <Link
                        to="/signin"
                        type="submit"
                        className=" bg-[#6C25FF4B] hover:bg-[#5c1cdd4b] text-center text-black/90 font-bold rounded-md transition duration-200 py-3"
                    >
                        Already Registered? Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;