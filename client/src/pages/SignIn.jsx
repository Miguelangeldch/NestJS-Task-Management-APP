import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import useValidate from '../hooks/useValidate'
import AlertAuth from '../components/AlertAuth'
import AuthInputs from '../components/AuthInputs'

export default function SignIn () {
  useValidate({ path: 'login' })
  const navigate = useNavigate()
  const { authenticateUser, isLoading, error } = useAuth()
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleUserInput = (e) => {
    const username = e.target.value
    setLogin(prevState => ({
      ...prevState,
      username
    }))
  }
  const handlePasswordInput = (e) => {
    const password = e.target.value
    setLogin(prevState => ({
      ...prevState,
      password
    }))
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl'>Login</Heading>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow='lg'
          p={8}
          w='25vw'
        >
          <Stack spacing={4}>
            {error && <AlertAuth error={error} />}
            <AuthInputs handleUserInput={handleUserInput} handlePasswordInput={handlePasswordInput} />
            <Stack spacing={10} pt={2}>
              <Button
                size='lg'
                bg='blue.400'
                color='white'
                _hover={{
                  bg: 'blue.500'
                }}
                isLoading={isLoading}
                onClick={() => authenticateUser(login)}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align='center'>
                Don't have an account? <Link onClick={() => navigate('/register')} color='blue.400'>Register</Link>
              </Text>
              <Link align='center' onClick={() => navigate('/')} color='blue.400'>Home</Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
