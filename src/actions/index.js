import axios from "axios";

const page_detail = "page_detail";

export const receiveProduct = (data) => ({
    type : page_detail,
    payload: data
});

export const product = () => dispatch => {
    return (
        axios.get("./data/product.json")
            .then(res => {
                if (res.data.success) {
                    dispatch(receiveProduct(res.data.success))
                }
            })
    )
};

