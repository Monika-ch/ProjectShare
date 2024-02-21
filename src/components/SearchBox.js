import React, { useState } from "react";
import { PROMPT_TAGS } from "../shared/PromptTags";
import "../styled-components/SearchBox.css";

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const tags = ["tag1", "tag2", "tag3"]; // replace with your tags
  const categories = [
    "category1",
    "category2",
    "category3",
    "Career",
    "Resume",
  ]; // replace with your categories

  // Replace with your actual data
  const prompts = [
    {
      title: "Prompt 1",
      tags: ["tag1"],
      category: "Career",
      text: "Prompt text 1",
      response: "Prompt response 1",
    },
    {
      title: "Prompt 2",
      tags: ["tag2"],
      category: "Resume",
      text: "Prompt text 2",
      response: "Prompt response 2",
    },
    // Add more prompts...
  ];
  let words = [];

  const handleSearch = (value) => {
    try {
      const lowerCaseValue = value.toLowerCase().trim();
      if (!lowerCaseValue) {
        return;
      }
      words = lowerCaseValue.split(" ");
      const foundTags = PROMPT_TAGS.filter((tag) =>
        words.includes(tag.toLowerCase())
      );
      const foundCategories = categories.filter((category) =>
        words.includes(category.toLowerCase())
      );
      const foundPrompts = prompts.filter(
        (prompt) =>
          prompt.tags.some((tag) => words.includes(tag.toLowerCase())) ||
          words.includes(prompt.category.toLowerCase()) ||
          words.includes(prompt.title.toLowerCase())
      );
      if (foundTags.length > 0 || foundCategories.length > 0) {
        setSearchResults(foundPrompts);
      } else {
        setSearchResults([]);
      }
      setSearchPerformed(true);
      setSearchQuery(value); // Set searchQuery to the current input value
      setError(null);
    } catch (err) {
      setError("An error occurred while searching");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(inputValue);
    }
  };
  return (
    <div className='SearchBox'>
      <input
        className='SearchBoxInput'
        type='search'
        placeholder='Search your prompt category'
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {searchPerformed && searchResults.length === 0 && (
        <p className='SearchBoxNoResult'>No results found for "{searchQuery}"</p>
      )}
      {searchResults.map((prompt, index) => (
        <div key={index}>
          <h2>{prompt.title}</h2>
          <p>Tags: {prompt.tags.join(", ")}</p>
          <p>Category: {prompt.category}</p>
          <p>{prompt.text}</p>
          <p>{prompt.response}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBox;

// import React, { useState } from "react";
// // import { PROMPT_TAGS } from "../shared/PromptTags";
// import "../styled-components/SearchBox.css";

// function SearchBox() {
//   const [inputValue, setInputValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   // const tags = ["tag1", "tag2", "tag3"]; // replace with your tags
//   const categories = [
//     "category1",
//     "category2",
//     "category3",
//     "Career",
//     "Resume",
//   ]; // replace with your categories

//   // Replace with your actual data
//   const prompts = [
//     {
//       title: "Prompt 1",
//       tags: ["tag1"],
//       text: "Prompt text 1",
//       response: "Prompt response 1",
//     },
//     {
//       title: "Prompt 2",
//       tags: ["tag2"],
//       text: "Prompt text 2",
//       response: "Prompt response 2",
//     },
//     // Add more prompts...
//   ];

//   const handleSearch = (value) => {
//     try {
//       const lowerCaseValue = value.toLowerCase().trim();
//       if (!lowerCaseValue) {
//         return;
//       }

//       const words = lowerCaseValue.split(" ");
//       const foundPrompts = prompts.filter(
//         (prompt) =>
//           prompt.tags.some((tag) => words.includes(tag.toLowerCase())) ||
//           words.includes(prompt.title.toLowerCase())
//       );

//       setSearchResults(foundPrompts);
//       setError(null);
//     } catch (err) {
//       setError("An error occurred while searching");
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch(inputValue);
//     }
//   };

//   return (
//     <div>
//       <input
//         type='search'
//         placeholder='Search your prompt category'
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyPress={handleKeyPress}
//       />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {searchResults.map((prompt, index) => (
//         <div key={index}>
//           <h2>{prompt.title}</h2>
//           <p>Tags: {prompt.tags.join(", ")}</p>
//           <p>{prompt.text}</p>
//           <p>{prompt.response}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchBox;

// //   const handleSearch = (value) => {
// //     try {
// //       if (!value.trim()) {
// //         setError("Input cannot be empty or spaces");
// //         return;
// //       }

// //       const lowerCaseValue = value.toLowerCase();
// //       const words = lowerCaseValue.split(" ");
// //       const foundTags = PROMPT_TAGS.filter((tag) =>
// //         words.includes(tag.toLowerCase())
// //       );
// //       const foundCategories = categories.filter((category) =>
// //         words.includes(category.toLowerCase())
// //       );

// //       if (foundTags.length > 0 || foundCategories.length > 0) {
// //         setSearchResult(
// //           `Found matching tags: ${foundTags.join(
// //             ", "
// //           )} and categories: ${foundCategories.join(", ")}`
// //         );
// //       } else {
// //         setSearchResult("No results found");
// //       }

// //       setError(null);
// //     } catch (err) {
// //       setError("An error occurred while searching");
// //     }
// //   };

// //   const handleKeyPress = (event) => {
// //     if (event.key === "Enter") {
// //       handleSearch(inputValue);
// //     }
// //   };

// //   return (
// //     <div className="SearchBox">
// //       <input
// //         className='SearchBoxInput'
// //         type='search'
// //         placeholder='Search your prompt category'
// //         onChange={(e) => setInputValue(e.target.value)}
// //         onKeyPress={handleKeyPress}
// //       />
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       <p>{searchResult}</p>
// //     </div>
// //   );
// // }

// // export default SearchBox;
