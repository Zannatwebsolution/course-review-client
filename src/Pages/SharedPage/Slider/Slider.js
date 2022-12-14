import React from 'react';
import './Slider.css'
const Slider = () => {
    return (
        <div className="carousel w-full slider-shadow">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
        <img src="https://cdn.pixabay.com/photo/2017/05/20/20/22/clouds-2329680__340.jpg" className="w-full" alt="home" />
    </div>
    <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-8 sm:left-24 top-1/2">
        <h1 className='text-3xl sm:text-6xl font-bold text-white'>
        Product reviews for  <br />
        the customer<br />
        </h1>
        <p className='text-xl text-white pt-6 w-9/12'>Collect reviews and feedback from your customers. Use it in your sales and marketing</p>
       <div> <button className="btn btn-primary mt-5">Read More</button></div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 sm:left-5 right-1 sm:right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="carousel-img w-full">
        <img src="https://cdn.pixabay.com/photo/2016/11/06/05/38/boats-1802340__340.jpg" className="w-full" alt="home" />
    </div>
    <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className='text-6xl font-bold text-white'>
        Grow your<br />
        customer<br />
        </h1>
        <p className='text-xl text-white pt-6 w-9/12'>Grow faster with the help of your customers, and these services.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="carousel-img w-full">
        <img src="https://cdn.pixabay.com/photo/2016/11/04/21/34/beach-1799006__340.jpg" className="w-full" alt="home" />
    </div>
    <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className='text-6xl font-bold text-white'>
        Decide what to <br />
        capture<br />
        </h1>
        <p className='text-xl text-white pt-6 w-9/12'>Customize your review collection form. Keep it as simple as possible.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="carousel-img w-full">
        <img src="https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300__340.jpg" className="w-full" alt="home" />
    </div>
    <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className='text-6xl font-bold text-white'>
        Moderation and  <br />
        translation<br />
        </h1>
        <p className='text-xl text-white pt-6 w-9/12'>Make sure all content you publish is relevant, high-quality and fully localized.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;