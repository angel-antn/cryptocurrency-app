import { useEffect } from "react";
import { CryptoSearchForm } from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store/cryptocurrency.store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CryptoPrice } from "./components/CryptoPrice";

function App() {
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
          <CryptoPrice />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
