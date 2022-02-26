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

let storeWANObject = [];



console.log("-----------------------using Array.from method Print the LAN objects only from the above array------------------------------- ")
let storeLANObject1=[];
Array.from({length:4}, function(v,i){
    if(givenData[i].type==="LAN"){
        storeLANObject1.push(givenData[i])
    }
})
console.log(storeLANObject1)




console.log("-----------------------------Print the LAN objects only from the above array---------------------------------")
//Print the LAN objects only from the above array
let storeLANObject = [];
for (let i = 0; i < givenData.length; i++) {
    if (givenData[i].type == "LAN")
        storeLANObject.push(givenData[i]);

}
console.log(storeLANObject)




console.log("------------------------------Print the WAN objects only from the above array--------------------------------------")
//Print the WAN objects only from the above array
for (let j = 0; j < givenData.length; j++) {
    if (givenData[j].type == "WAN")
        storeWANObject.push(givenData[j]);

}
console.log(storeWANObject)


console.log("---------------------------Find the name “enp1” in the above array and print only that's id_address-----------------------")
//Find the name “enp1” in the above array and print only that's id_address
function enp(givenData) {
    for (let k = 0; k < givenData.length; k++) {
        if (givenData[k].name == "enp1")
            return givenData[k].id_address

        console.log("k : ", k)
    }
    console.log("enp got executed")
}
console.log(enp(givenData))



console.log("-------//Find the names “enp3”, “enp4” from the above array and print the id_address in a one-dimensional array--------")
//Find the names “enp3”, “enp4” from the above array and print the id_address in a one-dimensional array
let storeEnp3IdAddress = [];
let storeEnp4IDAddress = [];
function enp3(given_Data) {
    for (let m = 0; m < givenData.length; m++) {
        if (givenData[m].name == "enp3") {
            storeEnp3IDAddress = givenData[m].id_address;
        } else if (givenData[m].name == "enp4") {
            storeEnp4IDAddress = givenData[m].id_address;
        }
    }
    let StoreIDAddressOfenp3Andenp4 = [...storeEnp3IDAddress, ...storeEnp4IDAddress];
    return StoreIDAddressOfenp3Andenp4;
}
console.log(enp3(givenData));




