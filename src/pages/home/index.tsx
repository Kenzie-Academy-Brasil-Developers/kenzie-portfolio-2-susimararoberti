// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { HandEffect } from "@/components/HandEffect";

export const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4" css={{ marginLeft: "$2" }}>
                Olá, me chamo {userData.nameUser} <HandEffect />
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Estudo Desenvolvimento{" "}
              <Text as="span" type="heading1" color="brand5">
                Full Stack.
              </Text>{" "}
              <Text as="span" type="heading1" color="brand1"></Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              Seja Bem-vind@! Nesse ambiente, você encontrará as tecnologias que
              já possuo habilidade e também poderá verificar os projetos que já
              desenvolvi!
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Confira meus projetos
              </Button>
              <Button
                as="a"
                type="circle"
                target="_blank"
                href={`https://github.com/${userData.githubUser}`}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <Text as="h2" type="heading4" color="grey4">
              Tecnologias
            </Text>
            <StackCards>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJs"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                alt="Django"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
              />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Projetos desenvolvidos na{" "}
                <Text as="span" color="brand7">
                  Kenzie Academy Brasil
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
