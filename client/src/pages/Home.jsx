import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useValidate from '../hooks/useValidate'

export default function Home () {
  useValidate({ path: '' })
  const navigate = useNavigate()
  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >

      <Container maxW='2xl'>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow='lg'
          p={8}
        >
          <Stack
            as={Box}
            textAlign='center'
            spacing={4}
            py={3}
          >
            <Heading
              fontWeight={800}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight='90%'
              color='gray.600'
            >
              Task Management
            </Heading>
            <Text color='gray.500'>
              Create your own tasks an keep going
            </Text>
            <Stack
              direction='row'
              spacing={3}
              align='center'
              alignSelf='center'
              position='relative'
            >
              <Button
                colorScheme='blue'
                bg='blue.400'
                rounded='full'
                px={6}
                _hover={{
                  bg: 'blue.600'
                }}
                onClick={() => navigate('/login')}
              >
                SignIn
              </Button>
              <Button variant='outline' rounded='full' px={6} colorScheme='blue' onClick={() => navigate('/register')}>
                SignUp
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Flex>
  )
}
