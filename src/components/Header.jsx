import Menu from "./../img/menu.svg"
import "./../components/media/header.css"


const Header = () => {
    return ( 
        <header className="px-14 pt-5 pb-0.5 headerCon ">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-cyan-500">Travel.ru</div>
                
               <img src={Menu} alt="" className="hidden menu"/>
            <div className="flex gap-8 dNone">
               <nav>
                    <ul className=" flex gap-x-8 ">
                        <li><a href="#!" className="text-lg text-cyan-500">Дом</a></li>
                        <li><a href="#!" className="text-lg ">О нас</a></li>
                        <li><a href="#!" className="text-lg ">Услуги</a></li>
                        <li><a href="#!" className="text-lg ">Вопросы</a></li>
                        <li><a href="#!" className="text-lg ">Сообщество</a></li>
                    </ul>
                </nav>
                    <ul className="flex gap-x-2">
                        <li><a href="#!" className="font-medium px-4 py-2 border rounded-xl">Login</a></li>
                        <li><a href="#!" className="font-medium px-4 py-2  rounded-xl bg-black  text-white">Sing Up</a></li>
                    </ul>
                    </div>
            </div>
        </header>
     );
}
 
export default Header;