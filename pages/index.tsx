import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  GradientBackgroundCon,
} from '@/components/QuoteGenerator/QuoteGeneratorElement';
import Clouds1 from '@/assets/cloud-and-thunder.png';
import Clouds2 from '@/assets/cloudy-weather.png';
import { useState } from 'react';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Quote generator</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GradientBackgroundCon>
        <BackgroundImage1 src={Clouds1} height='300' />
        <BackgroundImage2 src={Clouds2} height='300' />
        <FooterCon>
          <>Quotes generated by Michael</>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
