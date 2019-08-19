// Helper actions for error, loading and data fetch success

export const itemsHasErrored = (bool) => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const itemsIsLoading = (bool) => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (items) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

// Driver action to fetch data

export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(itemsIsLoading(false));

                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}    



//Reducer of item js
// Reducers for error, loading and data fetch

export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export const items = (state = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}