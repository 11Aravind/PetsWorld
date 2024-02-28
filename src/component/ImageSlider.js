import ReactCardSlider from 'react-card-slider-component';
const ImageSlider = () => {
  return(
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
<img src="https://www.petsy.online/cdn/shop/files/WEEKEND-SALE-BANNER-1.jpg?v=1709018614&width=1912" class="d-block w-100" alt="..."/>
     </div>
     <div class="carousel-item">
<img src="https://cdn.petsworld.network/v1/s/images/D1E47A1ED5E43C6B4B1633611A18D8D9/1920.webp" class="d-block w-100" alt="..."/>
     </div>
     <div class="carousel-item">
<img src="https://cdn.freshtohome.com/media/banner/a0cb700b984330c3.jpg" class="d-block w-100" alt="..."/>
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
   </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
   </button>
 </div>
  );
 
}
export default ImageSlider;
export const Cardslider=()=>{
  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]
return(
  <ReactCardSlider slides={slides}/>
)
}