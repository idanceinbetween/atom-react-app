# Atom React App

## How to run the app

After downloading the folder and navigated to project folder root from your terminal:

- Execute `npm install` to ensure all dependencies are downloaded
- Execute `npm start` to runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Task

Please create a single-page React & Redux app that renders all the items from this endpoint:
https://jsonplaceholder.typicode.com/posts

In addition to this, the app should display a statistics section at the top with the following stats:
Total Word Count – the total word count across all the posts
Top Five Frequent Words – the top five most used words across all the posts

Finally, the user should be able to delete any post from the list which should in turn dynamically update the statistics. Note: The delete feature does not call any API and only will only delete the post from the Redux store.
