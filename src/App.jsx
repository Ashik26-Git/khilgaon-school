
import './App.css'
import Achievement from './Components/Achievement/Achievement'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import Notice from './Components/Notice/Notice'
import Result from './Components/Result/Result'
import EventLink from './Components/UpcomingEvent/EventLink'

function App() {

  return (
    <>

      <div className='App'>
        <Header></Header>
        <MainSection></MainSection>
        <Notice></Notice>
        <EventLink></EventLink>
        <Result></Result>
        <Achievement></Achievement>
      </div>

    </>
  )
}

export default App
