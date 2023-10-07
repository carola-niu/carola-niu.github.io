import React from "react";

const ReachOut =({heading,message,email})=>{
    return(
        <>
        <h3 className="display-4 pb-3 text-center">{heading}</h3>
        <p className="lead text-center pb-3">
            {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
        </p>
        </>
    )
};
export default ReachOut;