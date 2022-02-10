// We will create an Interface here 
export interface Task {
    id?: number; // optional bc when created it's not going to initially have an id until save in json server
    text: string;
    day: string;
    reminder: boolean;
}