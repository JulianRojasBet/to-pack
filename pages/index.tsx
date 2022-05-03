import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import BagList from '@/components/bag/BagList'

import type { Bag } from '@/core/bag/types'
import bagService from '@/core/bag/services'

// Move to separated file
type Props = {
  bags: Bag[]
}

const Home: NextPage<Props> = ({ bags }) => {
  return (
    <main className="page" >
      <Head>
        <title>To Pack</title>
        <meta name="description" content="Bags list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BagList bags={bags} />
    </main >
  )
}

// TODO: Move to separated file
export const getServerSideProps: GetServerSideProps = async () => {
  const bags = await bagService.list()
  return { props: { bags } }
}

export default Home
