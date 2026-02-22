import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p><strong>1. UI/UX vs. Logic?</strong></p>
        <p>
          While my creative background in 3D modeling gives me a strong appreciation 
          for aesthetics, I find the logic and infrastructure side of development 
          to be the most rewarding. I am fascinated by the challenge of "problem 
          solving" where I can design how data flows through a system or build a 
          secure authentication flow that works flawlessly. I believe that while 
          the layout is what a user first sees, the underlying logic is the engine 
          that makes a website truly powerful and reliable.
        </p>

        <p><strong>2. Technologies I am eager to learn</strong></p>
        <p>
          I am currently focused on mastering Next.js to develop fast, server-rendered 
          applications that offer a great user experience. Beyond that, I am eager 
          to dive into AWS cloud services to understand how to host and scale 
          professional projects globally. I am also looking for ways to bridge my 
          interest in 3D animation with web technologies, perhaps by using 3D 
          libraries to create immersive digital experiences within a standard 
          browser.
        </p>

        <p><strong>3. A feature I’ve always wondered about</strong></p>
        <p>
          I have always been curious about real-time collaboration features like 
          those found in shared editors where multiple people can interact with 
          the same data at once. I want to understand the mechanics of WebSockets 
          and low-latency data streaming to build features that update instantly 
          across different screens. Seeing data stay synchronized across the globe 
          feels like magic, and I want to master the technology that makes it 
          possible.
        </p>

        <p className={utilStyles.lightText} style={{ marginTop: '3rem' }}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}