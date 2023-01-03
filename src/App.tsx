import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import avatarImageTwo from "./assets/avatar3.jpg";
import ClassCr from "./assets/Telas/Aula.png";
import Map from "./assets/Telas/canva.png";
import CertificateCr from "./assets/Telas/Certificate.png";
import LoginCr from "./assets/Telas/inicio.png";
import LoginIrri from "./assets/Telas/LoginIrri.png";
import FarmMap from "./assets/Telas/maps.png";
import PivotEdit from "./assets/Telas/PivotEdit.png";
import PanelCr from "./assets/Telas/telaCresça.png";
import LikeOne from "./assets/Telas/twilio1.png";
import LikeTwo from "./assets/Telas/twilio2.png";
import triangle from "./assets/triangle.svg";
import { Card } from "./components/Card";
import { ProjectModal } from "./components/ProjectModal";
import pdf from "./resume.pdf";

import sl1 from "./assets/lrn/sl1.png";
import sl2 from "./assets/lrn/sl2.png";
import sl3 from "./assets/lrn/sl3.png";

import bm1 from "./assets/lrn/bm1.png";
import bm2 from "./assets/lrn/bm2.png";
import bm3 from "./assets/lrn/bm3.png";

import ln1 from "./assets/lrn/ln1.png";
import ln2 from "./assets/lrn/ln2.png";
import ln3 from "./assets/lrn/ln3.png";
import React from "react";

