import axios from "axios";
import { TopCryptoCurrency } from "../interfaces/top_crypto_currency.interface";
import { Pair } from "../interfaces/pair.interface";
import { CryptoCurrencyData } from "../interfaces/crypto_currency_data.interface";

export const getCryptos = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const { data } = await axios.get(url);
  return data as TopCryptoCurrency;
};

export const getCurrentCryptoPrice = async (pair: Pair) => {
  const currency = pair.currency.toUpperCase();
  const cryptocurrency = pair.cryptocurrency.toUpperCase();

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency.toUpperCase()}&tsyms=${currency}`;

  const { data } = await axios.get(url);

  return data.DISPLAY[cryptocurrency][currency] as CryptoCurrencyData;
};
