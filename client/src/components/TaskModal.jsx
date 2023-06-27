import {
  Button,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Select,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea
} from '@chakra-ui/react'
import { STATUS } from '../constants/constants'

const TaskModal = ({ isOpen, onClose, task }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {task ? 'Update task' : 'New task'}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>
              Title
            </FormLabel>

            <Input
              defaultValue={task && task.title}
              placeholder='Title'
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>
              Description
            </FormLabel>

            <Textarea
              defaultValue={task && task.description}
              placeholder='Description'
            />
          </FormControl>

          {task &&
            <FormControl>
              <FormLabel>
                Status
              </FormLabel>
              <Select maxW='fit-content' variant='outline' defaultValue={task.status}>
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
            </FormControl>}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
          >
            {task ? 'Update' : 'Create'}
          </Button>

          <Button onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TaskModal
