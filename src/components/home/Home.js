import React from 'react';
import { Box, Container, HStack, Text, Image, Heading, Stack, Divider, Center, SimpleGrid, VStack, Flex, Icon } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { IoIosRibbon } from 'react-icons/io'

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Box
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('spraymart-mexico.jpg')"
        backgroundRepeat="no-repeat"
        borderTopColor="#f2652e"
        borderBottomColor="#f2652e"
        borderTopWidth="20px"
        borderBottomWidth="20px">
        <Container
          maxW="container.xl"
          color="white"
          justifyContent="center"
          textAlign="left"
          textShadow="0.02em 0.04em 0.05em rgb(0 0 0 / 77%)"
        >
          <Stack py="20%" spacing={8}>
            <Heading as='h1' size="4xl" fontWeight="normal">
              Capacitamos en habilidades y destrezas de trabajo
            </Heading>
            <Heading as="h3" fontWeight="normal">
              Desde 1989 especializados en la industria.
            </Heading>
          </Stack>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Stack py="5%" spacing={6}>
          <Heading as="h2">Nuestro enfoque es en el adiestramiento práctico</Heading>
          <Center>
            <Divider />
          </Center>
          <Text fontSize='lg'>Comprendemos las necesidades de las empresas, tener una mayor seguridad para el cuidado de las personas en el área de trabajo</Text>
        </Stack>
      </Container>
      <Container maxW="container.xl" mb={8}>
        <SimpleGrid columns={4} spacing={14}>
          <Box py={4}>
            <Image src="/dinamo-capacitacion-1.jpg" />
            <Heading as="h3" size="lg">Montacargas</Heading>
          </Box>
          <Box py={4}>
            <Image src="/dinamo-capacitacion-2.jpg" />
            <Heading as="h3" size="lg">Grúas viajeras y articuladas</Heading>
          </Box>
          <Box py={4}>
            <Image src="/dinamo-capacitacion-3.jpg" />
            <Heading as="h3" size="lg">Plataforma elevadora</Heading>
          </Box>
          <Box py={4}>
            <Image src="/dinamo-capacitacion-4.jpg" />
            <Heading as="h3" size="lg">Trabajo en alturas</Heading>
          </Box>
        </SimpleGrid>
      </Container>
      <Box bg="#f2652e" mt={8}>
        <Container maxW="container.xl">
          <HStack>
            <VStack justify="space-between" spacing={6} color="white" textAlign="left">
              <Heading as="h2" size="xl">
                Tenemos el curso que necesita
              </Heading>
              <Divider />
              <Box textAlign="left" spacing={4}>
                <Heading as="h4" size="md">Contáctenos</Heading>
                <HStack>
                  <PhoneIcon /> <Text><a href='tel:4422139464'>Tel. (442) 213 9646</a></Text></HStack>
                <HStack>
                  <EmailIcon /><a href={'mailto:informacion@dinamocapacitacion.com.mx'}>informacion@dinamocapacitacion.com.mx</a></HStack>
              </Box>
            </VStack>
            <Box w="800px">
              <Image h="auto" w="auto" src='/dinamo-capacitacion-montacargas-2.jpg' />
            </Box>
          </HStack>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <VStack spacing={6} py={6}>
          <Heading as="h2">Areas en que impartimos cursos</Heading>
          <SimpleGrid columns={3} spacing={14}>
            <Box py={4}>
              <Image src="/dinamo-capacitacion-cursos-1.jpg" />
              <Heading as="h3" size="md">Personal industrial</Heading>
            </Box>
            <Box py={4}>
              <Image src="/dinamo-capacitacion-cursos-2.jpg" />
              <Heading as="h3" size="md">Seguridad e higiene</Heading>
            </Box>
            <Box py={4}>
              <Image src="/dinamo-capacitacion-cursos-4.jpg" />
              <Heading as="h3" size="md">Mantenimiento</Heading>
            </Box>
          </SimpleGrid>
          <Heading as="h2">Dinamo Capacitación no tiene sucursales, nuestras oficinas están en Querétaro</Heading>
        </VStack>
      </Container>
      <Flex spacing={0} w="full" justify="center">
        <Image w="full" src="/dinamo-capacitacion-4-2.jpg" />
        <Image w="full" src="/dinamo-capacitacion-3-1.jpg" />
        <Image w="full" src="/dinamo-capacitacion-4-1.jpg" />
        <Image w="full" src="/dinamo-capacitacion-3-2.jpg" />
      </Flex>
      <Container maxW="container.xl">
        <Heading pt={5} as="h2">Opere su empresa con eficiencia manteniendo a su personal adecuadamente capacitado</Heading>
        <Icon as={IoIosRibbon} w={40} h={40} />
      </Container>
    </>
  );
}

export default Home;
