const express = require("express")
const app = express()
const port =  3001

const villanInfo = [
    {   
        id:1,
        seriesMovieName:"Looney Tune",
        villainName:"Wile E. Coyote",
        actions:"This cunning but perpetually unlucky coyote spends all his cartoon life trying to capture the Road Runner, only to be foiled by his own outlandish contraptions and hilarious mishaps. From falling anvils to exploding rockets, Wile E.'s plans are masterpieces of ineptitude.",
        villainImgLink:"https://static.wikia.nocookie.net/looneytunes/images/7/7f/Coyote.gif/revision/latest/thumbnail/width/360/height/360?cb=20060219181853",
        posterLink:"https://m.media-amazon.com/images/M/MV5BMDEwNTAwNjMtNTgwZC00Y2RjLTliOTYtZWI4NGNlNjI4ZTVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg"
    }
]
app.use(express.json());
app.get('/', (req, res) => {
    res.send(villanInfo)
})

app.post('/', (req, res) => {
    const newVillain= req.body;
    villanInfo.push(newVillain)
    res.send(villanInfo)

})
app.put('/:id', (req, res) => {
    const id =  parseInt(req.params.id);
    const update = req.body
    villanInfo[id] = update
    res.json(villanInfo)
})
app.delete('/:id',  (req,res)=>{
    const id =  parseInt(req.params.id)
    villanInfo.splice(id, 1)
    res.json(villanInfo)
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

module.exports = app;