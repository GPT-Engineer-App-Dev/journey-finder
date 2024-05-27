import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const destinations = [
  { name: "Paris", image: "/images/paris.jpg", description: "The city of lights and love." },
  { name: "New York", image: "/images/new-york.jpg", description: "The city that never sleeps." },
  { name: "Tokyo", image: "/images/tokyo.jpg", description: "A bustling metropolis with a unique culture." },
  { name: "Sydney", image: "/images/sydney.jpg", description: "Home to the iconic Sydney Opera House." },
];

const PopularDestinations = () => {
  return (
    <Box p={6}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Popular Destinations
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        {destinations.map((destination) => (
          <Box key={destination.name} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={destination.image} alt={destination.name} />
            <Box p={4}>
              <Heading as="h3" size="md">
                {destination.name}
              </Heading>
              <Text mt={2}>{destination.description}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularDestinations;