import { NgModule, Pipe } from '@angular/core';
import closestTo from 'date-fns/closestTo';
export class ClosestToPipe {
    transform(dateToCompare, datesArray) {
        if (typeof dateToCompare === 'string') {
            dateToCompare = new Date(dateToCompare);
        }
        return closestTo(dateToCompare, datesArray);
    }
}
ClosestToPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsClosestTo' },] }
];
export class ClosestToPipeModule {
}
ClosestToPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ClosestToPipe],
                exports: [ClosestToPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2VzdC10by5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvY2xvc2VzdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsYUFBK0IsRUFBRSxVQUFpQjtRQUMxRCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLFNBQVMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7QUFjL0IsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY2xvc2VzdFRvIGZyb20gJ2RhdGUtZm5zL2Nsb3Nlc3RUbyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNDbG9zZXN0VG8nIH0pXG5leHBvcnQgY2xhc3MgQ2xvc2VzdFRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZVRvQ29tcGFyZTogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZXNBcnJheTogYW55W10pOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGVUb0NvbXBhcmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlVG9Db21wYXJlID0gbmV3IERhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0VG8oZGF0ZVRvQ29tcGFyZSwgZGF0ZXNBcnJheSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2xvc2VzdFRvUGlwZV0sXG4gIGV4cG9ydHM6IFtDbG9zZXN0VG9QaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZXN0VG9QaXBlTW9kdWxlIHt9XG4iXX0=