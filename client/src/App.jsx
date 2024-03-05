import { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/grapgql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h1>Maleek</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
