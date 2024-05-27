import { Box, Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/images/hero-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      <Stack spacing={6} maxW="lg" p={6} bg="rgba(0, 0, 0, 0.5)" borderRadius="md">
        <Heading as="h1" size="2xl">
          Discover Your Next Adventure
        </Heading>
        <Text fontSize="lg">
          Book flights, hotels, and car rentals at the best prices.
        </Text>
        <Flex>
          <Input placeholder="Search for flights, hotels, cars..." size="lg" />
          <Button colorScheme="teal" size="lg" ml={2}>
            Search
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default HeroSection;