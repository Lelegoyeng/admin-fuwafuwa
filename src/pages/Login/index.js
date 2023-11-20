import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";

const Signin = () => {
    const { loading, loggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignIn = (data) => {
        dispatch(actions.login(data));
    };

    if (loggedIn) {
        // <Navigate to="/"/>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 p-10 rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-5 text-white'>Login</h2>
                <form onSubmit={handleSubmit(handleSignIn)} className="user">
                    <TextInput
                        type="text"
                        name="email"
                        placeholder="Email"
                        register={register}
                        validations={{ required: "Email harus diisi" }}
                        errors={errors}
                        className="form-control-user"
                        dataCy="email"
                    />

                    <TextInput
                        type={"password"}
                        name="password"
                        placeholder="Password"
                        register={register}
                        validations={{ required: "Password harus diisi" }}
                        errors={errors}
                        className="form-control-user"
                        dataCy="password"
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary-f btn-user btn-block"
                        data-cy="signin"
                    >
                        <i
                            className={
                                `fas ` +
                                (!loading ? `fa-sign-in-alt` : `fa-spinner fa-spin`)
                            }
                        ></i>
                        &nbsp; SIGN IN
                    </button>
                    {/* fa-spinner fa-spin */}
                </form>
            </div>
        </div>
    );
};

export default Signin;
