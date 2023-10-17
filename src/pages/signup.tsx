import { SiteName } from "@/const/text.const";
import LoginLayout from "@/layouts/login.layout";
import Link from "next/link";

export default function Login() {
    return (
        <LoginLayout>
            <main >
                <div className="flex flex-col items-center w-full justify-center pt-10 pb-10 max-sm:px-4">
                    <LoginForm />
                    <div className='mt-2'>
                        <p className="text-gray-700 text-[12px]">{SiteName}, LLC &copy; {new Date().getFullYear()}. All rights reserved.</p>
                    </div>
                </div>
            </main>
        </LoginLayout>
    );
}

function LoginForm() {
    return (
        <form className="bg-white rounded-sm w-full max-w-[474px] min-h-[493px]">
            <div className="py-5 text-center border-b border-solid">
                <h2 className="text-[#ED6C27] text-3xl font-[500]">Sign Up</h2>
            </div>
            <div className="py-5 px-4 md:px-16">
                <button className="rounded-sm bg-[#3CBA54] w-full py-2 font-[500] text-white text-lg">
                    Continue With Google
                </button>

                <div className="mt-7 text-center">
                    <span className="text-gray-500 text-sm">OR</span>
                </div>

                <div className="form-container flex flex-col gap-4">
                    <div className="form-group text-black flex flex-col">
                        <label htmlFor="username" className="text-capitalize">username</label>
                        <input type="text" id='username' className="border border-solid rounded-sm px-2 py-2" />
                    </div>
                    <div className="form-group text-black flex flex-col">
                        <label htmlFor="email" className="text-capitalize">email</label>
                        <input type="text" id='email' className="border border-solid rounded-sm px-2 py-2" />
                    </div>
                    <div className="form-group text-black flex flex-col">
                        <label htmlFor="password">password</label>
                        <input type="text" id='password' className="border border-solid rounded-sm px-2 py-2" />
                    </div>
                    <div className="form-group text-black flex flex-col">
                        <label htmlFor="confirm-password" className="text-capitalize">confirm password</label>
                        <input type="text" id='confirm-password' className="border border-solid rounded-sm px-2 py-2" />
                    </div>

                    <div>
                        <p className="text-gray-500 text-[12px]">By continuing, you agree to our <span className="text-blue-500">User Agreement</span> and <span className="text-blue-500">Privacy Policy</span></p>
                    </div>

                    <div className="flex max-sm:flex-col sm:justify-between sm:items-center gap-2 sm:gap-0">
                        <div className="flex gap-2">
                            <p className="text-gray-500">Already a member?</p>
                            <Link href="/login" className="text-blue-500 font-[500]">Login</Link>
                        </div>
                        <button className="px-5 py-2 bg-blue-500 rounded-md text-white text-xl">Signup</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
