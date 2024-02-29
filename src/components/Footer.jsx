import "./media/footer.css"

const Footer = () => {
    return ( 
        <div className="bg-black">
            <footer className="flex justify-between py-8 px-14 pt-5 footerCon">
                <div className="footerText">
                    <div className="text-2xl font-bold text-cyan-500  mb-4">Travel.ru</div>
                    <p className=" text-gray-50 text-lg font-medium">Любовь к путешествиям прекрасно<br/>
                    сочетается с нашими услугами,<br/>
                     обеспечивая вам комфортное<br/>
                     путешествие.</p>
                </div>
                <div className="flex gap-x-52 footerList1">
                <ul className=" text-green-50 space-y-2 text-lg font-medium">
                    <li><a href="#!">Компания</a></li>
                    <li><a href="#!">О нас</a></li>
                    <li><a href="#!">Блог</a></li>
                    <li><a href="#!">Пакеты</a></li>
                    <li><a href="#!">Клиенты</a></li>
                    <li><a href="#!">Сообщество</a></li>
                </ul>
                <ul className=" text-green-50 space-y-2 text-lg font-medium">
                    <li><a href="#!">Помощь</a></li>
                    <li><a href="#!">Поддержка</a></li>
                    <li><a href="#!">Вопросы</a></li>
                    <li><a href="#!">Политика</a></li>
                </ul>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;