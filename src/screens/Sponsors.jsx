import React from 'react'

const Sponsors = () => {
  return (
    <div id="sponsors" className="text-6xl text-white h-[100vh] mb-10 bg-[url('src\assets\sponsors\bg-img-sponsors.png')] bg-cover bg-center ">

        <div className="flex flex-row justify-center space-x-3">
          <span className="font-monoton text-[40px] md:text-[75px] font-normal  md:leading-[140px] leading-[100px] text-center uppercase">OUR</span>
          <span>  </span>
          <span className="font-monoton text-[40px] md:text-[75px] font-normal md:leading-[140px] leading-[100px] text-center uppercase">Sponsors</span>
        </div>


      <div className="flex flex-col items-center justify-center mb-10  ">
        <div className="font-montserrat text-[28px] font-extrabold text-center capitalize mb-4">
          title sponsor
        </div>

        <img src="src\assets\sponsors\main-sponsor.png" alt="Sponsor" className="w-[180px] h-[180px] " />

      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="font-montserrat text-[28px] font-extrabold text-center capitalize">
          Co sponsor
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-32 space-y-5">
        <div className="flex flex-row space-x-8 md:space-x-8">
          <img src="src\assets\sponsors\co-sponsor.png" alt="Sponsor" className="w-[180px] h-[180px] " />
          <img src="src\assets\sponsors\co-sponsor.png" alt="Sponsor" className="w-[180px] h-[180px] " />
        </div>
        <div className="flex flex-row space-x-8">
          <img src="src\assets\sponsors\co-sponsor.png" alt="Sponsor" className="w-[180px] h-[180px] " />
          <img src="src\assets\sponsors\co-sponsor.png" alt="Sponsor" className="w-[180px] h-[180px] " />
        </div>

      </div>

    </div>

  )
}

export default Sponsors