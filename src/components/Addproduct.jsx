import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Addproduct = () => {
    const [product_name, setproduct_name] = useState("");
    const [product_description, setproduct_description] = useState("");
    const [product_cost, setproduct_cost] = useState("");
    const [product_photo, setproduct_photo] = useState(null);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setLoading("Wait as we add your product");

        try {
            const formData = new FormData();
            formData.append("product_name", product_name);
            formData.append("product_description", product_description);
            formData.append("product_cost", product_cost);
            formData.append("product_photo", product_photo);

            const response = await axios.post("https://ishowtime.pythonanywhere.com/api/add_products", formData);

            console.log(response);
            setLoading("");
            setSuccess(response.data.message);

            // Clear form fields
            setproduct_name("");
            setproduct_description("");
            setproduct_cost("");
            setproduct_photo(null);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="addproduct-container">
                <div className="addproduct-card shadow">
                    <h2 className="text-center text-success mb-4">Add Product</h2>
                    <form onSubmit={submit}>
                        <h6 className="text-warning mb-3">{loading}</h6>
                        <h6 className="text-success mb-3">{success}</h6>
                        <h6 className="text-danger mb-3">{error}</h6>

                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control product-input"
                                placeholder="Product Name"
                                required
                                value={product_name}
                                onChange={(e) => setproduct_name(e.target.value)}
                            />
                        </div><br />

                        <div className="mb-4">
                            <textarea
                                className="form-control product-input"
                                placeholder="Description"
                                rows="5"
                                required
                                value={product_description}
                                onChange={(e) => setproduct_description(e.target.value)}
                            ></textarea>
                        </div><br />

                        <div className="mb-4">
                            <input
                                type="number"
                                className="form-control product-input"
                                placeholder="Cost (Ksh)"
                                required
                                value={product_cost}
                                onChange={(e) => setproduct_cost(e.target.value)}
                            />
                        </div><br />

                        <div className="mb-4">
                            <input
                                type="file"
                                className="form-control product-input"
                                required
                                accept="image/*"
                                onChange={(e) => setproduct_photo(e.target.files[0])}
                            />
                        </div><br />

                        <button type="submit" className="btn btn-success w-100">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Addproduct;