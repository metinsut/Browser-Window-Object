const product = (state={},action) => {
    switch (action.type) {
        case "page_detail":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export  default product;