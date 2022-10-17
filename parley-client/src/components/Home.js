
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="text-center">
            <Link to={"/conversations"}>
                <button class="btn btn-outline-info position-absolute top-50 start-50 translate-middle btn-lg">Start Yapping</button>
            </Link>
        </div>
    )
}

export default Home;