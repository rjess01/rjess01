var salon={
    name:"Fashion pet",
    address:{
        street:"palm ave",
        number:"206-k"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {   name:"Scooby",
            age:50,
            breed:"Dane",
            gender:"male",
            service:"grooming",
            ownerName:"Shaggy",
            contactphone:"222-222-2222"
        },
        {   name:"Scrappy",
            age:40,
            breed:"Dane",
            gender:"male",
            service:"nail trim",
            ownerName:"Shaggy",
            contactphone:"222-222-2222"
        },
        {   name:"Tweety",
            age:95,
            breed:"Canairan",
            gender:"male",
            service:"shower",
            ownerName:"silvester",
            contactphone:"333-333-3333"
        },
        {   name:"speedy gonzalez",
        age:95,
        breed:"mixed",
        gender:"male",
        service:"grooms",
        ownerName:"bugs bunny",
        contactphone:"555-555-5555"
        }
    ]
}

for(var i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i].name)
}