import React from "react";
import { Box, Button, Container, Heading, Text, Stack, Image, Badge, useColorModeValue, List, ListItem, ListIcon, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaPlus, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={6} as={Box} textAlign={"center"} py={{ base: 20, md: 36 }}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} fontWeight={700}>
          Master Web Development
        </Heading>
        <Text color={useColorModeValue("gray.700", "gray.200")}>Join our comprehensive course and become a professional web developer. Learn HTML, CSS, JavaScript, React, and more!</Text>
        <Stack spacing={6} direction={"row"} justifyContent={"center"}>
          <Button
            leftIcon={<FaPlus />}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Enroll Now
          </Button>
        </Stack>
      </Stack>

      <Stack direction={{ base: "column", md: "row" }} textAlign={"center"} justify={"center"} spacing={{ base: 4, lg: 10 }} py={10}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvdXJzZXxlbnwwfHx8fDE3MDkzNDM0MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius={"xl"} alt={"Web Development Course"} objectFit={"cover"} />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }}>What You Will Learn</Heading>
          <List spacing={3} textAlign={"start"} px={{ base: 0, md: 12 }}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color={"green.500"} />
              Build responsive and accessible web applications
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color={"green.500"} />
              Implement modern JavaScript ES6+ concepts
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color={"green.500"} />
              Master the React library, including Hooks and Context API
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color={"green.500"} />
              Understand backend integration with Node.js and Express
            </ListItem>
          </List>
          <Button
            size={"lg"}
            leftIcon={<Icon as={FaLaptopCode} />}
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
          >
            Start Learning
          </Button>
        </Stack>
      </Stack>

      <Box textAlign={"center"} my={10}>
        <Badge colorScheme="green" p={2} mb={2}>
          Best Seller
        </Badge>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Course Pricing</Heading>
        <Text mt={2} color={useColorModeValue("gray.700", "gray.200")}>
          Lifetime access for a one-time payment
        </Text>
        <Text fontWeight={700} fontSize={"4xl"}>
          $XXX
        </Text>
        <Stack mt={8} spacing={6} direction={"row"} justifyContent={"center"}>
          <Button
            bg={"yellow.400"}
            color={"white"}
            _hover={{
              bg: "yellow.500",
            }}
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
