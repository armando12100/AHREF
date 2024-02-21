// import dad from "./images/dad-casual.jpg"
// import cards from "./images/cards.jpg"
// import hero from "./images/hero.jpg"
// import house1 from "./images/house-1.jpg"
// import house2 from "./images/house-2.jpg"
import poster from "./images/poster.jpeg"

function App() {

  return (
    <>
      <div className="flex justify-between my-2">
        <div>
          <h1 className="pl-4 font-bold">AHREF</h1>
        </div>
        <div className="flex pr-10">
          <p className="mx-1 italic border-solid border-y-2 border-gray hover:cursor-pointer hover:border-black hover:font-bold">Home</p>
          <p className="mx-1 italic border-solid border-y-2 border-gray hover:cursor-pointer hover:border-black hover:font-bold">About Me</p>
          <p className="mx-1 italic border-solid border-y-2 border-gray hover:cursor-pointer hover:border-black hover:font-bold">Facebook</p>
          <p className="mx-1 italic border-solid border-y-2 border-gray hover:cursor-pointer hover:border-black hover:font-bold">Contact</p>
          <p className="mx-1 italic border-solid border-y-2 border-gray hover:cursor-pointer hover:border-black hover:font-bold">Client Reviews</p>
        </div>
      </div>
      {/* <div className="font-bold flex my-12 justify-center">
      <img src={dad} alt="" className="p-1 max-h-72 max-w-36 object-cover"/>
      <img src={house1} alt="" className="p-1 max-h-72 max-w-36 object-contain"/>
      <img src={hero} alt="" className="p-1 max-h-72 max-w-36"/>
      <img src={house2} alt="" className="p-1 max-h-72 max-w-36"/>
      <img src={cards} alt="" className="p-1 max-h-72 max-w-36"/>
    </div> */}
      <div className="relative">
        <img src={poster} alt="" className="h-[500px] w-full"/>
        <div className="absolute top-1/3 mx-6">
          <h1 className="text-white font-bold text-3xl pb-10">American Home Real Estate Funding, Inc.</h1>
          <p className="text-white font-bold text-xl pb-5">Over 30 years of experience</p>
          <p className="text-white font-bold text-xl pb-7">President - Owner - Broker</p>
          <button className="text-white bg-blue-900 border-solid border-2 border-white px-4 py-1 font-bold hover:text-blue-900 hover:cursor pointer hover:border-blue-900 hover:bg-white">
            Request A Quote
          </button>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <h1 className="text-gray-400 text-3xl pb-2">Making Real Estate Dreams A Reality</h1>
      </div>
    </>
  )
}

export default App
