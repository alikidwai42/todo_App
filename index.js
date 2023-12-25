const { error } = require('console');
const express = require('express'); 
const fs = require('fs');

//Execute express 
const app = express(); 

//Middlewares
app.use(express.json()); 
 



app.get('/todos' ,hello)



    


  function hello(req,res)
  {
    fs.readFile("todos.json","utf-8",(err,data)=>{
        res.json(JSON.parse(data))

    });
  }

  app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    fs.readFile("todos.json","utf-8",(err,data)=>{
        for(i=0;i<JSON.parse(data).length;i++){
            if(id==JSON.parse(data)[i].id){
                res.json(JSON.parse(data)[i])
            }
            
        }
        res.status(404).json("not found")
    })
    
    
   
  });
const port = 4001;
let count=0
app.post('/todos',(req,res) => {
    
  let newTodo={ id:count++,
   title : req.body.title,
    description :req.body.description}

    fs.readFile("todos.json","utf-8",(err,data)=>{
        let array_data=JSON.parse(data)
        array_data.push(newTodo)
        
        fs.writeFile("todos.json",JSON.stringify(array_data),(err)=>{
            if(err){
                res.json("error")
            }
        })
    })
    
    res.json("nice sweety take it easy")




});

app.put('/todos/:id',(req,res) => {
    fs.readFile('todos.json','utf-8',(err,data)=>{
        let array_data=JSON.parse(data)
    length=array_data.length
    let flag=0;

    let id= req.params.id
    for(let i=0;i<length;i++)
    {
        if(id==array_data[i].id){
            array_data[i].title=req.body.title
            array_data[i].description=req.body.description
            flag++
        }
    }

    fs.writeFile("todos.json",JSON.stringify(array_data),(err)=>{
        
        if(err){
            res.json("error")
        }});
        if(flag==0){
            res.json("not found")
        }else{
            res.json("updated")
        }
        
    })

})

app.delete('/todos/:id',(req,res)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        let id = req.params.id
        let todo_new=[]
        new_array=JSON.parse(data)
        let count=0
       for(let i=0;i<new_array.length;i++)
       {
        if(id==new_array[i].id){
            count++
            continue
        }
       
           todo_new.push(new_array[i])
        
       }
       new_array=todo_new
       fs.writeFile("todos.json",JSON.stringify(new_array),(err)=>{
        if(count==0)
        {
            res.json("not found")
        }else{
            res.json("deleted")
        }})})})

app.listen(port, () => console.log(`Server is running on port ${port}`)); 