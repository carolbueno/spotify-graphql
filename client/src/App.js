import React from "react";
import { 
	ApolloClient, 
  	InMemoryCache, 
  	ApolloProvider, 
  	HttpLink
} from "@apollo/client";
import Container from "./containers/Container.jsx";

// const link = new HttpLink({ uri: "https://spotify-graphql-server.herokuapp.com/graphql" });
const link = new HttpLink({ uri: "http://localhost:4000/graphql" });

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