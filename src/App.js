import './index.css';
import MainFeed from './components/MainFeed.js';
import PopularFeed from './components/PopularFeed';



const App = () => {

    return (
        <div className="m-3">
            
            <div className="inline-flex">
                <div className="m-3 w-2/3">
                    <div className="font-semibold underline mb-2">
                        NEWS
                    </div>
                    <MainFeed className="flex-start" />
                </div>
                <div className="m-3 w-1/3">
                    <div className="font-semibold underline ms-3">
                        POPULAR TODAY
                    </div>
                    <PopularFeed className="flex-end" />
                </div>

            </div>
        </div>
    )
};

export default App;