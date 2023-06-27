import { Grid, Stack, Spinner } from '@chakra-ui/react'
import TaskCard from '../components/TaskCard'
import Filter from '../components/Filter'
import useFilter from '../hooks/useFilter'
import useTasks from '../hooks/useTasks'
import ErrorCard from '../components/ErrorCard'
export default function Tasks () {
  const { filterTasks } = useFilter()
  const { data, error, isLoading } = useTasks()

  return (

    <Grid margin='auto' maxW='80vw' p={3}>
      <Filter />
      {error && <ErrorCard error={error} />}
      <Stack direction={{ base: 'column', md: 'row' }} flexWrap='wrap' rowGap={5} justify='center'>
        {!isLoading
          ? filterTasks(data).map((task) => {
            return <TaskCard key={task.id} task={task} />
          })
          : <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />}
      </Stack>
    </Grid>
  )
}
//
