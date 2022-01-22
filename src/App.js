import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Form from './components/Form/Form'

function App() {
  const students = {
    name: 'Anna',
    age: 31,
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Form />
        <List studentName={students.name} studentAge={students.age} />
      </header>
    </div>
  )
}

export default App
