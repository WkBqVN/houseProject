let fetchSomething = () => {
    return fetch("http://localhost:6060/house/houses")
        .then(res => res.json())
    .then(data => {
        console.log(data)
    }).then(data => { return data })
}

export default fetchSomething