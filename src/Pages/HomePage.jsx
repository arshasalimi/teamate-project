import NavSearch from "./HomePage-nav-search";
import Populer from "./populer-product";
import NewProduct from "./new-Product";
import Banners from "./banner-brands";
import Swiper from "./Slider";
import CampingMaterial from "./CampingMaterial";
import TopSells from "./TopSells";
import Cards from "./secendCardBrand";
import Advices from "./advicesproduct";
import PopulerBrand from "./populerBrand";


export default function HomePage (){
    return(<>
    <NavSearch/>
    <Populer/> 
    <NewProduct/> 
    <Banners/>
    <Swiper/>
    <CampingMaterial/>
    <TopSells/>
    <Cards/>
    <Advices/>
    <PopulerBrand/>
    </>
    )
}