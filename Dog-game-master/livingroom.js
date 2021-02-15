function Livingroom(){
    this.goToLivingRoom = function(){
        let l=0
        let livingroomref=database.ref('dog/activities')
        livingroomref.on('value',function(data){
            livingroomref=data.val().livingroom
        })
        var button = createButton('Living room')
        button.position(500,500)
        button.mousePressed(function Livingroom(){
        database.ref('dog/activities').update({
            'livingroom':livingroomref+=1
        })
        dog.addImage(livingroomdog)
        console.log(livingroomref+' is the number of times the dog has gone to the living room')
    })
}
}