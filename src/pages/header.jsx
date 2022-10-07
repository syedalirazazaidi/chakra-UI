import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
const Header = () => {
  return (
    <Box as="section" bg="purple.600" w="100%" h="397px" color="gray.50">
      <VStack textAlign={['left','left','center']}>
        <Heading
          w={['366px', "751px", "751px"]}
          fontSize={['3xl', '3xl', '5xl']}
          mt="40.45px"
         ml={[ "90px","355px","355px"]}
          
          fontWeight="extrabold"
        >
          I'm overriding this heading
        </Heading>
        <Text 
        w={['280px','0px','100%']}
        
        fontSize={[ '15px','20px','20px']}  fontWeight="medium" pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
    </Box>
  )
}

export default Header
