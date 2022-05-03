import type { GetServerSideProps, NextPage } from 'next'

import type { Bag } from '@/core/bag/types'

import Head from 'next/head'

import BagDetail from '@/components/bag/BagDetail'
import bagService from '@/core/bag/services'

// TODO: Move to separated file
type Props = {
  bag: Bag
}

const BagPage: NextPage<Props> = ({ bag }) => {
  return (
    <main className="page" >
      <Head>
        <title>{`${bag.name}'s bag`}</title>
        <meta name="description" content={`${bag.name}'s bag`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BagDetail bag={bag} />
    </main >
  )
}

// TODO: Move to separated file
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const bag = await bagService.retrieve(params?.uuid as string)
  return { props: { bag } }
}

export default BagPage
