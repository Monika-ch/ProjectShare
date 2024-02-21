import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Prompt from "./PromptCard";
import { PROMPT_CATEGORY } from "../shared/PromptCategory";
import { PROMPT_TITLE } from "../shared/PromptTitle";
import { PROMPT_TAGS } from "../shared/PromptTags";
import { PROMPT_TEXT } from "../shared/PromptText";
import { PROMPT_RESPONSE } from "../shared/PromptResponse";
import "../styled-components/Home.css";

const Home = () => {
  // State variable to keep track of how many categories are currently visible
  const [visibleCategories, setVisibleCategories] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  // Example prompt to be displayed in each category
  const prompt = (
    <Prompt
      title={PROMPT_TITLE}
      tags={PROMPT_TAGS}
      text={PROMPT_TEXT}
      response={PROMPT_RESPONSE}
    />
  );

  // Function to increase the number of visible categories by 1
  const loadMoreCategories = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCategories((prevValue) => prevValue + 1);
      setIsLoading(false);
    }, 1200);
  };

  // // Effect hook to add an event listener for the scroll event when the component mounts
  // useEffect(() => {
  //   // Function to handle the scroll event
  //   const handleScroll = () => {
  //     // Check if the user has scrolled to the bottom of the page
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight
  //     )
  //       return;
  //     // If the user has scrolled to the bottom, load more categories
  //     loadMoreCategories();
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Clean up function to remove the event listener when the component unmounts
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className='Home'>
      <div className='HomeHeader'>
        <h1>Prompt Share</h1>
        <p>Share prompts, fuel communal growth!</p>
      </div>
      <SearchBox />

      <div className='PromptCategories'>
        {/* Map over the first 'visibleCategories' items in the PROMPT_CATEGORY array to create a new category section for each one */}
        {PROMPT_CATEGORY.slice(0, visibleCategories).map((category) => (
          <div className='Category' key={category.id}>
            <h2>Category {category.title}</h2>
            <div className='container'>
              <div className='row'>
                {/* Display the example prompt in each category */}
                {prompt}
                {prompt}
                {prompt}
                {prompt}
              </div>
            </div>
          </div>
        ))}
        {/* Link to load more categories when clicked */}
        {/* <a href='#' onClick={loadMoreCategories}>
            Load More Categories ..
          </a> */}
        {visibleCategories < PROMPT_CATEGORY.length && !isLoading && (
          <div>
            <button className='LoadMoreButton' onClick={loadMoreCategories}>
              Load More Categories ..
            </button>
          </div>
        )}
        {isLoading && <div>Loading More Categories...</div>}
      </div>
    </div>
  );
};

export default Home;
