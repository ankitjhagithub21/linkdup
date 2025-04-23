import React from 'react'
import Logo from '../components/Logo'

const LandingPage = () => {
    return (
        <>
            <header>
                <div className='container mx-auto py-4 px-3 flex justify-between items-center'>
                   <img src="https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png" alt="logo" className='w-32'/>
                    <div className='flex items-center text-lg font-medium text-gray-600 gap-4'>
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
                                <a
                                    className="my-2 py-1 btn-md btn-secondary min-h-[40px] w-full inline-flex gap-2 items-center border border-gray-300 font-medium text-gray-800 rounded-full justify-center bg-white"
                                    href="/login"

                                > <img src="https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg" alt="" width={25} />
                                    Continue with microsoft
                                </a>


                                <a
                                    className="my-2 py-1 btn-md btn-secondary min-h-[40px] w-full inline-flex items-center border border-gray-300 font-medium text-gray-800 rounded-full justify-center bg-white"
                                    href="/login"

                                > <img src="https://pngimg.com/d/google_PNG19635.png" alt="" width={35} />
                                    Sign in with email
                                </a>
                            </div>



                            <p className="text-xs pb-2 text-center mt-3">
                                By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
                                <a
                                    href='#'


                                >
                                    User Agreement
                                </a>
                                ,{" "}
                                <a
                                    href='#'


                                >
                                    Privacy Policy
                                </a>
                                , and{" "}
                                <a
                                    href="#"


                                >
                                    Cookie Policy
                                </a>
                                .
                            </p>
                            <p className="text-center mt-10">
                                New to LinkedIn?{" "}
                                <a
                                    href="/signup"
                                    className='text-blue-600 font-medium hover:underline'
                                >
                                    Join now
                                </a>
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
            <footer></footer>
        </>
    )
}

export default LandingPage