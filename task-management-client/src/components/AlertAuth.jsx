import {
  AlertIcon,
  Alert,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

export default function AlertAuth ({ error }) {
  return (
    <Alert status='error'>
      <AlertIcon />
      <UnorderedList>
        {error.map((error) => {
          return <ListItem key={error}>{error}</ListItem>
        })}
      </UnorderedList>
    </Alert>
  )
}
