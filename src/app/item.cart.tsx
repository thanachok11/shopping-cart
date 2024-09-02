"use client";
import React from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemCartProps {
  itemname: string;
  price: number;
  imageSrc: string;
  description: string;  // New description prop
  onPriceChange: (priceChange: number) => void;
  onItemCountChange: (countChange: number) => void;
}

export default function ItemCart({
  itemname,
  price,
  imageSrc,
  description,  // Include the description prop
  onPriceChange,
  onItemCountChange,
}: ItemCartProps) {
  const [count, setCount] = React.useState(0);
  const [itemTotalPrice, setItemTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    const newItemTotalPrice = newCount * price;
    setCount(newCount);
    setItemTotalPrice(newItemTotalPrice);
    onPriceChange(price);
    onItemCountChange(1);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      const newItemTotalPrice = newCount * price;
      setCount(newCount);
      setItemTotalPrice(newItemTotalPrice);
      onPriceChange(-price);
      onItemCountChange(-1);
    }
  };

  return (
    <div className="item-cart">
      <img src={imageSrc} alt={itemname} />
      <div className="item-info">
        <Typography className="item-name">{itemname}</Typography>
        <Typography className="item-price">฿{price.toLocaleString()}</Typography>
        <Typography className="item-description">{description}</Typography>  {/* Display the description */}
        <div className="item-total-price">Total: ฿{itemTotalPrice.toLocaleString()}</div>
      </div>
      <div className="item-controls">
        <IconButton onClick={handleRemoveItemClick} disabled={count === 0}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton onClick={handleAddItemClick}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}
