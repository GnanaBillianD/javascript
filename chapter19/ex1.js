let givenData = [
    {
        id: 1,
        name: "enp1",
        type: "LAN",
        id_address: [
            "192.168.1.1",
            "192.168.1.2",
            "192.168.1.3"
        ]
    },
    {
        id: 2,
        name: "enp2",
        type: "WAN",
        id_address: [
            "192.168.2.1",
            "192.168.2.2",
            "192.168.2.3"
        ]
    },
    {
        id: 3,
        name: "enp3",
        type: "LAN",
        id_address: [
            "192.168.3.1",
            "192.168.3.2",
            "192.168.3.3"
        ]
    },
    {
        id: 4,
        name: "enp4",
        type: "LAN",
        id_address: [
            "192.168.5.1",
            "192.168.5.2",
            "192.168.5.3"
        ]
    }
]



console.log("-----------------------using Array.from method to Print the LAN objects only from the above array------------------------------- ")
//Print the LAN objects only from the above array
let storeLANObject1=[];
Array.from({length:4}, function(vale,index){
    if(givenData[index].type==="LAN"){
        storeLANObject1.push(givenData[index])
    }
})
console.log(storeLANObject1);




console.log("----------------------using Array.forEach method to Print the LAN objects only from the above array------------------")
//Print the LAN objects only from the above array
givenData.forEach(arrayElement=>{if(arrayElement.type==="WAN"){
        console.log(arrayElement)
}})




console.log("---------------------------Find the name “enp1” in the above array and print only that's id_address-----------------------");
//Find the name “enp1” in the above array and print only that's id_address
givenData.map(values=>{if(values.name==="enp1"){
    console.log(values.id_address)
}})



console.log("---------------------------Find the name “enp3” and 'enp4' in the above array and print only that's id_address-----------------------")
//Find the name “enp3” and 'enp4' in the above array and print only that's id_address
givenData.findIndex((arrayObject)=>{if(arrayObject.name==="enp3"|| arrayObject.name==="enp4" ){
    console.log(arrayObject.id_address)
}})