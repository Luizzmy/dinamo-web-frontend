import { Box, Container, Heading, SimpleGrid, VStack, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import React from 'react'

export default function Mantenimiento() {
    return (
        <>
            <Box py="33px" backgroundImage="linear-gradient(90deg,#ff6c33 0%,#ffe035 100%)!important" color="white" textAlign="left">
                <Container maxW="container.xl">
                    <Heading as="h1">Cursos en mantenimiento</Heading>
                </Container>
            </Box>
            <Container maxW="container.xl">
                <SimpleGrid columns={2} p={4}>
                    <VStack p={4} textAlign="left">
                        <Heading as="h2">Con experiencia en variedad de maquinaria industrial</Heading>
                        <UnorderedList>
                            <ListItem>Bombas centrífugas y Reciprocantes</ListItem>
                            <ListItem>Herramientas Manuales y Eléctricas</ListItem>
                            <ListItem>Hidráulica y Neumática</ListItem>
                            <ListItem>Máquinas - Herramientas</ListItem>
                            <ListItem>Motores eléctricos</ListItem>
                            <ListItem>Operación segura de Camión de Volteo</ListItem>
                            <ListItem>Operación segura de Palas Mecánicas</ListItem>
                            <ListItem>Optimización del Taller de Mantenimiento</ListItem>
                            <ListItem>Seguridad en Fuentes de Radiación Electromagnéticas Ionizantes y No Ionizantes</ListItem>
                            <ListItem>Sistemas de Protección y Dispositivos de Seguridad en la Maquinaria y Equipo de Trabajo</ListItem>
                        </UnorderedList>
                    </VStack>
                    <Image src="dinamo-capacitacion-cursos-int-3.jpg" />
                </SimpleGrid>
            </Container>
        </>
    )
}
