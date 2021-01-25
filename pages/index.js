import React, { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const [isClicked, setisClicked] = useState(false);
  const quotes = [
    "If you were not capable, the opportunity would have never come your way. You belong Kaoutar",
    "L'avenir appartient à ceux qui se lève tôt Kaoutar",
    "All our dreams can come true, if we have the courage to pursue them Kaoutar.",
    "The secret of getting ahead is getting started Kaoutar",
    "WORK KAOUTAR !!!!",
    "Don't limit yourself Kaoutar.",
    "It’s hard to beat a person who never gives up",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "Do one thing every day that scares you",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."
  ];
  let random = Math.floor(Math.random() * (quotes.length - 0)) + 0;
  const handleChange = (event) => {
    event.preventDefault();
    setisClicked(true);
    setTimeout(() => {
      setisClicked(false)
    }, 5000);
  };

  let DisplayQuote = () => (  
<>
      {
        quotes[random]
      }
  </>
  );
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am your former CCI classmate.</p>
        <p>Just wanna send you a special message Kaoutar.</p>
        <p className="kaoutar">Work Kaoutar !!!</p>
        {/* <p>
          (You wanna document yourself about Java and others ?  - Visit the website{' '}
          <a href="https://www.javatpoint.com/" target="_blank">Javatpoint</a>.)
        </p> */}
        <form onSubmit={handleChange}>
          <input className="btnQuote" type="submit" value="Get a motivation quote Kaoutar"/>
        </form>
        <div className="quote">

        
        
          {
            isClicked == true ? <DisplayQuote/> : <></>
          }
          </div>
        
      </section>
      <style jsx>{`
  .kaoutar {
    color: red;
    font-size: 30px;
  }
  .quote {
    color: #B43447;
    font-size: 30px;
    font-weight: bold;
  }
  .btnQuote {
    width: 500px;
  height: 70px;
    background-color: #F0A911;
  border: none;
  }
  .btnQuote:hover {
    cursor: pointer;
  }
`}</style>
    </Layout>
  )
}