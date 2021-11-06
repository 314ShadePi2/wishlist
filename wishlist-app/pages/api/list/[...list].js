const listsJson = require('../../../data/json/lists.json')

export default function handler(req, res) {
    const { list } = req.query
    if(list.join('/').endsWith('.list')==false){
        res.status(400).json({
            error: 'Error: Filename should end with \'.list\'',
            status: 400,
            providedPath: list.join('/'),
            possibleTruePath: `${list.join('/')}.list`
        })
    } else {
        try {
            const joinedList=list.join('/')
            console.log(joinedList)
            listsJson.lists.forEach(function(item){
                //console.log(item)
                //console.log("")
                if(item.info.name==joinedList){
                    console.log(item)
                    res.status(200).json(item)
                }
            })  
        } catch (error) {
            const err = 'error: ' + error
            res.status(400).end(err)
        }
    }
}