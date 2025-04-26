import { useEffect } from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
    useEffect(() => {
        document.title = "LinkedIn: Log In or Sign Up"
    }, [])

    return (
        <>
            <header>
                <div className='container mx-auto py-4 px-3 flex justify-between items-center'>
                    <img src="https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png" alt="logo" className='w-32' />
                    <div className='lg:flex items-center text-lg font-medium text-gray-600 gap-4 hidden'>
                        <h2>Article</h2>
                        <h2>People</h2>
                        <h2>Learning</h2>
                        <h2>Job</h2>
                        <h2>Games</h2>
                    </div>
                </div>


            </header>
            <main>
                <section className="container mx-auto flex my-20 flex-wrap p-5">
                    <div className="  lg:w-1/2 w-full lg:flex-start flex-center flex flex-col">
                        <h1
                            className="font-sans  font-regular  w-full text-center lg:text-start leading-regular text-display-lg  text-3xl lg:text-5xl text-gray-600"

                        >
                            Welcome to your  professional community
                        </h1>

                        <div className="mt-5  max-w-[400px] mx-auto lg:mx-0 w-full">
                            <div
                                className=" mb-2 mx-auto text-center"

                            >

                            </div>
                            <div className="w-full my-2 max-w-[400px] mx-auto">
                                <Link
                                    className="my-2 py-1 btn-md btn-secondary min-h-[40px] w-full inline-flex gap-2 items-center border border-gray-300 font-medium text-gray-800 rounded-full justify-center bg-white"
                                    to="/login"

                                > <img src="https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg" alt="" width={25} />
                                    Continue with microsoft
                                </Link>


                                <Link
                                    className="my-2 py-1 btn-md btn-secondary min-h-[40px] w-full gap-2 inline-flex items-center border border-gray-300 font-medium text-gray-800 rounded-full justify-center bg-white hover:bg-gray-200"
                                    to="/login"

                                > <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className="w-6"
                                >
                                        <g>
                                            <path
                                                fill="#EA4335"
                                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                            />
                                            <path
                                                fill="#4285F4"
                                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                            />
                                            <path fill="none" d="M0 0h48v48H0z" />
                                        </g>
                                    </svg>

                                    Sign in with email
                                </Link>
                            </div>



                            <p className="text-xs pb-2 text-center mt-3">
                                By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
                                <Link
                                    href='#'


                                >
                                    User Agreement
                                </Link>
                                ,{" "}
                                <Link
                                    href='#'


                                >
                                    Privacy Policy
                                </Link>
                                , and{" "}
                                <Link
                                    to="#"


                                >
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                            <p className="text-center mt-10">
                                New to LinkedIn?{" "}
                                <Link
                                    to="/signup"
                                    className='text-blue-600 font-medium hover:underline'
                                >
                                    Join now
                                </Link>
                            </p>
                        </div>

                        {/**/}
                    </div>
                    <div className='lg:w-1/2 w-full mt-5 lg:mt-0'>
                        <img
                            className="w-full"
                            alt="Welcome to your professional community"

                            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
                        />
                    </div>
                </section>

            </main>

        </>
    )
}

export default LandingPage