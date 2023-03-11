import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Smart Health</title>
        <meta name="description" content="Smart Health -  Plataforma Web para Armazenamento, Acompanhamento e Compartilhamento Seguro de Resultados de Exames e Informações de Saúde." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1>Olá {"usuário"}, seja muito bem-vindo ao Smart Health</h1>
        <p>
          Smart Health -  Plataforma Web para Armazenamento, Acompanhamento e Compartilhamento Seguro de Resultados de Exames e Informações de Saúde.
        </p>
        <Link className='button exit' href={"/"} >Sair</Link>
      </main>
    </>
  )
}
