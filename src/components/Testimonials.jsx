import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const testimonials = [
  { name: "John Doe", feedback: "Amazing experience! Highly recommend." },
  { name: "Jane Smith", feedback: "A seamless booking process and great customer service." },
  { name: "Sam Wilson", feedback: "Best travel booking site I've ever used." },
];

const Testimonials = () => {
  return (
    <Box p={6} bg="gray.100">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Customer Testimonials
      </Heading>
      <VStack spacing={6}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={4} bg="white" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">
              {testimonial.name}
            </Text>
            <Text mt={2}>{testimonial.feedback}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Testimonials;