import { Data, Footer, Header, Navbar, Tujuan, VisiMisi, LatarBelakang, Ikn, JangkaWaktu } from "./Components"

function App() {

  return (
    <div className="max-container bg-white text-black">
      <Navbar/>
      <Header  />
      <LatarBelakang />
      <Tujuan />
      <Data />
      <Ikn />
      <JangkaWaktu />
      <VisiMisi />
      <Footer/>
    </div>
  )
}

export default App