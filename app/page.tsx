"use client";
import Header from '@/Header';
import { ChakraProvider } from '@chakra-ui/react'
import Features from './Features';
import Pricing from './Pricing';


export default function Home() {
  return( <ChakraProvider>
    <Header/>
    <Pricing/>
    <Features/>
    </ChakraProvider>
  );
}
