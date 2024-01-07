import Carousel from '/src/Components/Carousel/index.jsx';
import Introduction from '/src/Components/Introduction/index.jsx';
import Services from '/src/Components/Services/index.jsx';
import Employee from '/src/Components/Employee/index.jsx';
import Results from '/src/Components/Results/index.jsx';


function Home() {
    return (
        <>
            <Carousel />
            <Introduction />
            <Services />
            <Employee />
            <Results />
        </>
    )
}

export default Home;