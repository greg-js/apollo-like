import { h, render, Component } from 'preact';

const ArchivedPost = ({ postData, filterPosts }) => {

  const { url, title, date, category, tags } = postData;

  return (
    <div class='archived-post'>
      <h2><a href={url}>{title}</a></h2>
      <div class='archived-post-metadata'>
        <div class='archived-post-metadata-date'>
          {formatDate(date)}
        </div>
        <div class='archived-post-metadata-category-div'>
          Category: <a class='archived-post-metadata-category-item' onClick={ () => filterPosts({category}) }>{category}</a>
        </div>
        <div class='archived-post-metadata-tags-div'>
        Tags: {tags.map(tag => (
          <span>#<a class='archived-post-metadata-tags-item' onClick={ () => filterPosts({tag}) }>{tag}</a> </span>
        ))}
        </div>
      </div>
    </div>
  );
};

function formatDate(ISOdate) {
  const date = new Date(ISOdate);
  const unpaddedMonth = date.getMonth() + 1;
  const month = (unpaddedMonth < 10) ? `0${unpaddedMonth}` : unpaddedMonth;

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
}

export default ArchivedPost;
