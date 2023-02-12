const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
    readline(query){
        return new Promise((resolve, reject)=>{
            rl.question(query, (answer)=>resolve(answer));
        })
    },
    

    print(message){
        console.log(message)
    },

    close(){
        rl.close()
    }
};

module.exports = Console