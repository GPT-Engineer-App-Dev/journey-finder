import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          TravelBooking
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/destinations" px={2}>
            Destinations
          </Link>
          <Link as={RouterLink} to="/bookings" px={2}>
            Bookings
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;