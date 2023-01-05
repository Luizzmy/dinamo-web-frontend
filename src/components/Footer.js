import { Box, Container, VStack,Image, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box bg="#444444" width="full" color="white">
    <Container maxW="container.xl">
      <VStack p={5} justify="center">
        <Image src='/dinamo-capacitacion-logo-r.png' />
        <Text>Desde 1989 servimos a la industria.</Text>
      </VStack>
    </Container>
  </Box>
  )
}

export default Footer