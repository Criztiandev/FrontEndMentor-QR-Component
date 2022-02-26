import './App.css';
import QrImg from "./Asset/Img/image-qr-code.png"
function App() {

  return (
    <div className="App bg-main h-screen flex justify-center items-center">

       <div className="bg-white max-w-1/2 p-4 rounded-xl shadow-xl">
        <img src={QrImg} alt="qr-code-img" className='rounded-lg mb-4'/>

        <div className="container-details text-center">
          <h1 className='text-xl text-title font-bold mb-4 p-2'>Improve your front-end skills by building projects</h1>
          <p className='text-paragraph'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
       </div>

    </div>
   
  );
}

export default App;
