import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithFacebook,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillApple, AiOutlineCloudUpload } from "react-icons/ai";
import {
    FaFacebookF,
    FaGoogle,
    FaRegEnvelope,
    FaRegUser,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import { v4 } from "uuid";
import auth, { storage } from "../../../../firebase.init";

import Navbar from "../../../Shared/Navbar/Navbar";


const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, googleLoading, Gerror] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, Fuser, Floading, Ferror] =
        useSignInWithFacebook(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const onSubmit = async (data) => {
        const profilePhoto = await data?.image[0];
        const imageref = ref(storage, `users/${profilePhoto.name + v4()}`);
        uploadBytes(imageref, profilePhoto).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setProfileImageUrl(url);
            });
        });
        if (profileImageUrl) {
            const email = data.email;
            const name = data.name;
            const password = data.password;
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({
                displayName: name,
                photoURL: profileImageUrl,
            });
        }

    };
    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl">
                    <div className="w-full lg:w-3/5 p-5 my-auto">
                        <div className="text-left font-bold">
                            <span className="text-cyan-400">Knot</span>Company
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-cyan-400">
                                Create an account
                            </h2>
                            <div className="border-2 w-10 border-cyan-400 inline-block"></div>
                            <div className="flex justify-center items-center my-2">
                                <p
                                    onClick={() => signInWithFacebook()}
                                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                                >
                                    <FaFacebookF className="text-sm" />
                                </p>
                                <p
                                    onClick={() => signInWithGoogle()}
                                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                                >
                                    <FaGoogle className="text-sm" />
                                </p>
                                <a
                                    href="facebook.com"
                                    target={"_blank"}
                                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                                >
                                    <AiFillApple className="text-md" />
                                </a>
                            </div>{" "}
                            {/* Social Login section */}
                            <p className="text-gray-400 my-3">
                                or use your email account
                            </p>
                            <div>
                                <form
                                    className="w-64 mx-auto"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                                            <FaRegUser className=" m-2 text-gray-400" />
                                            <input
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Name is required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Your Name"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="name"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.name?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.name.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>{" "}
                                    {/*Name field*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <FaRegEnvelope className=" m-2 text-gray-400" />
                                            <input
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Email is required",
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message:
                                                            "Provide a Valid Email",
                                                    },
                                                })}
                                                type="email"
                                                placeholder="Email"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="email"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.email?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.email.message}
                                                </span>
                                            )}
                                            {errors.email?.type ===
                                                "pattern" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.email.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <MdLockOutline className=" m-2 text-gray-400" />
                                            <input
                                                {...register("password", {
                                                    minLength: {
                                                        value: 6,
                                                        message:
                                                            "password should be minimum 8 characters",
                                                    },
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Password is Required",
                                                    },
                                                })}
                                                type="password"
                                                placeholder="Password"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="password"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.password?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.password.message}
                                                </span>
                                            )}
                                            {errors.password?.type ===
                                                "minLength" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.password.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <AiOutlineCloudUpload className=" m-2 text-gray-400" />
                                            <label
                                                htmlFor="userPhoto"
                                                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                                            >
                                                Upload Image
                                            </label>
                                            <input
                                                {...register("image", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Photo is Required",
                                                    },
                                                })}
                                                type="file"
                                                id="userPhoto"
                                                className="hidden"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.photo?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.photo.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>{" "}
                                    {/*attach file*/}
                                    {loading || updating ? (
                                        <button className="border-2 mt-3 border-cyan-400 rounded-full px-12 py-2">
                                            Loading...
                                        </button>
                                    ) : (
                                        <input
                                            type="submit"
                                            value="SIGN UP"
                                            className="border-2 mt-3 border-cyan-400 rounded-full px-12 py-2 hover:bg-cyan-400 hover:text-white duration-500 transition-all"
                                        />
                                    )}
                                </form>
                                <p className="mt-3 md:hidden">
                                    Already have an Account?{" "}
                                    <Link to="/login" className="text-cyan-400">
                                        Login
                                    </Link>{" "}
                                </p>
                            </div>
                            {/*Input Field*/}
                        </div>
                    </div>{" "}
                    {/*Sign in section */}
                    <div className="hidden md:block bg-cyan-400 lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
                        <h2 className="font-bold text-3xl mb-2">
                            Hello, Friend!
                        </h2>
                        <div className="border-2 w-10 border-white inline-block"></div>
                        <p className="mb-4">
                            Fill up personal information and start journey with
                            us.
                        </p>
                        <Link
                            to="/login"
                            className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-cyan-400 duration-500 transition-all"
                        >
                            Sign in
                        </Link>
                    </div>{" "}
                    {/*Sign up section */}
                </div>
            </section>
        </div>
    );
};

export default Signup;
