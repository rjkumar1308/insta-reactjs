const express = require('express');
const app = express();
const port = 3200;

app.get('/stories',(req, res)=>{
    res.send({
        status:200,
        message: 'success',
        data:{
            stories: [{ "id": 1, "user_name": "Michael", "avatar": "https://reqres.in/img/faces/7-image.jpg" }, { "id": 2, "user_name": "Lindsay", "avatar": "https://reqres.in/img/faces/8-image.jpg" }, { "id": 3, "user_name": "Tobias", "avatar": "https://reqres.in/img/faces/9-image.jpg" }, { "id": 4, "user_name": "Byron", "avatar": "https://reqres.in/img/faces/10-image.jpg" }, { "id": 5, "user_name": "George", "avatar": "https://reqres.in/img/faces/11-image.jpg" }, { "id": 6, "user_name": "Rachel", "avatar": "https://reqres.in/img/faces/12-image.jpg" }]
        }
    });
});

app.listen(port, ()=>{
    console.log("Listening to port 3200.");
})
