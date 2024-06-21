import './App.css'
import imgSrc from './assets/img/bg-hd.webp'
import SearchCard from './components/SearchCard'

function App() {

  return (
    <div className=' pt-[20px]'>
      <img src={imgSrc} width={'100%'} height={'100%'} className='absolute h-[100%] w-[100%] object-fill z-[-10] top-0 bottom-0 right-0 left-0' />
      <SearchCard />
    </div>
  )
}

export default App
