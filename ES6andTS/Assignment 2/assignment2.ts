//question 1

let fibonacci = {
    [Symbol.iterator](){
        let previousno=1,currentno=1,value;
        return{
            next(){
                [value,previousno,currentno] = [previousno,currentno,previousno+currentno];
                return {value};
            }
        };
    };
};



for (n of fibonacci){
    if(n>100){
        break;
    }
    console.log(n);
}



//question 2



let armstrong = {
    [Symbol.iterator](){
        let low=10,value;
        return{
            next(){
                function armstrong(low) {
                    var num = low+1;
                    while(true){
                        var str = num.toString();
                
                        var sum = 0;
                
                      for(var i = 0;i<str.length;i++){
                            sum = sum + Math.pow(parseInt(str[i]),str.length);
                        }
                
                        if(sum == num)
                        return sum;
                
                        else
                            num++;
                    }
                   
                }
                [value,low]=[armstrong(low),armstrong(low)];
                return{value};
                
            }
        };
    };
};
for (n of armstrong){
    if(n>10000){
        break;
    }
    console.log(n);
}






//question 3

function * armstrong11(low) {
    //var num = low+1;
    

    while(true){
        if(low>1000){
            return{done:true,'value':low};
        }
        //console.log(low);
        low++;
    do{
        var str = low.toString();

        var sum = 0;

        for(var i = 0;i<str.length;i++){
            sum = sum + Math.pow(parseInt(str[i]),str.length);
        }

        if(sum == low){
        //[value,low]=[sum,sum];
        //var value = sum;
        low = sum;
        break;
    }
        else
            low++;
    }while(true);
    yield low;
}
    
}


var arr = armstrong11(10);  

let temp = arr.next();
console.log(temp);

temp = arr.next();
console.log(temp);

temp = arr.next();
console.log(temp);

temp = arr.next();
console.log(temp);

temp = arr.next();
console.log(temp);

temp = arr.next();
console.log(temp);




//question4

let chatroom1 = new Map();
let chatroom2 = new Map();

let user1 = new Set(["hii"]);
let user2 = new Set(["hello"]);
let user3 = new Set(["hello world"]);
let user4 = new Set(["c2u1","Bilanshi nagin nighali"]);
let user5 = new Set(["c2u2","Abhi maja aayaga na bhidu"]);
let user6 = new Set(["c2u3","Kya gunda banega re tu"]);

chatroom1.set("user1 Raju",user1);
chatroom1.set("user2 Shyam",user2);
chatroom1.set("user3 Baburao",user3);

chatroom2.set("user1 Raju",user4);
chatroom2.set("user2 Farhan",user5);
chatroom2.set("user3 Rancho",user6);



function printusersofchat(chatroom){
    //console.log("\nusers form chatroom :")
    for(let key of chatroom.keys()){
        console.log("\n",key);
    }
}


function printchatsofchat(chatroom){
    let chats = new Set();
    for(let key of chatroom.values()){
       // console.log("\n",key);
       //chats.add(key);
       key.forEach(chats.add,chats);
    }
    console.log("\n",chats);
}


console.log("\nUsers of chatroom 1 :");
printusersofchat(chatroom1);

console.log("\nUsers of chatroom 2 :");
printusersofchat(chatroom2);

console.log("\n Chats from chatroom 1 :");
printchatsofchat(chatroom1);

console.log("\n Chats from chatroom 2 :");
printchatsofchat(chatroom2);














