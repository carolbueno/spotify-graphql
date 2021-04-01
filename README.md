# spotify-graphql

## Get started

### prerequisites

For running this example locally, you must:

Have a modern `node.js` version ( >=8 ) installed.

Run `npm install`. 

### run server

`npm start` on the server folder to start the graphql server, then open http://localhost:4000/

### run client

`npm start` on the client folder to start the application

### questions
1. Please describe how would you go about implementing a context hook?
Just like I did with the SearchedArtistContext.

2. useMemo vs useCallback vs useEffect: When would you use each of these hooks? What are the use cases for each of them?
I'm not a big fan of react hooks, but:

useMemo: for performance improvement, to apply memoization to any value type. 

useCallback: for performance improvement, to prevent useless re-renders. It's possible to memoize an callback.
 
useEffect: used to execute some action after render to perform dom updates. For example, when you fetch some data and want to update the state. 


3. Assume your application has queried the API for some data, and processed it. How would you implement the download function for that data from the browser?
The first way that comes to my mind is a workaround with javascript/jquery.

4. Imagine that we have a common source of large data (5 MB) (for example coming from GraphQL) that gets sent to two components on the same page. Both of the components parse and mutate the data causing errors on each other’s component. How would you fix this?