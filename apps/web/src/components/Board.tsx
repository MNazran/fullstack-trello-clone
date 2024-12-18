'use client'

import { useState } from 'react'
import Column from './Column'
import NewColumnForm from './forms/NewColumnForm'

const defaultColumns = [
  { id: 'col1', name: 'To Do', index: 0 },
  { id: 'col2', name: 'In Progress', index: 1 },
  { id: 'col3', name: 'Done', index: 2 },
]

export type CardType = {
  id: string | number
  name: string
  index: number
  columnId: string
}

const defaultCards = [
  { id: 'asdf', name: 'task 1', index: 0, columnId: 'col1' },
  { id: 'cdns', name: 'task 2', index: 1, columnId: 'col2' },
  { id: 'tcsg', name: 'task 3', index: 2, columnId: 'col3' },
  { id: 'nfdc', name: 'task 4', index: 0, columnId: 'col1' },
]

export default function Board() {
  const [cards, setCards] = useState(defaultCards)
  const [columns, setColumns] = useState(defaultColumns)

  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          {...column}
          setCards={setCards}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((c) => c.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  )
}
