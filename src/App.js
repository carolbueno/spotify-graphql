import React from "react";
import { 
	ApolloClient, 
  	InMemoryCache, 
  	ApolloProvider, 
  	HttpLink
} from "@apollo/client";
// import { ErrorLink, onError } from "@apollo/client/link/error";
import SearchInput from "./components/SearchInput.jsx";
import Container from "./containers/Container.jsx";

// const errorLink = onError(({graphqlErrors, networkError }) => {
//   	if (graphqlErrors) {
//     	graphqlErrors.map(({message, location, path}) => {
//       		alert(`Graphqç error ${message}`);
//     	});
//   	}
// });

// const link = from([
//   	errorLink, 
//   	new HttpLink({ uri: "https://spotify-graphql-server.herokuapp.com/graphql" })
// ]);

const link = new HttpLink({ uri: "https://spotify-graphql-server.herokuapp.com/graphql" });

const client = new ApolloClient({
  	cache: new InMemoryCache(),
  	link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
		<Container />
	</ApolloProvider>
  );
}

export default App;