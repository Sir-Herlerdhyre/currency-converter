import { useState } from "react";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("NGN");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "06a8cb5c3f9c61a8de918e84";

  async function convert() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCur}/${toCur}/${amount}`
      );
      const data = await res.json();
      setOutput(data.conversion_result);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="converter-container">
      <h1 className="title">🌍 Currency Converter</h1>
      <div className="converter-box">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={isLoading}
          className="amount-input"
          placeholder="Enter amount"
        />

        <div className="dropdowns">
          <select
            value={fromCur}
            onChange={(e) => setFromCur(e.target.value)}
            className="currency-select"
          >
            <option value="USD">USD (United States Dollar)</option>
            <option value="EUR">EUR (Euro)</option>
            <option value="CAD">CAD (Canadian Dollar)</option>
            <option value="INR">INR (Indian Rupee)</option>
            <option value="NGN">NGN (Nigerian Naira)</option>
            <option value="ZAR">ZAR (South African Rand)</option>
            <option value="KES">KES (Kenyan Shilling)</option>
            <option value="GHS">GHS (Ghanaian Cedi)</option>
            <option value="EGP">EGP (Egyptian Pound)</option>
            <option value="MAD">MAD (Moroccan Dirham)</option>
            <option value="SAR">Saudi Riyal (SAR)</option>
            <option value="AED">UAE Dirham (AED)</option>
            <option value="KWD">Kuwaiti Dinar (KWD)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
          </select>

          <select
            value={toCur}
            onChange={(e) => setToCur(e.target.value)}
            className="currency-select"
          >
            <option value="USD">USD (United States Dollar)</option>
            <option value="EUR">EUR (Euro)</option>
            <option value="CAD">CAD (Canadian Dollar)</option>
            <option value="INR">INR (Indian Rupee)</option>
            <option value="NGN">NGN (Nigerian Naira)</option>
            <option value="ZAR">ZAR (South African Rand)</option>
            <option value="KES">KES (Kenyan Shilling)</option>
            <option value="GHS">GHS (Ghanaian Cedi)</option>
            <option value="EGP">EGP (Egyptian Pound)</option>
            <option value="MAD">MAD (Moroccan Dirham)</option>
            <option value="SAR">Saudi Riyal (SAR)</option>
            <option value="AED">UAE Dirham (AED)</option>
            <option value="KWD">Kuwaiti Dinar (KWD)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
          </select>
        </div>

        <button onClick={convert} disabled={isLoading} className="convert-btn">
          {isLoading ? "Converting..." : "Convert"}
        </button>

        <p className="result">
          {output && `${amount} ${fromCur} = ${output} ${toCur}`}
        </p>
      </div>
    </div>
  );
}
