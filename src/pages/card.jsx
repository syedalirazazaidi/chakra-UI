import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import myicon from '../Icons/icon.svg'

const Card = () => {
  return (
    <Box
      bg="white"
      w="994px"
      h="337px"
      m="auto"
      mt="-145px"
      borderRadius="12px"
      overflow="hidden"
      display={{ md: 'flex' }}
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex>
        <Box w="378px" h="337px" bg="#F0EAFB" p="60px">
          {/* <VStack textAlign="center"> */}
          <Heading as="h4" color="#171923" fontSize="24px">
            Premium PRO
          </Heading>
          <Heading as="h3" fontSize="60px">
            $329
          </Heading>
          <Text color="#171923" w="282px" h="28px" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" w="282px" mt="24px" h="51px">
            Get Started
          </Button>
          {/* </VStack> */}
        </Box>
        <Box bg="#FFFFFF" w="616px">
          <Text
            m="20px"
            w="520px"
            h="56px"
            fontSize="18px"
            fontWeight="400"
            ml="45px"
          >
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack w="532px" h="28px" ml="45px" mr="39px" mt="24px" mb="16px">
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack w="532px" h="28px" ml="45px" mr="39px" mt="24px" mb="16px">
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack w="532px" h="28px" ml="45px" mr="39px" mt="24px" mb="16px">
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack w="532px" h="28px" ml="45px" mr="39px" mt="24px" mb="16px">
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Card
