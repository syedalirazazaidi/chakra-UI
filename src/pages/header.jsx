import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box bg="#6B46C1" w="100%" h="397px" color="white">
      <VStack>
        <Heading
          size="lg"
          w='751px'
          fontSize="48px"
          lineHeight="62.4px"
          mt="88.45px"
          mr="314px"
          ml="375px"
          fontWeight="800"
        >
          I'm overriding this heading
        </Heading>
        <Text fontSize="24px" w='604px'
>
          Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
    </Box>
  )
}

export default Header
