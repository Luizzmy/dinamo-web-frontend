import { Box, Container, Heading, SimpleGrid, VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Empresa() {
    return (
        <>
            <Box py="33px" backgroundImage="linear-gradient(90deg,#ff6c33 0%,#ffe035 100%)!important" color="white" textAlign="left">
                <Container maxW="container.xl">
                    <Heading as="h1">Nuestra empresa</Heading>
                </Container>
            </Box>
            <Container maxW="container.xl">
                <SimpleGrid columns={2} p={4}>
                    <Image src="dinamo-capacitacion-cursos-int-5.jpg" />
                    <VStack p={4} textAlign="left">
                        <Text>Somos una empresa queretana fundada en 1989 atendiendo a las necesidades de mano de obra calificada.</Text>
                        <br />
                        <Text>Desde hace más de 30 años capacitamos al personal de la industria y del sector empresarial nacional, velando por la seguridad laboral y la calidad de vida.</Text>
                        <br />
                        <Text w="full">Somos la opción preferida de nuestros clientes, su preferencia nos avala.</Text>
                        <br />
                        <Text>Como empresa hemos logrado optimizar las actividades laborales e incrementar visiblemente la productividad, capacidades y competencias de nuestros clientes, colocándolos como empresas con estándares internacionales.</Text>
                        <br />
                        <Heading w="full" as="h2" size="lg" textAlign="left">Equipo de trabajo</Heading>
                        <Text>Nuestro equipo de trabajo está conformado por profesionales de la seguridad, autorizados y certificados por diversos organismos nacionales e internacionales.</Text>
                        <br />
                        <Text>Estamos convencidos de que el mejor capital de trabajo es el capital humano, por ello invertimos y apostamos día a día por los integrantes de cada equipo.</Text>
                    </VStack>
                </SimpleGrid>
            </Container>
        </>
    )
}
