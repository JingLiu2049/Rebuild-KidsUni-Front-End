import {message} from 'antd'

// renturn a function that sents AJAX requrest and update state 
export const getRespFunc = (reqFunc,setStateFunc, setLoading,data=null )=>{
    return( async ()=>{
     const result = await reqFunc(data)
     // const result = response.data
     setLoading(true)
     if (result.status === 1) {
         setLoading(false)
         setStateFunc(result.data)
         if (result.msg) message.success(result.msg)
     } else {
         setLoading(false)
         message.error(result.msg)
     }
 }) 
 }

 export class Column{
    constructor(title,width='auto',ellipsis=true,filters=null){
        this.title = title;
        this.dataIndex = title.toLowerCase();
        this.width = width;
        this.ellipsis=ellipsis;
        this.filters=filters;
    }
    onFilter = (value, record) => record[this.dataIndex].indexOf(value) !== -1
    } 