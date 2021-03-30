import React from 'react'
import NotFound from '../components/NotFound'

const Page404 = ({ t }) => {
  return (
    <>
      <NotFound t={t('notFound', { returnObjects: true })} />
    </>
  )
}

export default Page404
