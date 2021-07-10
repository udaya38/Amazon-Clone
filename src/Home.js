import React from 'react';
import Product from './Product';
import './Home.css';
function Home()
{
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" alt="Not displayed"/>
         <div className="home_row">
          <Product id={12345} title="The Lean StartUp" price={12.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Not displayed"/>
          <Product id={23654} title="Alexa powered by the amazon company" price={234.60} rating={5} image="https://cdn.vox-cdn.com/thumbor/8xiKPwd_p50lmJzdhV8_2Pbq5gA=/0x0:792x528/1200x800/filters:focal(333x201:459x327)/cdn.vox-cdn.com/uploads/chorus_image/image/65322102/amazonlineup.0.jpg" alt="Not displayed"/>
         </div>
         <div className="home_row">
          <Product id={56657} title="Powerful and standard SAMSUNG phones" price={500.60} rating={5} image="https://st1.bgr.in/wp-content/uploads/2020/10/Reward-yourself.jpg" alt="Not displayed"/>
          <Product id={98598} title="Power bank set" price={50.98} rating={3} image="https://i2.wp.com/electronicsbeliever.com/wp-content/uploads/2017/06/pic-6.png?fit=604%2C421" alt="Not displayed"/>
          <Product id={94955} title="Samsung J4 back case pink colour" price={20.00} rating={2} image="https://rukminim1.flixcart.com/image/352/352/jpsnma80/cases-covers/back-cover/y/n/9/booz-dnkitti-003-original-imafag6geq4zs5xu.jpeg?q=70" alt="Not displayed"/>
         </div>
         <div className="home_row">
          <Product id={94948} title="Henry 2 Seater Sofa (Velvet, Chestnut Brown)" price={453.9} rating={5} image="https://img1.exportersindia.com/product_images/bc-full/2020/1/4852280/9-seater-sofa-set-1580216618-5274212.jpeg" alt="Not displayed"/>
         </div>
      </div>
    </div>
  )
}

export default Home;
