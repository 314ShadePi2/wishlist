const no = require('../../../data/json/lists.json')
var fs = require('graceful-fs')


export default function handler(req, res) {
    const { list } = req.query
    if(list.join('/').endsWith('.list')==false){
        res.status(400).json({
            error: 'Error: Please put .list after filename',
            status: 400,
            providedPath: list.join('/'),
            possibleTruePath: `${list.join('/')}.list`
        })
    } else {
        try {
            const file = './data/json/lists.json'
            fs.readFileSync(file, (err, data) => {
                if(err){
                    const error = 'error: ' + err
                    res.end(error)
                } else {
                    try {
                        const jdata = JSON.parse(data)
                        for(let i = 0; i <= jdata.lists.length; i++){
                            if(data.lists[i].info.name == list.join('/')){
                                let listToReturn = data.lists[i]
                                res.status(200).json(listToReturn)
                                return 0;
                            }
                        }
                    } catch (error) {
                        const err = 'error: ' + error
                        res.end(err)
                    }
                }
            })    
        } catch (error) {
            const err = 'error: ' + error
            res.end(err)
        }
    }
}