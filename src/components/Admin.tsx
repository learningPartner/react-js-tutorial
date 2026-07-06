import { useEffect, useState } from "react";

function Admin() {
    debugger;
    let courseName: string = "Angular";
    const div1ClassName: string = "bg-success";
    let isActive = true;

    const [productName, setProductName] = useState<string>("Moto Mobile")
        const [productPrice, setProductproductPrice] = useState<number>(1200)

    const showWelcome = () => {
        debugger;
        courseName = "ReactJs "  
        alert("Welcome")
    }
    const showMessage = (msg:string)=>{
        alert(msg)
    }
    const changeProduct =() =>{
        setProductName("Assus Laptop")
    }
    const changeProductPrice =() =>{
        setProductproductPrice(1500)
    }

    useEffect(()=>{
        console.log("Plain Effect")
    })

    useEffect(()=> () =>{console.log("Component Destriyed")},[])

    useEffect(()=>{
        console.log("Plain Effect WithOut Dependencies")
    },[])

     useEffect(()=>{
        console.log("Plain Effect With Dependencies productName")
    },[productName])

     useEffect(()=>{
        console.log("Plain Effect With Dependencies productPrice")
    },[productPrice])

     useEffect(()=>{
        console.log("Plain Effect With Dependencies productPrice & productName")
    },[productPrice,productName])

    // const onTextChnage= (event: any)=> {
    //     debugger;
    //     const textValeu  = event.target.value;
    //     setProductName(textValeu)
    // }

    return (
      <div>
        <p className="secondary">{courseName}</p>
        <input type="text"   />
     
        <hr />
        <strong>productName :{productName} - price: {productPrice}</strong> <br />
        <input type="text"   />
        <input type="text"  
        onChange={(eve)=> setProductName(eve.target.value)} 
        placeholder="Eneter Product"/>
        <hr />
        <button onClick={changeProduct}>Change Produt</button>
         <button onClick={changeProductPrice}>Change Price</button>
        <div className={isActive ? "bg-success" : "bg-danger"}>asdas</div>
        <button onClick={showWelcome}>Show</button>
        <hr />
        <button onClick={() => showMessage("Java")}>Java</button>
        <button onClick={() => showMessage("Dot Net")}>Dot Net</button>
        <button onClick={() => showMessage("Angular")}>Angular</button>
        <hr />

        <button onClick={() => showWelcome()}>Show Text</button>
      </div>
    ); 
}

export default Admin;