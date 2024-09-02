"use client";
import React from "react";
import ItemCart from "./item.cart";

export default function Home() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalItemCount, setTotalItemCount] = React.useState(0);

  const handlePriceChange = (priceChange: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + priceChange);
  };

  const handleItemCountChange = (countChange: number) => {
    setTotalItemCount((prevTotalItemCount) => prevTotalItemCount + countChange);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ItemCart
        itemname="iPhone 15"
        price={32900}
        imageSrc="./apple/iphone15.jpeg"
        description="The iPhone 15 features an advanced dual-camera system, A16 Bionic chip, and an all-new design."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iPhone 15 Pro"
        price={41900}
        imageSrc="./apple/iphone15 pro.jpeg"
        description="iPhone 15 Pro comes with the powerful A17 Bionic chip, ProMotion display, and a triple-camera system."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iPad Pro"
        price={44900}
        imageSrc="./apple/Ipad pro.jpeg"
        description="The ultimate iPad experience, with M2 chip, Liquid Retina XDR display, and up to 2TB of storage."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iPad Air"
        price={23900}
        imageSrc="./apple/Ipad Air.jpeg"
        description="iPad Air offers powerful performance with the M1 chip and a stunning 10.9-inch Liquid Retina display."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iPad"
        price={13900}
        imageSrc="./apple/Ipad.jpeg"
        description="The iPad features a 10.2-inch Retina display, A13 Bionic chip, and support for Apple Pencil."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iPad mini"
        price={19900}
        imageSrc="./apple/Ipad mini.jpeg"
        description="iPad mini is small but mighty, with an A15 Bionic chip and an 8.3-inch Liquid Retina display."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="MacBook Air"
        price={32900}
        imageSrc="./apple/macbook Air.jpeg"
        description="MacBook Air is incredibly thin and light, powered by the M2 chip and with up to 18 hours of battery life."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="MacBook Pro"
        price={58900}
        imageSrc="./apple/Macbook Pro.jpeg"
        description="The ultimate pro notebook, MacBook Pro features M2 Pro or M2 Max chips and a stunning XDR display."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="iMac"
        price={49900}
        imageSrc="./apple/iMac.jpeg"
        description="iMac comes with a stunning 4.5K Retina display, and is powered by the M1 chip, offering great performance in a sleek design."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="Mac mini"
        price={20900}
        imageSrc="./apple/Mac mini.jpeg"
        description="Compact yet powerful, Mac mini is now equipped with the M2 or M2 Pro chip."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <ItemCart
        itemname="Mac Studio"
        price={69900}
        imageSrc="./apple/Mac Studio.jpeg"
        description="Mac Studio offers incredible performance with the M2 Ultra chip, perfect for creative professionals."  // Description
        onPriceChange={handlePriceChange}
        onItemCountChange={handleItemCountChange}
      />
      <div className="total-container">
  <h2 className="total">Total Quantity: {totalItemCount} Total Price: ฿{totalPrice.toLocaleString()}</h2>
</div>
    </div>
  );
}
