import logo from './logo.svg';
import './App.css';
import Category from './componts/Category.jsx'
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  let [CategoryList,setCategoryList] = useState([]);
  let [products,setProducts] = useState([]);
  let [catName,setCatName] = useState('');

  useEffect(()=>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`).then(res=>res.data).then(FinalData=>setProducts(FinalData.products));

    }
  },[catName])

  let getData =()=>{

    axios.get('https://dummyjson.com/products/category-list').then(res=>res.data).then(FinalData=>setCategoryList(FinalData));
    
  }

  let getProducts = () =>{
    axios.get('https://dummyjson.com/products').then(res=>res.data).then(FinalData=>setProducts(FinalData.products));

  }


  let productData =  products.map((v,i)=>{
    return(
      <ProductsItem Title={v.title} desc={v.description} Price={v.price} img={v.thumbnail} key={i}/>
    )
  })
  useEffect(()=>{
    getProducts()
    getData()
  },[])
  return (
    <div className="w-full mx-auto container-fluid my-5">
      <h1 className='text-[2rem] pl-1 text-center my-5 font-[500] text-[#555]'>Products</h1>
      <div className="container mx-auto grid grid-cols-[30%_auto] gap-2">
        <div className="">
          <Category CategoryList ={CategoryList} setCatName={setCatName}/>
        </div>
        <div className='grid grid-cols-4 grid-rows-[410px] w-full gap-4'>
        {productData}
        </div>
      </div>
    </div>
  );
}


function ProductsItem({Title,Price,img}){
  return(
    <div className='flex flex-col p-3 shadow h-[25rem]'>
    <img src={img} className='w-full h-[20rem]'/>
    <h1 className='text-[1.4rem] font-[400]'>{Title}
    </h1>
   <b className='text-green-700 font-light'>Rs {Price}
   </b>
   </div>
  )
}

export default App;
