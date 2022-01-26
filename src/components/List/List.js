function List({ list }) {
  return (
    <ul>
      {list.map(({ name, age }) => {
        return (
          <li>
            {name} - {age}
          </li>
        )
      })}
    </ul>
  )
}

export default List
