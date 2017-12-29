export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const WINDOWS_UPDATE = 'WINDOWS_UPDATE';

export const requestSuccess = data => ({
    type: REQUEST_SUCCESS,
    nickname: data
});
export const windowsResizeStyle = () => ({
    type: WINDOWS_UPDATE
});

export function fetchdata() {
    return dispatch => {
        fetch(
            "http://localhost:3000/navbar/data", {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }
        ).then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    dispatch(requestSuccess(data.name));
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function (e) {
            console.log("Fetch failed!", e);
        });
    }
}
