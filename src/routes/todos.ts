import { Router } from 'express';

import { Todo } from '../models/todos'
import { todo } from 'node:test';

type RequestBody = { text:string };
type RequestParams = { todoId:string };

const router = Router();
let todos: Todo[] = [];

router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos});
});

router.post('/todo',(req,res,next)=>{
    const body = req.body as RequestBody
    const newTodos: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodos)
    res.status(200).json({success:"true",todo:newTodos,todos:todos})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.body as RequestParams;
    const id = params.todoId;
    const orginalLength = todos.length
    todos  = todos.filter((item)=>item.id !== id)
    if(todos.length!=orginalLength){
        res.status(200).json({success:true,message:"Deleted",todos:todos})
    }else{
        res.status(404).json({success:false,message:"id not found"})
    }
})


export default router;