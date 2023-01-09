import "./NotFound.scss";

const images = "https://josefacchin.com/wp-content/uploads/2018/09/error-404-http-not-found.png.webp"
const NotFound = () => {
  return <div className="notFoundDiv"> <p>Oops.. there was an error searching your posts..</p>
  <img src={images} width={500} height={250} /></div>;
  
};

export default NotFound;
