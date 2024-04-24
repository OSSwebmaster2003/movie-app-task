import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{
        position: "fixed",
        inset: 0,
        background: "#141414",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#e50813"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
