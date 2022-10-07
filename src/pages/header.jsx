import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
const Header = () => {
  return (
    <Box as="section" bg="#6B46C1" w="100%" h="397px" color="#F7FAFC">
      <VStack>
        <Heading
          w="751px"
          fontSize="5xl"
          mt="88.45px"
          mr="314px"
          ml="375px"
          fontWeight="extrabold"
        >
          I'm overriding this heading
        </Heading>
        <Text fontSize="2xl" w="604px" fontWeight="medium" pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
    </Box>
  )
}

export default Header
