import { AbstractQueue } from "./Queue/AbstractQueue";
import { QueueError, QueueErrorType } from "./Queue/Queue.interface";

export class Queue<T> implements AbstractQueue<T> {
    
    public queue: T[] = [];
    public capacity = Number.MAX_SAFE_INTEGER;

    enqueue(item: T): void {
        if(this.queue.length >= this.capacity){
            throw new QueueError(QueueErrorType.QueueMaxSizeReached, QueueErrorType.QueueMaxSizeReached)
        }
        this.queue.push(item);  
    }
    dequeue(): T | undefined {
        if(!this.queue){
            return undefined; 
        }
       return this.queue.shift();
    }
    peek() {
         return this.queue[0];
    }
    length(): number {
        return this.queue.length;
    }
    setCapacity(capacity: number): void {
        if(capacity < 0 ){
            throw new QueueError(QueueErrorType.QueueCapacityNegative);
        }
      this.capacity = capacity;
    }
    getCapacity(): number {
        return this.capacity;
    }
}
