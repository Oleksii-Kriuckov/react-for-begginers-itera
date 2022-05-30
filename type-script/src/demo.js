import fetch from "cross-fetch";

const API = { USER: 'http://localhost:400/user' }

async function fetchApi(url, option, mapper) {
    const fetchOptions = option ? { ...option } : {}

    if (fetchOptions.body && typeof fetchOptions.body !== 'string') {
        fetchOptions.body = JSON.stringify(fetchOptions.body)
    }

    if (!fetchOptions.headers) {
        fetchOptions.headers = {}
    }

    if (!fetchOptions.headers['Content-Type']) {
        fetchOptions.headers['Content-Type'] = "application/json"
    }

    const responce = await (url, fetchOptions).then((x) => { x.json() });
    return typeof mapper === 'function' ? mapper(responce) : responce;
}

const userMapper = (data) => ({
    fullName: `${data.name} ${data.secondname}`,
    id: data.id
});

(async function () {
    const result = await fetchApi(
        API.USER,
        {
            method: 'POST',
            body: { id: 5 }
        },
        userMapper
    )
    console.log(result)
})();
