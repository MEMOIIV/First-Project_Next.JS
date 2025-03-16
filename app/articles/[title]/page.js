import React from 'react'

function ShowArticlesPage(props) {
    console.log(props);
  return (
    <div>
        <h2>Show ArticlesPage</h2>
        <h2>{props.params.title}</h2>
    </div>
  )
}

export default ShowArticlesPage
