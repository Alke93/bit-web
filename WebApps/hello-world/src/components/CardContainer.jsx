import { AutoCard } from "./AutoCard";

const CardContainer = () => {
    const inputArray = [{ name: 'Astra', desc: 'Opel Astra K, Germany', price: 10000 }
        , { name: 'Accord', desc: 'Honda Accord, Japan', img: 'https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg?fit=around%7C875:492', price: 20000 },
    { name: 'Megane', desc: 'Renault Megane, France', img: 'https://www.renault.rs/CountriesData/Serbia/images/cars/megane/renault-megane4-ph2-exterior-3d-001_ig_w600_h337.jpg', price: 17000 }
    ]

    return inputArray.map((item, index) => <AutoCard key={index} name={item.name} price={item.price} desc={item.desc} img={item.img} /> )
}

export default CardContainer;