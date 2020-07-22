import React, {useState} from 'react';

const AddProduct = props => {
    const [valueInput, setValueInput] = useState([])
    const onHandleChange = (e) => {
        const {value} = e.target
        setValueInput({
            name: value
        })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="">Add Product Form</h1>
            <div className="card-body">
                <form action="" onSubmit={onHandleSubmit} >
                    <div className="form-group" onChange={onHandleChange}>
                        <label htmlFor="">Ten san pham</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

AddProduct.propTypes = {

};

export default AddProduct;
