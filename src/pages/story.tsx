import { FC } from "react";
// utils
import { LinkModel, StoryModel } from "../utils/models";
// styling
import './styling/style.scss'

const Link: FC<LinkModel> = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story: FC<StoryModel> = ({
  story: { id, by, title, kids, time, url },
}) => {
  return (
    <div className="story">
      <h3 className="story-title">
        <Link url={url} title={title} />
      </h3>
      <div className="story-info">
        <span>
          by{" "}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        &nbsp; | &nbsp;
        <span>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        &nbsp; | &nbsp;
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Story;
