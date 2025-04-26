import { useContext, useEffect, useState,lazy } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { signupSchema } from '../validator/signupSchema'
const Logo = lazy(() => import("../components/Logo"));

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        document.title = "Sign Up | Linkedln"
    }, [])


    const handleSubmit = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries())
        const { fullName, email, password } = data;

        const result = signupSchema.safeParse({ fullName, email, password })

        if (result.success) {
            setErrors({})
            setLoading(true)
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify({ fullName, email, password })

                })
                const data = await res.json()

                if (data.success) {
                    toast.success(data.message)
                    setUser(data.user)
                    navigate("/")

                } else {
                    toast.error(data.message)
                }

            } catch (error) {
                console.log(error.message)
                toast.error("Signup failed. Please try again later.")
            } finally {
                setLoading(false)
            }
        } else {

            setErrors(result.error.formErrors.fieldErrors)
        }




    }


    return (
        <section className='min-h-screen w-full bg-[#F3F2F0]'>
            <div className='max-w-6xl mx-auto w-full p-5'>
                <Logo/>
                
                <h1 className='text-3xl  text-center my-5 text-gray-800'>Make the most of your professional life</h1>

                <form className='bg-white max-w-sm mx-auto rounded-lg shadow-lg p-5' onSubmit={handleSubmit}>
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="fullName" className='text-gray-800'>Full Name</label>
                        <input type="text" id="fullName" name="fullName" className=' hover:outline border rounded-lg p-2'  />
                        {
                            errors?.fullName && <span className="text-sm text-red-600">{errors.fullName[0]}</span>
                        }
                    </div>

                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="text" className='text-gray-800'>Email</label>
                        <input type="text" name='email' id='email' className=' hover:outline border rounded-lg p-2'  />
                        {
                            errors?.email && <span className="text-sm text-red-600">{errors.email[0]}</span>
                        }
                    </div>
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="password" className='text-gray-800'>Password</label>
                        <div className="hover:outline border rounded-lg  flex items-center gap-1">
                            <input type={showPassword ? 'text' : 'password'} name='password' id='password' className='w-full p-2 rounded-lg bg-transparent  h-full outline-none'  />
                            <span className='text-blue-600 font-medium cursor-pointer mx-2' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? 'Hide' : 'Show'
                                }
                            </span>
                        </div>
                        {
                            errors?.password && <span className="text-sm text-red-600">{errors.password[0]}</span>
                        }


                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" id='agree' className='cursor-pointer' name='agree' />
                        <label htmlFor="agree">Remember me</label>
                    </div>
                    <p className='text-gray-600 text-center text-xs my-4'>By clicking Agree & Join or Continue, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <button type='submit' disabled={loading} className='bg-[#0A66C2] text-white rounded-full w-full p-2 cursor-pointer hover:bg-blue-800'>{
                        loading ? 'Please wait...' : 'Agree & Join'
                    }
                    </button>
                    <p className='text-center my-5'>Already on LinkedIn? <Link to={"/login"} className='text-blue-800 hover:underline'>Sign in</Link>
                    </p>
                </form>

            </div>
        </section>
    )
}

export default Signup