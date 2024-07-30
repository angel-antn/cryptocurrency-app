import { useCryptoStore } from "../store/cryptocurrency.store";
import { PropagateLoader } from "react-spinners";

export const CryptoPrice = () => {
  const { cryptocurrencyData, isLoading } = useCryptoStore();

  return isLoading ? (
    <div className="spinner">
      <PropagateLoader color="#0cb387" />
    </div>
  ) : (
    cryptocurrencyData != undefined && (
      <div className="result-wrapper">
        <h2>Cotización</h2>
        <div className="result">
          <img
            src={`https://www.cryptocompare.com${cryptocurrencyData?.IMAGEURL}`}
            alt="cryptocurrency"
          />
          <div>
            <p>
              El precio es de: <span>{cryptocurrencyData?.PRICE}</span>{" "}
            </p>
            <p>
              Precio más alto del día:{" "}
              <span>{cryptocurrencyData?.HIGHDAY}</span>{" "}
            </p>
            <p>
              Precio más bajo del día: <span>{cryptocurrencyData?.LOWDAY}</span>{" "}
            </p>
            <p>
              Variación últimas 24hrs:{" "}
              <span>{cryptocurrencyData?.CHANGEPCT24HOUR}</span>{" "}
            </p>
            <p>
              Última actualización:{" "}
              <span>{cryptocurrencyData?.LASTUPDATE}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    )
  );
};
