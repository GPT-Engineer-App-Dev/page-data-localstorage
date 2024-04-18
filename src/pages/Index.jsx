import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Input, Button, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const PageOne = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("userInput", inputValue);
  };

  return (
    <VStack spacing={4}>
      <Input placeholder="Enter some text" value={inputValue} onChange={handleInputChange} />
      <Button colorScheme="blue" onClick={handleSaveToLocalStorage}>
        Save and Go to Page Two
      </Button>
      <Link to="/page-two">
        <Button colorScheme="teal">Go to Page Two</Button>
      </Link>
    </VStack>
  );
};

const PageTwo = () => {
  const [storedValue, setStoredValue] = useState("");

  const handleRetrieveFromLocalStorage = () => {
    const retrievedValue = localStorage.getItem("userInput");
    setStoredValue(retrievedValue);
  };

  return (
    <VStack spacing={4}>
      <Button colorScheme="blue" onClick={handleRetrieveFromLocalStorage}>
        Retrieve Data
      </Button>
      {storedValue && <Text>Stored Value: {storedValue}</Text>}
      <Link to="/">
        <Button colorScheme="teal">Back to Page One</Button>
      </Link>
    </VStack>
  );
};

const Index = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box p={5}>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default Index;
