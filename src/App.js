import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Form from './components/Form/Form'

const topics = ['math', 'literature', 'art', 'language', 'philosophy']

const students = [
  {
    name: 'Anna',
    age: 31,
  },
  {
    name: 'Otto',
    age: 47,
  },
  {
    name: 'Karma',
    age: 19,
  },
]

// Deconstrunct an Object
// const Anna = {
//   name: 'Anna',
//   age: 31,
// }
// const { name, age } = Anna
// const nama = Anna.name
// const age = Anna.age

function App() {
  const [isListVisible, setIsListVisible] = useState(false)

  const handleClick = (event) => {
    // toggle isListVisible state
    setIsListVisible((prevState) => !prevState)
  }

  const handleChange = ({ target }) => {}

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <Header />
        <Form />
        <button onClick={handleClick}>
          {isListVisible ? 'Hide topics' : 'Show topics'}
        </button>
        {isListVisible && <List list={topics} />}

        <List list={students} />
      </div>
    </div>
  )
}

export default App
