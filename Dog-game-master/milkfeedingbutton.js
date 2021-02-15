class Milkfeeding{
    constructor(){

    }
    async give_milks(){
        var timeref = database.ref('dog')
        timeref.on('value',function (data){
            m=data.val().timefed
        })
        let milkref=database.ref('dog')
        milkref.on('value',function (data){
            milkf=data.val().milk
        })
        let hr = await fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
        let j = await hr.json()
        let hour = j.datetime.slice(11,13)
        var button = createButton('Feed')
        button.position(500,200)
        button.mousePressed(function milkFeed(){
            database.ref('dog').update({
                timefed:hour
            })
            console.log(m+" was the time the dog was fed")
            database.ref('dog').update({
                milk:milkf+=1
            })
        })
    }
}