const openInNewTab = (url: string | undefined) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function App() {
  const homeRef = useRef(document.createElement("div"));
  const aboutRef = useRef(document.createElement("div"));
  const resumeRef = useRef(document.createElement("div"));
  const projectsRef = useRef(document.createElement("div"));
  const contactRef = useRef(document.createElement("div"));

  // const Box = motion.custom(Box);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useState({
    title: "",
    images: [""],
    mobile: false,
  });

  return (
    <ChakraProvider>
      <Box
        bg="linear-gradient(87.48deg, #353661 4.21%, #C0BCAF 66.23%);"
        w="100%"
        p={4}
        pl={12}
        pr={12}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="99"
      >
        <Text>Lucas DEV.</Text>
        <Box
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => homeRef.current.scrollIntoView()}
            mr={4}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => aboutRef.current.scrollIntoView()}
            mr={4}
          >
            Sobre
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => resumeRef.current.scrollIntoView()}
            mr={4}
          >
            Currículo
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => projectsRef.current.scrollIntoView()}
            mr={4}
          >
            Projetos
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => contactRef.current.scrollIntoView()}
            mr={4}
          >
            Contato
          </Text>
        </Box>
      </Box>
      <Box
        bg="linear-gradient(87.48deg, #353661 4.21%, #C0BCAF 66.23%);"
        p={75}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="white"
        ref={homeRef}
        flexDirection={["column", "column", "row", "row"]}
        position="relative"
      >
        <Box>
          <Text fontSize={32}>HELLO</Text>
          <Text fontSize={40}>Eu sou Lucas Santana</Text>
          <Text fontSize={22} w="350px">
            Engenheiro de computação e desenvolvedor FullStack
          </Text>
          <Button mt={4} color="#353661">
            <a href={pdf} target="_blank" rel="noopener noreferrer" download>
              Donwload Currículo
            </a>
          </Button>
        </Box>
        {/* <Image
          position="absolute"
          display={["none", "none", "inherit", "inherit"]}
          src={avatarCortado}
          bottom={0}
          right={0}
          height={350}
        /> */}
      </Box>
      <Box
        px={75}
        pt={20}
        pb={10}
        display="flex"
        alignItems="center"
        ref={aboutRef}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Image
          boxShadow="2xl"
          rounded="md"
          bg="white"
          src={avatarImageTwo}
          width={400}
          borderRadius={10}
          mb={[10, 10, 0, 0]}
        />

        <Box ml={10} width="100%">
          <Heading>Sobre</Heading>
          <Text fontSize={16}>
            Eu sou um FullStack Developer, formado em engenharia da computação
            pela UNIFEI (Universidade Federal de Itajubá). <br></br>
            <br></br> Tenho 3 anos de experiência como desenvolvedor e
            trabalhando com as seguinte stack: <br></br> React JS | Node JS |
            Typescript | JavaScript | AWS | Google Cloud | Firebase | MongoDB |
            Redis | RestAPI | GraphQl <br></br>
            <br></br>
            Procuro sempre me especializar e poder enfrentar novos desafios na
            área de tecnologia e engenharia que é a minha paixão.
          </Text>
        </Box>
      </Box>
      <Box
        px={75}
        pt={20}
        pb={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        ref={resumeRef}
        position="relative"
      >
        <Image
          position="absolute"
          src={triangle}
          top={0}
          left={-400}
          zIndex={-1}
        />
        <Heading>Currículo</Heading>
        <Card
          date="01/2021 - Presente"
          title="Learnistic"
          text={[
            "Sou responsável pelo desenvolvimento e manutenção dos softwares que tem como foco o marketing digital. A rede social SocialLair, a plataforma de e-mail marketing BerserkerMail e a plataforma de cursos online Learnistic.",
            "Atuando em todos os projetos como front end & back end",
            "ReactJS | NodeJS | MongoDB | Firebase | GraphQL | AWS | Google Cloud | Rest API | Redis",
          ]}
        />

        <Card
          date="01/2020 - 11/2020"
          title="Teepad"
          text={[
            "Desenvolvedor full stack trabalhando em diferentes projetos como projetos de irrigação agrícola (Irricontrol), plataforma de cursos online (Cresça Mais) e dashboard para laboratório clínico (LikeWater).",
            "ReactJS | NodeJS | SQL | Google Cloud | Rest API | Sequelize | TypeORM",
          ]}
        />
        <Card
          date="2018 - 2021"
          title="Programa de Educação Tutorial em Tecnologia para Eletrônica e Computação - PETTEC"
          text={[
            "Participei do PET na área de computação que é composto por membro de engenharia e computação, promovendo eventos sobre aprendizado de algoritmos, programação embarcada e em ferramentas de engenharia.",
            "Aplicativo conectado com ESP32 para avisar quando alguém tocar a campainha e auxiliar pessoas com deficiência auditiva",
            "Python tutorial to beginners in programming language.",
          ]}
        />
        <Card
          date="2019 - 2020"
          title="Krakens AUV's"
          text={[
            "Atuei como engenheiro de software na equipe de submarinos AUV; que tem como objetivo de participar do campeonato na Califórnia.",
            "Na minha área temos o domínio de inteligência artificial utilizando Python, ferramentas de Deep Learning e Machine Learning.",
          ]}
        />
        <Card
          date="03/2020 - 07/2020"
          title="Thales"
          text={[
            "Participei de um projeto da universidade quem envolve a solução de um problema junto com uma empresa renomada. Criamos um sistema de navegação indoor, contendo um aplicativo para obter a informação do usuário no meio de um espaço fechado",
            "Desenvolvimento ReactJS, Android, IOS, sensores do smartphone e beacons",
          ]}
        />

        <Heading ref={projectsRef}>PROJETOS</Heading>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={2}
        >
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#353661"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "SocialLair",
                images: [sl1, sl2, sl3],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">SocialLair</Center>
          </Box>
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#C0BCAF"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "BerserkerMail",
                images: [bm1, bm2, bm3],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">BerserkerMail</Center>
          </Box>
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#353661"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Learnistic",
                images: [ln3, ln1, ln2],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Learnistic</Center>
          </Box>
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#C0BCAF"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Irricontrol",
                images: [Map, LoginIrri, FarmMap, PivotEdit],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Irricontrol</Center>
          </Box>
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#353661"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Cresçamais",
                images: [PanelCr, LoginCr, ClassCr, CertificateCr],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Cresçamais</Center>
          </Box>
          <Box
            cursor="pointer"
            // whileHover={{
            //   scale: 1.2,
            //   transition: { duration: 0.5 },
            // }}
            boxShadow="2xl"
            rounded="md"
            bg="#C0BCAF"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Like water - Twilio",
                images: [LikeOne, LikeTwo],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Like water</Center>
          </Box>

          {/* </HStack> */}
        </Grid>
        <ProjectModal
          title={modal.title}
          images={modal.images}
          mobile={modal.mobile}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
      <Box
        bg="linear-gradient(87.48deg, #353661 4.21%, #C0BCAF 66.23%)"
        py={10}
        px={75}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        color="white"
        ref={contactRef}
      >
        <Box>
          <Text fontSize={16}>
            Vamos fazer algo novo, diferente e mais significativo? Mande um oi!
          </Text>
          <Text fontSize={16}>+55 (13) 99141-1406 </Text>
          <Text fontSize={16}>santanalc.santos@gmail.com</Text>
          <Text fontSize={16}>Mogi das Cruzes, São Paulo</Text>
          <Text mt={4} fontSize={24}>
            Minhas redes
          </Text>
          <Flex direction={["column", "column", "row", "row"]}>
            <Button
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
              colorScheme="facebook"
              leftIcon={<FaGithub />}
              onClick={() => openInNewTab("https://github.com/santanalc")}
            >
              Github
            </Button>
            <Button
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
              colorScheme="facebook"
              leftIcon={<FaLinkedinIn />}
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/lucas-santos-8624b7142/"
                )
              }
            >
              Linkedin
            </Button>
            <Button
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
              colorScheme="facebook"
              leftIcon={<FaInstagram />}
              onClick={() =>
                openInNewTab("https://www.instagram.com/lucasantanas_/")
              }
            >
              Instagram
            </Button>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
