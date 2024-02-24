import { useState } from "react";

function Home() {
  const [gambar, setGambar] = useState("💻");

  return (
    <div className="bg-gradient-to-br from-indigo-800 via-purple-900 to-violet-950 pb-[120px]">
      {/* header start */}
      <div className="w-full flex justify-between">
        <div className="flex  ml-40 ">
          <a href="#" className="font-bold text-[40px] mr-3">
            👾
          </a>
          <ul className="flex gap-4 m-5">
            <li>
              <a href="/" className="text-white text-[17px]">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-white text-[17px]">
                Studio
              </a>
            </li>
            <li>
              <a href="/" className="text-white text-[17px]">
                Works
              </a>
            </li>
            <li>
              <a href="/" className="text-white text-[17px]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex  mr-[200px] ">
          <p className="text-[30px] text-white mt-2 cursor-pointer mr-4">🔍</p>
          <button className="h-[40px] w-[110px] rounded-md bg-pink-600 text-white mt-3">
            Hire Now
          </button>
        </div>
      </div>
      {/* header end */}

      <br />

      {/* hero top start */}
      <div className="flex justify-between">
        <div className="mt-[120px] ml-[220px]">
          <h1 className="text-[70px] text-white font-semibold mb-4">
            Think. Make.
            <br /> Solve.
          </h1>
          <div className="flex mb-4">
            <div className="h-[4px] w-[20px] rounded-full bg-gray-500 mt-[15px] mr-2"></div>
            <p className="text-[20px] font-semibold text-pink-600">
              What we Do
            </p>
          </div>
          <p className="text-white text-lg mb-4">
            we enjoy creating delightful, human-centered digital
            <br /> experiences.
          </p>
          <button className="text-white h-[40px] w-[100px] rounded-lg bg-pink-600">
            Learn More
          </button>
        </div>
        <div className="mt-[50px] mr-[200px]">
          <p className="text-[350px]">🎶</p>
        </div>
      </div>
      {/* hero top end */}

      {/* hero center start */}
      <div className="flex justify-between mt-[100px]">
        <div className="mt-[50px] ml-[150px]">
          <p className="text-[350px]">🔮</p>
        </div>
        <div className="mt-[120px] mr-[180px]">
          <h1 className="text-[70px] text-white font-semibold mb-4">
            Think outside the
            <br /> square space
          </h1>
          <div className="flex mb-4">
            <div className="h-[4px] w-[20px] rounded-full bg-gray-500 mt-[15px] mr-2"></div>
            <p className="text-[20px] font-semibold text-pink-600">
              Who we Are
            </p>
          </div>
          <p className="text-white text-lg mb-4">
            a creative group of designer and developers with a passion for
            <br /> the arts.
          </p>
          <button className="text-white h-[40px] w-[140px] rounded-lg bg-pink-600">
            See our Works
          </button>
        </div>
      </div>
      {/* hero center end */}

      <div className="flex mt-[100px]">
        <div className="mt-[120px] ml-[200px]">
          <h1
            onClick={() => setGambar("💻")}
            className="text-[70px] mb-4 text-pink-400 w-[420px] cursor-pointer hover:text-white font-extrabold"
          >
            Web Design
          </h1>
          <h1
            onClick={() => setGambar("🛠")}
            className="text-[70px] mb-4 text-pink-400 w-[420px] cursor-pointer hover:text-white font-extrabold"
          >
            Development
          </h1>
          <h1
            onClick={() => setGambar("🎥")}
            className="text-[70px] mb-4 text-pink-400 w-[420px] cursor-pointer hover:text-white font-extrabold"
          >
            Illustration
          </h1>
          <h1
            onClick={() => setGambar("💎")}
            className="text-[70px] mb-4 text-pink-400 w-[530px] cursor-pointer hover:text-white font-extrabold"
          >
            Product Design
          </h1>
          <h1
            onClick={() => setGambar("🍪")}
            className="text-[70px] mb-4 text-pink-400 w-[460px] cursor-pointer hover:text-white font-extrabold"
          >
            Social Media
          </h1>
        </div>
        <div className="mt-[170px] ml-[120px]">
          <p className="text-[350px]">{gambar}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
