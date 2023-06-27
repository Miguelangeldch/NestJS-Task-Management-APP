import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export default function useFilter () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterTasks = (tasks) => {
    return tasks.filter((task) => {
      const title = task.title.toLowerCase()
      const description = task.description.toLowerCase()
      return (
        (filters.search === ''
          ? filters.search === ''
          : title.includes(filters.search) ||
            description.includes(filters.search)) &&
        (filters.status === 'all' || task.status === filters.status)
      )
    })
  }

  return { filterTasks, filters, setFilters }
}
