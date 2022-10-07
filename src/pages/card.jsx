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
    <Box ml={['32px', '240px', '240px']}>
      <Flex
        borderRadius="12px"
        mt="-145px"
        direction={['column', 'column', 'row']}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
        overflow="hidden"
        w={['292px', '994px', '994px']}
      >
        <Box
          w="378px"
          alignItems={['center', 'center', 'center']}
          h="337px"
          bg="#F0EAFB"
          p="60px"
        >
          <Heading
            as="h5"
            w={['262px', '378px', '378px']}
            mr={['111px', '0', '0']}
            textAlign="center"
            ml={['-40px']}
          >
            Premium PRO
          </Heading>
          <Heading
            ml={['-80px', '20px', '20px']}
            as="h3"
            textAlign="center"
            fontSize="60px"
          >
            $329
          </Heading>
          <Text
            ml={['-60px', '20px', '-10px']}
            color="#171923"
            textAlign={['center', 'center', 'center']}
            w="282px"
            h="28px"
            mt="8px"
          >
            billed just once
          </Text>
          <Button
            ml={['-37px', '5px', '5px']}
            colorScheme="purple"
            w={['250px', '282px', '282px']}
            mt="24px"
            h="51px"
          >
            Get Started
          </Button>
        </Box>
        <Box bg="#FFFFFF" w="616px">
          <Text
            m="20px"
            h="56px"
            fontSize={['14px', '18px', '18px']}
            fontWeight="400"
            ml={['18px', '45px', '45px']}
            w={['250px', '520px', '520px']}
          >
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack
            w="532px"
            h="28px"
            fontSize={['12px', '18px', '18px']}
            ml={['18px', '45px', '45px']}
            mr="39px"
            mt="24px"
            mb="16px"
          >
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack
            w="532px"
            h="28px"
            ml={['18px', '45px', '45px']}
            fontSize={['12px', '18px', '18px']}
            mr="39px"
            mt="24px"
            mb="16px"
          >
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack
            w="532px"
            h="28px"
            ml={['18px', '45px', '45px']}
            mr="39px"
            mt="24px"
            mb="16px"
            fontSize={['12px', '18px', '18px']}
          >
            <Image
              boxSize="22px"
              objectFit="cover"
              src={myicon}
              alt="Dan Abramov"
            />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack
            w="532px"
            h="28px"
            ml={['18px', '45px', '45px']}
            mr="39px"
            mt="24px"
            mb="16px"
            fontSize={['12px', '18px', '18px']}
          >
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
