import './App.css';
import Logo from './img/logo.svg';
import {Slider} from "./Slider/Slider";
import {Predlogenija} from "./Predlogenija/Predlogenija";
import {Konstructor} from "./Konstructor/Konstructor";
import {Footer} from "./Footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Contacts} from "./Contacts/Contacts";
import {Oprodukcii} from "./Oprodukcii/Oprodukcii";
import {Onas} from "./Onas/Onas";
import {Oplata} from "./Oplata/Oplata";
import {Catalog} from "./Catalog/Catalog";
import {Korzina} from "./Korzina/Korzina";
import {useState,useEffect} from "react";

function App() {

    const[poisk,setPoisk]=useState(false);
    const[kolvo,setKolvo]=useState(0);



  return (
    <div className="App">
      <header className="App-header">
          <Link to="/" className="logo1"><img src={Logo} className="logo" alt="logo"/></Link>
          <nav>
              <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/catalog">Каталог</Link></li>
                  <li><Link to="/oprodukcii">О продукции</Link></li>
                  <li><Link to="/onas">О нас</Link></li>
                  <li><Link to="/oplata">Оплата и доставка</Link></li>
                  <li><Link to="/cont">Контакты</Link></li>
              </ul>
              <div className={"icon"}>
                  <img onClick={()=>{setPoisk(!poisk)}} className={"poisk"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/search.svg" alt="search"/>
                  <Link to="/catalog/lichnyi"><img className={"kabinet"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/account.svg" alt="search"/></Link>
                  <Link to="/catalog/korzina"><img className={"korzina"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/cart.svg" alt="search"/>
                  <div className="dd">
                      <h1>{kolvo}</h1>
                  </div>
                  </Link>
              </div>
          </nav>
      </header>
            <Routes>
                <Route path="/" element={
                                    <div>
                                        <Slider poisk={poisk}/>
                                        <Predlogenija/>
                                        <Konstructor/>
                                    </div>
                }/>
                <Route path="cont" element={<Contacts/>}/>
                <Route path="oprodukcii" element={<Oprodukcii/>}/>
                <Route path="onas" element={<Onas/>}/>
                <Route path="oplata" element={<Oplata/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="/catalog/*" element={<Catalog kolvo={kolvo} setKolvo={setKolvo} />}/>


            </Routes>
        <footer>
            <Footer/>
            <div className="fut">
                <p>© 2022 All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
