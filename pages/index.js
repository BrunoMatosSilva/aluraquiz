import styled from 'styled-components'
import db from '../db.json';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';


const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - NBA</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
        as={motion.section}
        transition={{delay: 0, duration: 0.8 }}
        variants={{
          show: { opacity: 1, x: '0' },
          hidden: { opacity: 0, x: '-100%' },
        }}
        initial="hidden"
        animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
            <Input 
              name="nomeDoUsuario"
              onChange={(infosDoEvento) => {
              setName(infosDoEvento.target.value);
            }}
            placeholder="Digite seu nome!"
            value={name} 
            />
            <Button type="submit" disabled={name.length === 0}>
              {`Jogar ${name}`}
            </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
