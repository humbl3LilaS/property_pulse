"use client"
import {ClipLoader} from "react-spinners";

const overrides = {
    display: "block",
    margin: "100px auto"
}

const Loading = ({loading}: { loading: boolean }) => {

    return (
        <ClipLoader
            color={"#3b82f6"}
            loading={loading}
            size={150}
            cssOverride={overrides}
            aria-label={"Loading Spinner"}

        />
    );
};

export default Loading;