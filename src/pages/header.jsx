import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
const Header = () => {
  return (
    <Box as="section" bg="purple.600" w="100%" h="397px" color="gray.50">
      <VStack textAlign={['left','left','center']}>
        <Heading
          w={['366px', "751px", "751px"]}
          fontSize={['3xl', '3xl', '5xl']}
          mt="88.45px"
          mr="314px"
          
          ml="355px"
          fontWeight="extrabold"
        >
          I'm overriding this heading
        </Heading>
        <Text  fontSize={[ 'lg','lg', '2xl']}  fontWeight="medium" pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
    </Box>
  )
}

export default Header
