import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
export default function AuthInputs ({ handleUserInput, handlePasswordInput }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <FormControl id='username' isRequired>
        <FormLabel>Username</FormLabel>
        <Input type='string' onChange={handleUserInput} />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={showPassword ? 'text' : 'password'} onChange={handlePasswordInput} />
          <InputRightElement h='full'>
            <Button
              variant='ghost'
              onClick={() =>
                setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}
