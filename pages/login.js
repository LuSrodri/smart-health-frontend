import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>Smart Health</title>
        <meta name="description" content="Smart Health -  Plataforma Web para Armazenamento, Acompanhamento e Compartilhamento Seguro de Resultados de Exames e Informações de Saúde." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1>Olá, insira e-mail e senha</h1>
        <form className={styles.signup}>
          <label>E-mail<input type={'email'}></input></label>
          <label>Senha<input type={'password'}></input></label>
        </form>
        <Link className='button' href="/dashboard" >Entrar</Link>
        <Link className='button' href="/" >Voltar</Link>
      </main>
    </>
  )
}
