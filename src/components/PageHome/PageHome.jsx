import { useHistory } from "react-router-dom";
import "./PageHome.css";

function PageHome() {
  let history = useHistory();

  const handleOrder = () => {
    history.push("/OrderPage");
  };

  return (
    <>
      <div className="Home">
        <h1>Teknolojik Yemekler</h1>

        <p>KOD ACIKTIRIR </p>
        <p>PİZZA, DOYURUR</p>

        <button type="button" onClick={handleOrder}>
          ACIKTIM
        </button>
      </div>
    </>
  );
}

export default PageHome;
