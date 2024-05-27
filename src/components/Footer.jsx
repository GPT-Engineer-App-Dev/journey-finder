import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4}>
      <Flex direction="column" align="center">
        <Text mb={2}>Contact Us: info@travelbooking.com | +123 456 7890</Text>
        <Flex>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram size="24px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;