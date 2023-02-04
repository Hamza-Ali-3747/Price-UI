import React from 'react'
import { Box,Button,Flex,Heading,Text,HStack,Icon } from '@chakra-ui/react'
import icon from './icons/icon'
export default function Pricing() {
  return (
    <Box 
    maxWidth="850px" 
    ml={{base:"20px",lg:"auto"}}
    mr={{base:"20px",lg:"auto"}}
    mt="-150"
    bg="white" 
    borderRadius="16px" 
    overflow={"hidden"}
    boxShadow={"dark-lg"} 
    
    >
            <Flex direction={{base:"column",md:"column",lg:"row"}}>
                <Box bg='#F0FAFB' p='50px' textAlign="center">
                    <Text fontSize='24px' fontWeight='600'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px' >$329</Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                    <Button colorScheme='purple' size='lg' w='250px' mt='24px'>Get Started</Button>
                </Box>
                <Box pt="50px" pl="25px">
                <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
                <HStack mb={"15px"}>
                    <Icon as={icon}/>
                    <Text>International calling and messaging API</Text>
                </HStack>

                <HStack mb={"15px"}>
                    <Icon as={icon}/>
                    <Text>Additional phone numbers</Text>
                </HStack>

                <HStack mb={"15px"}>
                    <Icon as={icon}/>
                    <Text>Automated messages via Zapier</Text>
                </HStack>

                <HStack mb={"15px"}>
                    <Icon as={icon}/>
                    <Text>24/7 support and consulting</Text>
                </HStack>


                </Box>
            </Flex>
        </Box>
  )
}
