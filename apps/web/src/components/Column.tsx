interface ColumnProps {
  name: string
}

export default function Column({ name }: ColumnProps) {
  return <div className="w-48 bg-white shadow-sm rounded-md p-2">{name}</div>
}
