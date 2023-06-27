import { Box, Select, HStack, Input, Button, useDisclosure } from '@chakra-ui/react'
import useFilter from '../hooks/useFilter'
import TaskModal from './TaskModal'
import { STATUS } from '../constants/constants'
export default function Filter () {
  const { setFilters } = useFilter()
  const { isOpen, onClose, onOpen } = useDisclosure()

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase()
    setFilters(prevState => (
      {
        ...prevState,
        search
      }
    ))
  }

  const handleStatus = (e) => {
    setFilters(prevState => (
      {
        ...prevState,
        status: e.target.value
      }
    ))
  }
  return (
    <>
      <TaskModal isOpen={isOpen} onClose={onClose} />
      <Box my={5}>
        <HStack justify='center'>
          <Input maxW='sm' placeholder='Search by title or description' onChange={handleSearch} />
          <Select maxW='fit-content' variant='outline' onChange={handleStatus}>
            <option key='all' value='all' defaultValue>
              All Tasks
            </option>
            {
                STATUS.map((elm) => {
                  return (
                    <option key={elm.value} value={elm.value}>
                      {elm.name}
                    </option>
                  )
                })
            }
          </Select>
          <Button bgColor='blue.100' onClick={onOpen}> Create task </Button>
        </HStack>
      </Box>
    </>
  )
}
