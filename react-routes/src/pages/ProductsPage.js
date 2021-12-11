import { useLocation, useNavigate } from "react-router-dom";

const ProductsPage = () => {
    let { search } = useLocation();
    let query = new URLSearchParams(search);

    const LIMIT = 20;
    let start = parseInt(query.get("ini")) || 1;
    let end = parseInt(query.get("end")) || LIMIT;

    let navigate = useNavigate();


    const handlePrev = (e) => { navigate(`?ini=${start - LIMIT}&end=${end - LIMIT}`); }
    const handleNext = (e) => { navigate(`?ini=${start + LIMIT}&end=${end + LIMIT}`); }

    return (
        <div>
            <h3>Products</h3>
            <p>
                Showing products from <b>{start}</b> to <b>{end}</b>
            </p>
            {start>LIMIT && <button onClick={handlePrev}>Back</button>}            
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default ProductsPage;