import { revalidatePath } from "next/cache"
import { postTask } from "./tasks"

export const createATask = async (formData)=>{
    'use server'
    /* const title = formData.get("title")
    const description = formData.get("description")
    const status = formData.get("status")
    const priority = formData.get("priority")
    const assignedTo = formData.get("assignedTo")

    const newTask = {title, description, priority, status, assignedTo} */
    
    const newTask = Object.fromEntries(formData.entries())

    console.log( newTask)

    const res = await postTask(newTask)

    if(res.ok){
        revalidatePath("/tasks")
    }

    return res;

}