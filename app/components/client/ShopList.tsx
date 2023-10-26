// ShopList.tsx
"use client";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/gourmet/";

export interface Shop {
  id: string;
  name: string;
  address: string;
  access: string;
  logo_image: string;
  catch: string;
}

const ShopList: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      const fetchedShops = response.data.results.shop;
      setShops(fetchedShops);
    };

    fetchData();
  }, []);

  return (
    <List>
      {shops.map((shop) => (
        <ListItem key={shop.id}>
          <ListItemAvatar>
            <Avatar src={shop.logo_image} alt={shop.name} />
          </ListItemAvatar>
          <ListItemText
            primary={shop.name}
            secondary={
              <>
                <Typography variant="body2" color="textPrimary">
                  {shop.catch}
                </Typography>
                {shop.address} - {shop.access}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ShopList;
