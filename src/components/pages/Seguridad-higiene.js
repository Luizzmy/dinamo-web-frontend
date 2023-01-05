import { Box, Container, Heading, SimpleGrid, VStack, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import React from 'react'

export default function Seguridadhigiene() {
    return (
        <>
            <Box py="33px" backgroundImage="linear-gradient(90deg,#ff6c33 0%,#ffe035 100%)!important" color="white" textAlign="left">
                <Container maxW="container.xl">
                    <Heading as="h1">Cursos en seguridad e higiene</Heading>
                </Container>
            </Box>
            <Container maxW="container.xl">
                <SimpleGrid columns={2} p={4}>
                    <SimpleGrid columns={2}>
                        <VStack p={4} textAlign="left">
                            <Box p={2}>
                            <Heading size="lg" as="h2">Seguridad e higiene</Heading>
                            <UnorderedList>
                                <ListItem>Comisión de seguridad e higiene</ListItem>
                                <ListItem>Primeros auxilios</ListItem>
                                <ListItem>Seguridad e higiene laboral</ListItem>
                            </UnorderedList>
                            </Box>
                            <Box p={2}>
                            <Heading size="lg" as="h2">Rescate y prevención</Heading>
                            <UnorderedList>
                                <ListItem>Rescate en alturas</ListItem>
                                <ListItem>Rescate en espacios confinados</ListItem>
                                <ListItem>Brigadas de emergencia</ListItem>
                                <ListItem>Prevención y combate de incendios</ListItem>
                            </UnorderedList>
                            </Box>
                        </VStack>
                        <VStack p={4} textAlign="left">
                        <Box p={2}>
                            <Heading size="lg" as="h2">Manejo de sustancias químicas</Heading>
                            <UnorderedList>
                                <ListItem>Sustancias químicas NOM-018-STPS 2015</ListItem>
                                <ListItem>Contención derrames químicos</ListItem>
                                <ListItem>Residuos peligrosos</ListItem>
                            </UnorderedList>
                            </Box>
                            <Box p={2}>
                            <Heading size="lg" as="h2">Protección personal</Heading>
                            <UnorderedList>
                                <ListItem>Equipo de protección personal</ListItem>
                                <ListItem>Ergonomía</ListItem>
                                <ListItem>Espacios confinados</ListItem>
                                <ListItem>Manejo a la defensiva</ListItem>
                                <ListItem>Señalética</ListItem>
                                <ListItem>Seguridad patrimonial</ListItem>
                            </UnorderedList>
                            </Box>
                        </VStack>
                    </SimpleGrid>
                    <Image src="dinamo-capacitacion-cursos-int-4.jpg" />
                </SimpleGrid>
            </Container>
        </>
    )
}
