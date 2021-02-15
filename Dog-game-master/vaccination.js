function Vaccination(){
    this.getVac = function(){
        let l=0
        let vaccinationref=database.ref('dog/activities')
        vaccinationref.on('value',function(data){
            vaccinationref=data.val().vaccination
        })
        var button1 = createButton('vaccinate')
        button1.position(500,400)
        button1.mousePressed(function vaccination(){
        database.ref('dog/activities').update({
            'vaccination':vaccinationref+=1
        })
        dog.addImage(vaccinationimg)
        console.log(vaccinationref+' is the number of times the dog has got vaccinated')
    })
}
}