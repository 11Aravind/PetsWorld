import ReactCardSlider from 'react-card-slider-component';
const ImageSlider = () => {
  return(
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
<img src="./images/banner1.webp" class="d-block w-100" alt="img1"/>
     </div>
     <div class="carousel-item">
<img src="./images/banner2.webp" class="d-block w-100" alt="img2"/>
     </div>
     <div class="carousel-item">
<img src="./images/banner3.webp" class="d-block w-100" alt="img3"/>
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
    {image:"https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/g/o/goat-chicken-chicken_cubes_1_1.jpg",title:"This is a title",description:"This is a description" },
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description" },
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description" },
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description" },
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description" },
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description" },
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description" },
]
return(
  <ReactCardSlider slides={slides}/>
)
}