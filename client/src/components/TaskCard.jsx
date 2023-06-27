import {
  Card,
  Button,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  HStack,
  useDisclosure
} from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import TaskModal from './TaskModal'
const TaskCard = ({ task }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { title, description, status } = task
  return (
    <>
      <TaskModal task={task} isOpen={isOpen} onClose={onClose} />
      <Card w='sm' h='fit-content' shadow='lg'>
        <CardBody>
          <Stack>
            <Heading size='lg' textAlign='center'>{title}</Heading>
            <Text
              fontWeight='bold'
              color={
            status === 'DONE' ? 'red' : status === 'IN_PROGRESS' ? 'orange' : 'green'
            }
              align='center'
            >
              {status === 'IN_PROGRESS' ? 'IN PROGRESS' : status}
            </Text>
            <Divider />
            <Text>
              {description}
            </Text>
            <Divider />
            <CardFooter justify='center'>
              <HStack spacing='5'>
                <Button
                  bgColor='green.200'
                  leftIcon={<GrUpdate />}
                  onClick={onOpen}
                >
                  Update
                </Button>
                <Button
                  bgColor='red.200'
                  leftIcon={<BsTrash />}
                >
                  Delete
                </Button>
              </HStack>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>
    </>

  )
}

export default TaskCard
