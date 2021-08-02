import { Header, Footer } from '../src/components/common'
import { Button } from '../src/components/common'
import Text from '../src/components/foundations/Text'

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    }}>
      <Header />

      <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text>

        <Button
          variant="primary"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
        >
          Cadastrar
        </Button>
      </div>
      <Footer />
    </div>
  )
}
