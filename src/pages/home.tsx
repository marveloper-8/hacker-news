import { FC } from "react";
// actions
import useDataFetcher from "../actions/dataAction";
// utils
import { HomePageModel } from "../utils/models";
// components
import Story from "./story";
// styling
import "./styling/style.scss";

const Home: FC<HomePageModel> = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top");

  return (
    <div className="home">
      <div className="title">
        <h1>HACKERNEWS</h1>
      </div>
      <div className="blog-container">
        {isLoading ? (
          <h1>Please wait...</h1>
        ) : (
          <>
            {stories.map(({ data: story }) => story && <Story story={story} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
