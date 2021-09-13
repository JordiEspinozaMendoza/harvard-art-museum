import React from 'react';

import Loader from 'react-loader-spinner';

export default function LoadingScreen() {
    return(
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
            <h5 className="">Loading...</h5>
            <Loader 
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
            />
        </div>
    );
}