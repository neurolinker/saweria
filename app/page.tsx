import Link from "next/link";

export default function Sender() {

    return (
        <>
            <div className = "flex justify-center text-center mb-5 font-comRegular text-lg md:text-3xl">
                Jembatan interaksi dengan penontonmu!
            </div>
            {/* login section */}
            <div className="flex justify-center space-x-10 mb-10">
                <div className = "flex w-full">
                    {/* container */}
                    <Link href={"/login"} className = "flex  items-center justify-center relative bg-[#8BD3DD] rounded-lg px-5 py-2 border border-black text-gray-600 w-full">
                        Login
                        <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] py-2 px-1 w-full flex-grow -z-10">asd</div>
                    </Link>
                </div>
                <div className = "flex w-full">
                    {/* container */}
                    <Link href={"/register"} className = "flex  items-center justify-center relative bg-[#FAAE2B] rounded-lg px-5 py-2 border border-black text-gray-600 w-full">
                        Daftar
                        <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] py-2 px-1 w-full flex-grow -z-10">asd</div>
                    </Link>
                </div>
            </div>
            {/* payment section  */}
            <div className = "flex text-sm mb-14">
                {/* container */}
                <div className = "relative text-sm md:text-md bg-[#D0E2DB] rounded-lg p-3 border border-black text-gray-600 w-full">
                    <div >
                    Saweria membantu kamu mendapatkan dukungan finansial dari penggemar karyamu dengan moda pembayaran di bawah ini:
                    </div>
                    <div className="flex justify-around w-full mt-3 mb-3">
                        <div className = "">
                            <ul>
                                <li>GOPAY</li>
                                <li>DANA</li>
                                <li>OVO</li>
                                <li>LINKAJA</li>
                                <li>QRIS</li>
                            </ul> 
                        </div>
                        <div className = "">
                            <img className = "w-24 object-cover" src = "https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_money.a24d8223.svg&w=1920&q=75"/>
                        </div>
                    </div>
                    <div >
                        Dana dapat dengan mudah dicairkan ke semua rekening bank di Indonesia dan e-wallet (Gopay, OVO, DANA, LinkAja, dan Shopeepay).
                    </div>
                    <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] p-3 w-full flex-grow -z-10"></div>
                </div>
            </div>
            {/* rules section  */}
            <div className = "flex font-comRegular text-sm mb-10 w-full">
                {/* container */}
                <div className = "relative flex justify-center bg-[#D0E2DB] rounded-b-lg rounded-l-lg px-3 py-5 border border-black text-gray-600 w-full">
                    <div className = "flex text-sm nd:text-md  px-3">
                        <ol className = "ml-3">
                            <li>Daftarkan dirimu</li>
                            <li>Verifikasi akun kamu</li>
                            <li>Atur overlay yang ingin digunakan</li>
                            <li>Jangan lupa pasang QR code atau link saweriamu</li>
                            <li>Sapa dan terima dukungan dari penggemarmu!</li>
                        </ol> 
                    </div>
                    <div className = " bg-[#FE98A3] absolute -top-7 -z-10 px-2 py-1 rounded-t-md border border-black right-0 -mr-[0.2px]">
                        cara memulai
                    </div>
                    <div className ="absolute w-10 rounded-lg -top-5 -right-2 bg-[#222222] p-3 h-10 flex-grow -z-20"></div>
                    <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] p-3 w-full flex-grow -z-10"></div>
                </div>
            </div>
            {/* siap daftar section  */}
            <div className = "flex justify-center items-center flex-col mb-14">
                <div className = "flex pl-14 w-full  justify-center h-36 ">
                    <img className = "object-scale-down" src= "https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapy_happy.603c7293.svg&w=384&q=75"/>
                </div>
                <div className = "font-comRegular justify-center text-center flex  text-xl">siap bergabung bersama saweria?</div>
                <div className = "flex w-24">
                    {/* container */}
                    <Link href={"/register"}  className = "flex  items-center justify-center relative bg-[#FAAE2B] rounded-lg py-2 px-1 border border-black text-gray-600 w-full">
                        Daftar
                        <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] p-3 w-full flex-grow -z-10">asd</div>
                    </Link>
                </div>
            </div>
            {/* pricing section */}
            <div className = "flex font-comRegular text-sm mb-10">
                {/* container */}
                <div className = "relative flex justify-center bg-[#D0E2DB] rounded-b-lg rounded-l-lg px-3 py-5 border border-black text-gray-600 w-full">
                    <div className = "flex flex-row">
                        <div className="flex flex-col w-2/3 px-5">
                            <div className = "mb-3">
                                Setiap transaksi masuk akan terkena biaya sebesar 5% (6% untuk OVO) dengan batas minimum 150 rupiah
                            </div>
                            <div className = "">
                                Pencairan dana menuju rekening bank/e-wallet streamer akan terkena biaya sebesar IDR 5.000
                            </div>
                        </div>
                        <div className = "flex  justify-center h-auto w-1/3">
                            <img className = "object-scale-down" src= "https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraccoon_happy.e82cc2b2.svg&w=384&q=75"/>
                        </div>
                    </div>
                    <div className = " bg-[#8BD3DD] absolute -top-7 -z-10 px-2 py-1 rounded-t-md border border-black right-0 -mr-[0.2px]">
                        pricing
                    </div>
                    <div className ="absolute w-10 rounded-lg -top-5 -right-2 bg-[#222222] p-3 h-10 flex-grow -z-20"></div>
                    <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] p-3 w-full flex-grow -z-10"></div>
                </div>
            </div>

            {/* bingung section */}
            <div className = "group flex font-comRegular text-sm mb-10 w-full">
                {/* container */}
                <div className = "relative group-hover:top-1 flex justify-center bg-[#FFBDC4] rounded-b-lg rounded-t-lg px-1 py-4 border border-black text-black w-full">
                    <div className = "flex flex-row items-center justify-center w-full">
                        
                        <div className = "flex h-auto w-1/6 ">
                            <img className = "object-scale-down" src= "https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_sad.23bb618d.svg&w=256&q=75"/>
                        </div>
                        <div className="flex text-md sm:text-xl flex-col md:text-2xl items-center text-center  justify-center px-2 w-4/6">
                            <div className = "flex mb-3">
                                bingung ?
                            </div>
                            <div className = "flex">
                                ada pertanyaan ?
                            </div>
                            <div className = "flex ">
                                cek FAQ kami dulu
                            </div>
                        </div> 
                    </div>
                    <div className ="absolute h-full rounded-lg top-2 -right-2 group-hover:top-1 group-hover:-right-1 bg-[#222222] p-3 w-full flex-grow -z-10"></div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row  mb-10 w-full sm:space-x-4">
                <div className = "flex w-full md:w-1/2">
                    {/* container */}
                    <div className = "flex mb-4 sm:mb-0 items-center justify-center relative bg-[#FAAE2B] rounded-lg py-1.5 px-1 border border-black text-gray-600 w-full">
                        Tutorial
                        <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] w-full flex-grow -z-10">asd</div>
                    </div>
                </div>
                <div className = "flex w-full md:w-1/2">
                    {/* container */}
                    <Link href={'/terms'} className = "flex  items-center justify-center relative bg-[#8BD3DD] rounded-lg py-1.5 px-1 border border-black text-gray-600 w-full">
                        Syarat dan Ketentuan
                        <div className ="absolute h-full rounded-lg top-2 -right-2 bg-[#222222] w-full flex-grow -z-10">asd</div>
                    </Link>
                </div>
            </div>
            
        </>
      )
}