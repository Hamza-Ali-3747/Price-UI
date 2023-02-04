import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'
export default function Header() {
  return (
            <Box as='section' color='#F7FAFC' bg ='#6B46C1' pt='90px' pb='198px' px='32px' pl="15px" 
            textAlign={{base:"left",md:"left",lg:"center"}}>
            <Heading fontWeight='800' fontSize='48px' color="color: #F7FAFC">
                Simple Pricing for your business
                </Heading>
                <Text fontWeight='500' fontSize='24px' pt='16px'>
                Plans that are carefully crafted to suit your business.
                </Text>
        </Box>

  ); 


}
