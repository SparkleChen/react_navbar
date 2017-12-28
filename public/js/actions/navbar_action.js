export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const requestSuccess = data => ({
    type: REQUEST_SUCCESS,
    nickname:data
});


export function fetchdata() {
    return dispatch =>{
        fetch(
            "http://localhost:3000/navbar/data",{
                method: 'GET',
                mode:'cors',
                cache: 'default'
            }
        ) .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        dispatch(requestSuccess(data.name));
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            },function(e) {
                console.log("Fetch failed!", e);
            });
    }
}
