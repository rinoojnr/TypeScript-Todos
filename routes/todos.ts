import { Router } from 'express';

import { Todo } from '../models/todos'
import { todo } from 'node:test';


const router = Router();
let todos: Todo[] = [];

router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos});
});

router.post('/todo',(req,res,next)=>{
    const newTodos: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newTodos)
    res.status(200).json({success:"true",todo:newTodos,todos:todos})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const id = req.params.todoId;
    const orginalLength = todos.length
    todos  = todos.filter((item)=>item.id !== id)
    if(todos.length!=orginalLength){
        res.status(200).json({success:true,message:"Deleted",todos:todos})
    }else{
        res.status(404).json({success:false,message:"id not found"})
    }
})


export default router;