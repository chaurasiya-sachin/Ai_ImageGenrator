import React from "react";
import { useState } from "react";

const SearchQuery = () => {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImage = async () => {
    const current_query = query;
    setQuery("");
    setIsLoading(true);
    setImage(null);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          method: "POST",
          // body: JSON.stringify({ inputs: query }),
          body: JSON.stringify({
            inputs: current_query, // Pass the input as text
            options: { wait_for_model: true }, // Ensure model waits
          }),
        }
      );
      const blob = await response.blob();
      const imgURL = URL.createObjectURL(blob);
      setImage(imgURL);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Write your imagination here..."
        className="border border-gray-300 p-5 rounded-md w-72 mb-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
        style={{ height: "auto", minHeight: "40px" }}
      />
      <button
        onClick={fetchImage}
        className="bg-blue-600 text-white p-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
      >
        Generate
      </button>

      {isLoading && (
        <p className="mt-4 text-blue-500 text-lg animate-pulse">
          Generating...
        </p>
      )}

      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Generated"
            className="rounded-lg shadow-lg max-w-xs"
          />
        </div>
      )}
    </div>
  );
};

export default SearchQuery;
