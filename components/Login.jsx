import { useSession, signIn } from "next-auth/react"


const Login = () => {
    
    return (
        <section className="flex h-screen flex-col md:flex-row bg-[#F5F5F5] items-center ">
            <div className="p-6 md:p-0 w-full md:w-[40%] md:h-full bg-black flex md:justify-center items-center">
                <h1 className="text-white text-5xl md:text-7xl font-bold">Board.</h1>
            </div>

            <div className="bg-[#F5F5F5] w-full md:w-[60%] flex justify-center items-center p-8 md:p-0">
                <div className="w-full md:w-auto">
                    <div className="text-wrapper-10">Sign In</div>
                    <p className="p">Sign in to your account</p>

                    <div className="flex flex-col md:flex-row gap-6 mt-[26px]">
                        <button onClick={() => signIn('google', { callbackUrl: "/dashboard" })} className="bg-white gap-[10px] flex items-center px-5 py-2 rounded-[10px] w-52">
                            <img className="google-icon" alt="Google icon" src="google-icon-1.svg" />
                            <span>Sign in with Google</span>
                        </button>
                        <button  className="bg-white gap-[10px] flex items-center px-5 py-2 rounded-[10px] w-52">
                            <img className="google-icon" alt="Google icon" src="apple-1.svg" />
                            <span>Sign in with Apple</span>
                        </button>
                    </div>

                    <div className="mt-[25px] bg-white p-[30px] rounded-[20px]">
                        <form>
                            <div>
                                <label className="label block">Email address</label>
                                <input required className="input" type="email" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="label block">Password</label>
                                <input required className="input" type="password" placeholder="Enter your password" autoComplete="on" />
                            </div>

                            <div>
                                <a className="cursor-pointer label text-[#346BD4]">Forgot password?</a>
                            </div>

                            <button onClick={(e) => {
                                e.preventDefault();
                            }} className="bg-black rounded-[10px] w-full text-white submit">Sign In</button>

                        </form>

                    </div>
                    <p className="mt-[20px] text-center">
                        <span className="span">Don’t have an account? </span>
                        <span className="cursor-pointer label text-[#346BD4]">Register here</span>
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Login;

