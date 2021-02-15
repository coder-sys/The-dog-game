function Bathroom(){
    this.goToBathroom = function(){
        let bathroom=database.ref('dog/activities')
        bathroom.on('value',function(data){
            bathroom=data.val().bathroom
        })
        var button = createButton('bathroom')
        button.position(360,400)
        button.mousePressed(function Livingroom(){
        database.ref('dog/activities').update({
            'bathroom':bathroom+=1
        })
        text(bathroom,300,100)
        dog.addImage(bathroomimg)
        console.log(bathroom+' is the number of times the dog has gone to the bathroom')
    })
}
}