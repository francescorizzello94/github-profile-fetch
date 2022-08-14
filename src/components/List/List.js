import './List.css';

function List({ items }) {
  return (
    <ul className='general-list-container'>
      {items.map((item) => (
        <li className='general-list-item' key={item.field}>
          <span>{item.field}:</span>
          {item.value}
        </li>
      ))}
    </ul>
  )
}

export default List;