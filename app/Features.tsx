import React from 'react'
import { Box,Button,Flex,Heading,Text,HStack,Icon } from '@chakra-ui/react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'
export default function Features() {
  return (
    <Box maxWidth="800px" m="auto" mt="25px" px="20px">
        <Flex direction={{base:"column",md:"column",lg:"row"}} >
        <HStack mb={"15px"}>
            <Icon as={icon1}/>
            <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb={"15px"}>
            <Icon as={icon2}/>
            <Text>No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack mb={"15px"}>
            <Icon as={icon3}/>
            <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
        </Flex>
    </Box>
  )
}
