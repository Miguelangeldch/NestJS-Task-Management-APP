import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import useAuth from '../hooks/useAuth'

export default function Navbar () {
  const { logoutUser } = useAuth()
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH='60px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
      >
        <Stack
          flex={{ base: 1, md: 0 }}
          justify='flex-end'
          direction='row'
          spacing={6}
        >
          <Button
            as='a'
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize='sm'
            fontWeight={600}
            color='white'
            bg='blue.400'
            href='#'
            _hover={{
              bg: 'blue.300'
            }}
            onClick={logoutUser}
          >
            Logout
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}
