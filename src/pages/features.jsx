import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

import img from '../Icons/img.svg'

import img2 from '../Icons/img2.svg'

import img3 from '../Icons/img3.svg'
const Features = () => {
  return (
    <Box mt='39px'  ml='367px' mr='267px'>
      <HStack w="906px" h="48px" >
        <HStack w='220px' h='48px' mr='50px'>
        
        <Image boxSize="22px" mr='24px' objectFit="cover" src={img} alt="Dan Abramov" />
        <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack w='220px' h='48px' ml='25px'>
        <Image boxSize="22px" objectFit="cover" src={img2} alt="Dan Abramov" />
        <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack w='220px' h='48px'>
        <Image boxSize="22px" objectFit="cover" src={img3} alt="Dan Abramov" />
        <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Features
