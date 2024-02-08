import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  return(
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.petsworld.network/v1/s/images/2A8274E020166D590F02BE36726FC66F/1920.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.petsworld.network/v1/s/images/D1E47A1ED5E43C6B4B1633611A18D8D9/1920.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.petsworld.network/v1/s/images/9825AAA7A33C473BAF47841D34630A72/1920.webpp" class="d-block w-100" alt="..."/>
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