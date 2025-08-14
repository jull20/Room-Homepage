import Gallery from './components/Gallery'
import Header from './components/Header'
import './css/App.css'

export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Gallery />
        <div className='main__container'>
          <picture className='imgDark'>
            <source srcSet='image-about-dark.jpg' media='(max-width:450px)'/>
            <source srcSet='image-about-dark.jpg' media='(min-width:1024px) and (orientation: landscape)'/>
            <img src="image-about-dark-lg.png" alt="" />
          </picture>

          <div className='main__text-block'>
            <h2 className='main__title'>ABOUT OUR FURNITURE</h2>
            <p className='main__description'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. </p>
          </div>

          <picture className='imgLight'>
            <source srcSet='image-about-light.jpg' media='(max-width:450px)'/>
            <source srcSet='image-about-light.jpg' media='(min-width:1024px) and (orientation: landscape)'/>
            <img src="image-about-light-lg.png" alt="" />
          </picture>
        </div>
      </main>
    </>
  )
}



