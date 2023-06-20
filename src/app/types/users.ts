export interface Users {
    firstName: string;
    lastName: string;
    userId: number;
    taskList: Task[];
}

export interface Task {
    taskId:number;
    dateCreated: Date;
    title: string;
    description: string;
    complete: boolean;
    dateCompleted: Date | null;
}