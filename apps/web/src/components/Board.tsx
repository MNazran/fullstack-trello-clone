import Column from './Column'
import NewColumnForm from './forms/NewColumnForm'

const columns = [
  { id: 'adks', name: 'To Do', index: 0 },
  { id: 'dfsc', name: 'In Progress', index: 1 },
  { id: 'ioss', name: 'Done', index: 2 },
]

export default function Board() {
  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column key={column.id} {...column} />
      ))}
      <NewColumnForm />
    </div>
  )
}
