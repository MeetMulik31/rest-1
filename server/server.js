const express = require('express');
const app = express();
const port = 1337;

app.use(express.json());

app.get('/',(request,response)=>{
	response.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
