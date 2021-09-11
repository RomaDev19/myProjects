import React from 'react'
import { toast, ToastContainer } from "react-toastify";

function Toast(){
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        >

        </ToastContainer>
    )
}
export default Toast;