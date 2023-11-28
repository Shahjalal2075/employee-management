import Header from "../../Shared/Header/Header";
import Banner from "./Banner";
import Service from "./Service";
import Testimonials from "./testimonials";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;