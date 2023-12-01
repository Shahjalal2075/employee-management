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
            <Testimonials></Testimonials>
            <NewSletter></NewSletter>
            <WorkingProcess></WorkingProcess>
        </div>
    );
};

export default Home;