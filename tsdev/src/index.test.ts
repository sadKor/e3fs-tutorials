import { test, describe, expect, beforeEach } from '@jest/globals';
import { Queue } from './Queue';
import { QueueError } from './Queue/Queue.interface';


var element: any[] = []; 

describe('Testfall Queues',
    () => {
        test("Test enqueue",
            () => {
                let queue = new Queue();
                queue.enqueue("newItem1");
                queue.enqueue("newItem2");
                expect(queue.length()).toBe(2);

            });
        test("Test dequeue", 
        () => {
            let queue = new Queue();
            queue.enqueue("newItem1");
            queue.dequeue();
            expect(queue.length()).toBe(0);
        });
        test("Test Peek", 
        () =>{
            let queue = new Queue();
            queue.enqueue("newItem1");
            queue.enqueue("newItem2");
            queue.enqueue("newItem3");
            queue.enqueue("newItem4");
            queue.enqueue("newItem5");
            queue.enqueue("newItem6");
            expect(queue.peek()).toBe("newItem1");
        });
        test("Test Length", 
        ()=> {

            let queue = new Queue();
            queue.enqueue("newItem1");
            queue.enqueue("newItem2");
            queue.enqueue("newItem3");
            expect(queue.length()).toBe(3);

        });
        test("Test Capacity",
        () => {
            let queue = new Queue();
            queue.setCapacity(5);
            queue.enqueue("newItem1");
            queue.enqueue("newItem2");
            queue.enqueue("newItem3");
            queue.enqueue("newItem4");
            queue.enqueue("newItem5");
            expect( ()=> queue.enqueue("newItem6")).toThrow(QueueError);
        });
        test("Queue with different elements", 
        () => {
            let differentQueue = new Queue<string | number>();
            differentQueue.enqueue("newItem1");
            differentQueue.enqueue(2);
            expect(differentQueue).toBeTruthy();
        });
    },

);