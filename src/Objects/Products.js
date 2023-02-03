 import honda1 from "../Assets/hondaR1.jpeg"
 import honda2 from "../Assets/hondaR2.jpg"
 import nissan1 from "../Assets/nissan1.jpg"
 import nissan2 from "../Assets/nissan2.jpg"
 import mustang1 from "../Assets/mustang1.jpg"
 import mustang2 from "../Assets/mustang2.jpg"
 import brz1 from "../Assets/brz1.jpg"
 import brz2 from "../Assets/brz2.jpg"
 import gr861 from "../Assets/GR861.jpg"
 import gr862 from "../Assets/GR862.jpg"
 import charger1 from "../Assets/charger1.jpg"
 import charger2 from "../Assets/charger2.jpg"
 import murcielago1 from "../Assets/Murcielago1b.jpg"
 import murcielago2 from "../Assets/Murcielago2.jpg"
 import camaro1 from "../Assets/camaro1.jpg"
 import camaro2 from "../Assets/camaro2.jpg"
 import tributo1 from "../Assets/tributo1.jpg"
 import tributo2 from "../Assets/tributo2a.jpg"
 import cayman1 from "../Assets/cayman1.jpg"
 import cayman2 from "../Assets/cayman2.jpg"
 import bmw2 from "../Assets/bmw2.jpg"
 import bmw1 from "../Assets/bmw1.jpg"
 import giulia1 from "../Assets/giulia1.jpg"
 import giulia2 from "../Assets/giulia2.jpg"
 
 const Products = [
    {
        name: "Honda Civic Type R",
        price: 45000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: honda1,
        img2: honda2
    },
    {
        name: "Nissan Z Performance",
        price: 50000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: nissan1,
        img2: nissan2
    },
    {
        name: "Ford Mustang GT",
        price: 39000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: mustang1,
        img2: mustang2
    },
    {
        name: "Subaru BRZ",
        price: 28000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: brz1,
        img2: brz2
    },
    {
        name: "Toyota GR86",
        price: 28500.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: gr861,
        img2: gr862
    },
    {
        name: "Dodge Charger SRT",
        price: 82000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: charger1,
        img2: charger2
    },
    {
        name: "Lamborghini Mercielago",
        price: 295000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: murcielago1,
        img2: murcielago2
    },
    {
        name: "Chevorlet Camaro SS",
        price: 42500.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: camaro1,
        img2: camaro2
    },
    {
        name: "Firarri F8 Tributo",
        price: 325000.00,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: tributo1,
        img2: tributo2
    },
    {
        name: "Porche Cayman GT4",
        price: 108000,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: cayman1,
        img2: cayman2
    },
    {
        name: "BMW M2 Competition",
        price: 59000,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: bmw2,
        img2: bmw1
    },
    {
        name: "Alfa Romeo Giulia GTAm",
        price: 59000,
        id: Math.floor(Math.random() * 1000),
        count: 1,
        img1: giulia1,
        img2: giulia2
    },
    
]

export default Products