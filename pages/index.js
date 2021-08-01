import { Header, Footer } from '../src/components/common'

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    }}>
      <Header />
      <Footer />
    </div>
  )
}
