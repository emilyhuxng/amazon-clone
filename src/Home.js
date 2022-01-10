import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/61AfKrEfpUL._SX3000_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="123212341"
                        title="Amazon Essentials Men's Lightweight Water-Resistant Packable Puffer Jacket" 
                        price={26.99} 
                        image="https://m.media-amazon.com/images/I/81HSib0IUkS._AC_UY550_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="123219041"
                        title='Black Disposable Face Mask 50 Pcs Black Face Masks 3 Ply Protection Masks' 
                        price={6.99} 
                        image="https://m.media-amazon.com/images/I/71mFk5mZ8wL._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="284910577"
                        title='
                        Instant Vortex Plus 10 Quart Air Fryer, Rotisserie and Convection Oven, Air Fry, Roast, Bake, Dehydrate and Warm, 1500W, Stainless Steel and Black' 
                        price={139.99} 
                        image="https://m.media-amazon.com/images/I/81gZ5WDqAdL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="841562949"
                        title='Castle Art Supplies Artists Sketch Books (2 Sketch Pad Pack) 9" x 12", 200 Sheets of Sketch Paper Ideal for Drawing and School Supplies - Acid Free and Excellent Value' 
                        price={24.99} 
                        image="https://m.media-amazon.com/images/I/61AM7KQrihL._AC_SL1080_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="284054200"
                        title='
                        TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic' 
                        price={49.99} 
                        image="https://m.media-amazon.com/images/I/61xDZp4Vt-L._AC_SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="284950198"
                        title='
                        Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)' 
                        price={299.99} 
                        image="https://m.media-amazon.com/images/I/61lJa-K8CqL._AC_SL1001_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home
