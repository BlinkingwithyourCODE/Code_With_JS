const user = {
     username : "Ketan",
     price : 2000,
     // Declaring One Method
     welcomeMessage : function(){
          console.log(`${this.username}, Welcome to Website`);
     }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()