import { Box } from '@chakra-ui/react'
import Card from './pages/card'
import Header from './pages/header'

function App() {
  return (
    <div>
      <Header />
      <Box mt="-120px">
        <Card />
      </Box>
    </div>
  )
}

export default App
