import "./Home.css";

function Home() {
    return (
        <div className="about-container">


            <p className="about-text">
                PlantMedic helps users quickly detect plant diseases using image
                analysis. Upload a leaf photo and get instant insights to keep your
                plants healthy.
            </p>

            <p>
                PlantMedic is a smart and easy-to-use platform created to help farmers, gardeners, and plant lovers
                identify plant diseases early. Instead of depending on guesswork or waiting for expert help, users can
                simply take a picture of a plant leaf with their smartphone and upload it to the system. PlantMedic then
                analyzes the image using a combination of image processing and machine learning to quickly detect
                possible diseases and provide helpful insights.
            </p><br />

            <p>
                The system works by sending the uploaded image from the React.js frontend to a backend API built with
                Python and Flask/FastAPI. There, the image is cleaned and processed using OpenCV before being
                examined by a deep learning model trained with TensorFlow and Keras. Within seconds, users receive a
                prediction along with simple guidance, making plant care faster and more accessible.
            </p><br />

            <p>
                PlantMedic was developed with the motivation to reduce crop loss and support farmers who often rely on
                manual inspection, which can be slow and inaccurate. By offering an instant digital diagnosis, the
                platform brings modern technology directly into agriculture, helping users protect their plants more
                effectively.
            </p><br />

            <p>
                One of the standout features of PlantMedic is its unique Plant Care Tip Board, which provides useful,
                research-based tips that aren’t commonly found elsewhere. With an engaging interface and a complete
                full-stack ML workflow behind it, PlantMedic aims to make plant health monitoring smarter, simpler, and
                easily available to everyone.
            </p>


            <div className="image-grid">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqK7awHfreuNem8DGGseQd0eQ25VMbu96LqQ&s" alt="Plant 1" />

                <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohi-807598.jpg&fm=jpg" alt="Plant 2" />

                <img src="https://gachwala.in/wp-content/uploads/2022/06/IMAGE-1-15.webp" alt="Plant 3" />

                <img src="https://thumbs.dreamstime.com/b/green-tropical-leaves-monstera-palm-fern-ornamental-plants-backdrop-background-111727950.jpg" alt="Plant 4" />
            </div>

        </div>
    );
}

export default Home;
