import Link from "next/link";

export default function Sender() {

  return (
      <>
          {/* payment section  */}
          <div className = "flex text-sm mb-14 w-full">
              {/* container */}
              <div className = "relative text-sm md:text-md bg-[#D0E2DB] rounded-lg p-3 border border-black text-gray-600 w-full">
                  <div className="flex flex-col items-center w-full ">
                    <div className = " flex w-40 md:w-56 justify-center">
                        <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchristmas_2022.0dbd7216.png&w=1080&q=75" alt="" className="object-cover" />
                    </div>
                    <div className = "flex justify-center mb-5 font-comRegular text-3xl md:text-5xl">
                        saweria.co
                    </div>
                  </div>
                  <div className = "my-3 text-2xl text-center text-black font-comMedium">Registrasi</div>
                  <div className = " w-full">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="flex items-center mb-1">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-600">
                            Berusia 17 tahun ke atas. <span className = " text-red-600 text-lg pt-2">*</span>
                        </label>
                    </div>
                    <div className="flex items-center mb-1">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-600">
                            Tidak menggunakan saweria untuk jual beli / komersil<span className = " text-red-600 text-lg ml-2 pt-2">*</span>
                        </label>
                    </div>
                    <div className="flex items-center mb-1">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-600">
                            Tidak menyebarkan konten terlarang (pornografi, judi, dll)<span className = " text-red-600 text-lg ml-2 bg-yello-600">*</span>
                        </label>
                    </div>
                    <div className="flex items-center mb-3">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-600">
                            Menyetujui syarat dan ketentuan <span className = " text-red-600 text-lg pt-2">*</span>
                        </label>
                    </div>
                    Melanggar syarat dan ketentuan dapat menyebabkan akun Anda untuk dinonaktifkan (ban) secara sepihak oleh saweria.

                    <div className = "flex h-14 w-full flex-row justify-center items-center">
                        <div className = "flex relative w-full p-2 items-center mr-2 -ml-2">
                          <div className ="flex absolute rounded-lg -top-1 -right-3 bg-[#222222] py-2 w-full flex-grow">asd</div>
                          <Link href={"/"} className = "flex  items-center justify-center absolute bg-[#8BD3DD] rounded-lg px-5 py-2 border border-black text-gray-600 w-full">
                              Daftar
                              
                          </Link>
                        </div>
                      
                    </div>
                  </div>
                  
                  <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] p-3 w-full flex-grow -z-10"></div>
              </div>
          </div>
          
      </>
    )
}