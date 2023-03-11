import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Smart Health</title>
        <meta name="description" content="Smart Health -  Plataforma Web para Armazenamento, Acompanhamento e Compartilhamento Seguro de Resultados de Exames e Informações de Saúde." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1>Insira os seus dados</h1>
        <form className={styles.signup}>
          <label>Nome<input type={'text'}></input></label>
          <label>Idade<input type={'number'}></input></label>
          <label>Usuário<input type={'text'}></input></label>
          <label>E-mail<input type={'email'}></input></label>
          <label>Senha<input type={'password'}></input></label>
        </form>
        <Link className='button' href="/dashboard" >Registrar-se</Link>
        <Link className='button' href="/" >Voltar</Link>
      </main>
    </>
  )
}
