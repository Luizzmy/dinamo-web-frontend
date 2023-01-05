import { Box, Container, Image, Heading, ListItem, SimpleGrid, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'

export default function PersonalIndustrial() {
    return (
        <>
            <Box py="33px" backgroundImage="linear-gradient(90deg,#ff6c33 0%,#ffe035 100%)!important" color="white" textAlign="left">
                <Container maxW="container.xl">
                    <Heading as="h1">Cursos para personal industrial</Heading>
                </Container>
            </Box>
            <Container maxW="container.xl">
                <SimpleGrid columns={2} p={4}>
                    <VStack p={4}textAlign="left">
                        <Heading as="h2">Adiestramiento a operadores y usuarios de:</Heading>
                    <UnorderedList>
                        <ListItem>Montacargas</ListItem>
                        <ListItem>Calderas</ListItem>
                        <ListItem>Cushman (Runner, Tugger).</ListItem>
                        <ListItem>Grúa Articulada/Grúa Viajera</ListItem>
                        <ListItem>Cargador Frontal</ListItem>
                        <ListItem>Patín Eléctrico/ Hidráulico</ListItem>
                        <ListItem>Plataforma Elevadora</ListItem>
                        <ListItem>Polipastos</ListItem>
                        <ListItem>Recogepedidos (Order Pickers)</ListItem>
                        <ListItem>Calderas y Recipientes sujetos a presión</ListItem>
                        <ListItem>Montacargas avanzado (mantenimiento)</ListItem>
                        <ListItem>Montacargas Refrendo (prevención de accidentes con montacargas)</ListItem>
                        <ListItem>Rodacargas</ListItem>
                        <ListItem>Recipientes Sujetos a Presión</ListItem>
                        <ListItem>Seguridad en Trabajo en Alturas</ListItem>
                    </UnorderedList>
                    </VStack>
                    <Image src="dinamo-capacitacion-cursos-int-1.jpg"/>
                </SimpleGrid>
            </Container>
        </>
    )
}
