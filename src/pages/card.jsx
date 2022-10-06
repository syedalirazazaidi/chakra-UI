import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Card = () => {
  return (
    <Flex  boxShadow='dark-lg'  rounded='md' bg='white' w="994px" h="337px" m='auto' >
      <Box w="378px" h="335px" bg="#F7FAFC">
        <Heading as="h4" size="md" color="#171923">
          Premium PRO
        </Heading>
        <Heading as="h2" fontSize="60px" lineheight="100%">
          $329
        </Heading>
        <Text>billed just once</Text>
        <Button bg="#805AD5" variant="solid" width="282px" height="51px">
          Get Started
        </Button>
      </Box>
      <Box bg="#FFFFFF" w="616px" >
        <Text m='20px' w="520px" h="56px" fontSize='18px' fontWeight='400' lineheigt='28px'>
        Access these features when you get this pricing package for your business.
        </Text>
      </Box>
    </Flex>
  )
}

export default Card
