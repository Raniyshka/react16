import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import s from './Home.module.css';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div className={s.home}>
      <h2>Мини подборка</h2>
      <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      </ImageList>
      <NavLink className={s.btn} to='/catalog'>В каталог ↠</NavLink>
    </div>
    
  );
}

const itemData = [
  {
    img: 'https://basket-03.wbbasket.ru/vol375/part37592/37592765/images/big/2.webp',
    title: 'Bed',
  },
  {
    img: 'https://9sizes.com/pictures/product/big/21031_big.JPG',
    title: 'Kitchen',
  },
  {
    img: 'https://9sizes.com/pictures/product/big/17774_big.JPG',
    title: 'Sink',
  },
  {
    img: 'https://i.pinimg.com/736x/df/6c/59/df6c593b3f5b5418753de81cb31c8c73.jpg',
    title: 'Books',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iOPzUMLQqDEqrdtiARBPlTxXLhpNam63_g&s',
    title: 'Chairs',
  },
  {
    img: 'https://keddo.ru/upload/iblock/7c8/ah0d63qi9j660imbdy2f4zz9tb2nv4rs.jpg',
    title: 'Candle',
  },
  {
    img: 'https://respect-shoes.ru/upload/medialibrary/bf0/bf088004d806a18cf5aa631af25b2edf.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://static.insales-cdn.com/r/jfK57p2Bh-o/rs:fit:500:0:1/q:100/plain/images/products/1/7150/931773422/241105_Premiatta17620.jpg@jpg',
    title: 'Doors',
  },
  {
    img: 'https://sbalo.ru/upload/resize_cache/iblock/768/500_800_1/n760w5zwanftnva4w6mu59j66xo3sazb.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://piniolo.ru/pictures/product/big/111474_big.JPG',
    title: 'Storage',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uswwiPtnahigyMkRQTH9sjQFrGY5A7nzXg&s',
    title: 'Coffee table',
  },
  {
    img: 'https://respect-shoes.ru/upload/resize_cache/iblock/f12/600_600_1/8hb7qgbrl6myozflt01k6jjkacv35v3r.JPG',
    title: 'Blinds',
  },
];
