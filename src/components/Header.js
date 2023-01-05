import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Container, HStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import MainMenu from './home/MainMenu'

export default function Header() {
    return (
        <>
            <Box bg="#444444" width="full" color="white" position="fixed">
                <Container maxW="container.xl" pl={10}>
                    <HStack>
                        <PhoneIcon /> <Text><a href='tel:4422139464'>Tel. (442) 213 9464</a></Text>
                        <EmailIcon /><a href={'mailto:administracion@dinamocapacitacion.com.mx'}>administracion@dinamocapacitacion.com.mx</a>
                    </HStack>
                </Container>
            </Box>
            <Box bg="white">
                <Container pt={2} maxW="container.xl">
                    <HStack p={5} justify="space-between" align="center">
                        <Image src='/dinamo-capacitacion-logo-r.png' />
                        <MainMenu />
                    </HStack>
                </Container>
            </Box>
        </>
    )
}
