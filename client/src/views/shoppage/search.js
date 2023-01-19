import react, { useState, Fragment } from "react";

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState("");

    const searchSumbitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/products/${keyword}`)
        } else {
            history.push("/products")
        }
    };


    return (
    <Fragment>
        <form className="searchBox" onSubmit={searchSumbitHandler}>
            <input
                type="text"
                placeholder="Search a Product ..."
                onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="sumbit" value="Search" />
        </form>
    </Fragment>
    );
};

export default Search;
