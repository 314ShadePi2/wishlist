import fetch from 'node-fetch';


export default async function handler(req, res) {
    const { list } = req.query
    const pathToList = '/json/lists/' + list.join('/')
    const urlToList = process.env.BASE_URL + pathToList
    if(pathToList.endsWith('.json')==false){
        res.status(400).json({ error: 'Error: Please put .json after filename', status: 400 , providedPath: list.join('/'), providedFullPath: pathToList, possibleTruePath: `${list.join('/')}.json`, possibleTrueFullPath: `${pathToList}.json` })
    } else {
        const response = await fetch(urlToList);
        const data = await response.json();
        res.json(data)

    }
}