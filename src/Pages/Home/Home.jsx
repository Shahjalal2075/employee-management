import Banner from "./Banner";
import NewSletter from "./NewSletter";
import Service from "./Service";
import WorkingProcess from "./WorkingProcess";
import Testimonials from "./testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <WorkingProcess></WorkingProcess>
            <NewSletter></NewSletter>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;