import { useState } from "react";
import axios from "axios";

function Url() {
  const SERVER_BASE_URL = "http://localhost:4000";

  const [urls, setUrls] = useState([]);
  const [shortCode, setShortCode] = useState("");
  const [singleUrl, setSingleUrl] = useState(null);
  const [urlDetails, setUrlDetails] = useState({});

  async function getAllUrls() {
    const response = await axios.get(SERVER_BASE_URL + "/urls");
    console.log(response.data.urls);
    setUrls(response.data.urls);
  }

  async function getSpecificUrl(code) {
    const response = await axios.get(
      SERVER_BASE_URL + "/urls/" + code
    );
    setSingleUrl(response.data.url);
  }

  function updateUrlDetails(e, property) {
    setUrlDetails((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  }

  async function createShortUrl(e) {
    e.preventDefault();
    const response = await axios.post(
      SERVER_BASE_URL + "/urls",
      urlDetails
    );
    console.log(response.data);
    getAllUrls();
  }

  return (
    <>
      <h1>URL Shortener</h1>

      <button onClick={getAllUrls}>Get All URLs</button>

      {urls.map((url) => (
        <div key={url.id}>
          <p>Original: {url.originalUrl}</p>
          <p>Short Code: {url.shortCode}</p>
        </div>
      ))}

      <hr />

      <input
        placeholder="Enter short code"
        onChange={(e) => setShortCode(e.target.value)}
      />
      <button onClick={() => getSpecificUrl(shortCode)}>
        Get URL
      </button>

      {singleUrl ? (
        <div>
          <p>Original URL: {singleUrl.originalUrl}</p>
          <p>Short Code: {singleUrl.shortCode}</p>
        </div>
      ) : (
        "Enter short code to see URL"
      )}

      <hr />

      <form onSubmit={createShortUrl}>
        <input
          placeholder="Enter Original URL"
          onChange={(e) => updateUrlDetails(e, "originalUrl")}
        />
        <button type="submit">Create Short URL</button>
      </form>
    </>
  );
}

export default Url;
