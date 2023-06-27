import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useValidate from '../hooks/useValidate'
import useRegister from '../hooks/useRegister'
import AlertAuth from '../components/AlertAuth'
import AuthInputs from '../components/AuthInputs'

function SuccessRegisterAlert () {
  return (
    <Alert status='success'>
      <AlertIcon />
      User has been created successfully!
    </Alert>
  )
}

export default function SignUp () {
  useValidate({ path: 'register' })
  const { registerUser, error, isLoading, success } = useRegister()
  const navigate = useNavigate()

  const [register, setRegister] = useState({
    username: '',
    password: ''
  })

  const handleUserInput = (e) => {
    const username = e.target.value
    setRegister(prevState => ({
      ...prevState,
      username
    }))
  }
  const handlePasswordInput = (e) => {
    const password = e.target.value
    setRegister(prevState => ({
      ...prevState,
      password
    }))
  }

  return (
    <>
      <Flex
        minH='100vh'
        align='center'
        justify='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
          <Stack align='center'>
            <Heading fontSize='4xl' textAlign='center'>
              Register
            </Heading>
          </Stack>
          <Box
            rounded='lg'
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}
            w='25vw'
          >
            <Stack spacing={4}>
              {success && <SuccessRegisterAlert />}
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
                  onClick={() => registerUser(register)}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align='center'>
                  Already a user? <Link onClick={() => navigate('/login')} color='blue.400'>Login</Link>
                </Text>
                <Link align='center' onClick={() => navigate('/')} color='blue.400'>Home</Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>

  )
}
