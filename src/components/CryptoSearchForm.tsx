import { useState } from "react";
import { currencies } from "../data/currency.data";
import { useCryptoStore } from "../store/cryptocurrency.store";
import { Pair } from "../interfaces/pair.interface";
import { toast } from "react-toastify";

export const CryptoSearchForm = () => {
  const { cryptocurrencies, fetchCryptoData } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({ ...pair, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pair.currency) {
      toast.error("Debe seleccionar una moneda");
    } else if (!pair.cryptocurrency) {
      toast.error("Debe seleccionar una criptomoneda");
    }
    fetchCryptoData(pair);
  };

  return (
    <form className="cripto-search-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option
              key={cryptocurrency.CoinInfo.Name}
              value={cryptocurrency.CoinInfo.Name}
            >
              {cryptocurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
};
