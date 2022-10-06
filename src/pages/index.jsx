import {
 Box,
  Button,
  Grid,
  HStack,
  Stack,
  Heading
  ,Flex,
  VStack,
  Text,Square,Center
} from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
  <div>
    <Flex direction='row' justify='space-around'>
    <Box bg="red" w='80px'>Box 1</Box>
    <Box bg="green" w='80px'>Box 2</Box>
    <Box bg="blue" w='80px'>Box 3</Box>
    <Box bg="orange" w='80px'>Box 4</Box>
    </Flex>
    <Stack direction='row' >
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    4
  </Box>
</Stack>
  </div>
  )
}

export default Index
