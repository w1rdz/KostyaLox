import Calendar from "./../../img/calendar-2.svg";
import Map from "./../../img/map.svg"
import HeaderImg from "./../../img/header-img.jpg";
import Zoom from "./../../img/zoom.svg"

import Img01 from "./../../img/01.jpg";
import Img02 from "./../../img/02.jpg";
import Img03 from "./../../img/03.jpg";
import Img04 from "./../../img/04.jpg";
import Img05 from "./../../img/05.jpg";
import Img06 from "./../../img/06.jpg";

import Star from "./../../img/star.svg"

import "./../media/home.css"
const Home = () => {
    return ( 
        <section className=" mt-28 px-14 homeCon">
            <div className="flex justify-between  pb-20 homeCon2">
                <div className="">
                    <h1 className=" font-bold text-6xl  max-w-xl  pb-8 homeZag">
                    Откройте для себя свое любимое место
                    </h1>

                    <p className=" max-w-lg text-lg font-medium parag  pb-10 pHome ">
                        <span className="  block">Ваше путешествие начинается тут с наших  </span>
                        подобранных впечатлений. Откройте новые горизонты,
                        создайте незабвенные воспоминания, следуя нашим
                        профессиональным маршрутам.
                    </p>
                        
                    
                        <div className="flex py-0.5 px-6 border max-w-xl rounded-md items-center  justify-between homeForm">
                            <div className="flex items-start  py-4">
                                <img src={Map} alt="" className="px"/>
                                <div className="">
                                    <h3 className="text-base font-medium">Локации</h3>
                                    <p className="">Бали,Индонезия</p>
                                </div>
                            </div>

                            <div className=" h-4  w-px bg-black pe-0.5"></div>

                            <div className="flex items-start py-4">
                                <img src={Calendar} alt="" className="px"/>
                                <div className="">
                                    <h3 className="text-base font-medium">Локации</h3>
                                    <p className="">Бали,Индонезия</p>
                                </div>
                            </div>
                            
                        <div className="">
                            <img src={Zoom} alt="" />
                        </div>
                            
                        </div>
                </div>
           <div className="">
           <img src={HeaderImg} alt="" className=""/>
           </div>
            </div>
            <section className="pb-32">
                <div className="pb-16">
                    <h1 className="text-4xl pb-4 homeZag2">
                    Популярные направления
                    </h1>
                    <p className=" text-lg max-w-md homeP2">Посмотрите наши популярные направления,
                        которые выбирают наши клиенты</p>
                </div>
                <div className="  relative grid grid-cols-3  gap-10  px-10 homePages">
                    <div className="mx-auto  rounded-lg homeImg ">
                        <img src={Img01} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Венеция, Италия</h3>
                            <p className="flex items-center"><img src={Star} alt="" className="pe-1"/>(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>900</p>
                    </div>
                    
                    <div className="mx-auto  rounded-lg homeImg ">
                        <img src={Img02} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Бали, Индонезия</h3>
                            <p className="flex items-center"><img src={Star} alt="" className="pe-1"/>(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>480</p>
                            
                    </div>

                    <div className="mx-auto  rounded-lg homeImg ">
                        <img src={Img03} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Париж, Франция</h3>
                            <p className="flex items-center"><img src={Star} alt="" className="pe-1"/>(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>1100</p>
                            
                    </div>

                    <div className=" mx-auto rounded-lg homeImg ">
                        <img src={Img04} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Нью-Йорк, США</h3>
                            <p className="flex items-center"><img src={Star} alt="" className="pe-1"/>(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>1800</p>
                            
                    </div>

                    <div className=" mx-auto  rounded-lg homeImg ">
                        <img src={Img05} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Дубай, ОАЭ</h3>
                            <p className="flex items-center"><img src={Star} alt=""className="pe-1" />(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>900</p>
                                                                   
                    </div>

                    <div className="mx-auto  rounded-lg homeImg ">
                        <img src={Img06} alt="" className="pb-4"/>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Бангкок, Тайланд</h3>
                            <p className="flex items-center"><img src={Star} alt="" className="pe-1"/>(4.5)</p>
                        </div>
                        <p>Начинается от <span className=" text-teal-500">$<span/></span>440</p>
                                            
                    </div>
                </div>
            </section>
        </section>


        
     );
}
 
export default Home;