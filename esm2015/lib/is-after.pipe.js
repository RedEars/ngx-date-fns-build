import { NgModule, Pipe } from '@angular/core';
import isAfter from 'date-fns/isAfter';
export class IsAfterPipe {
    transform(date, dateToCompare) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        if (typeof dateToCompare === 'string') {
            dateToCompare = new Date(dateToCompare);
        }
        return isAfter(date, dateToCompare);
    }
}
IsAfterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsAfter' },] }
];
export class IsAfterPipeModule {
}
IsAfterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsAfterPipe],
                exports: [IsAfterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYWZ0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLWFmdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLGFBQStCO1FBQy9ELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3JDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQWlCN0IsTUFBTSxPQUFPLGlCQUFpQjs7O1lBSjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNBZnRlciBmcm9tICdkYXRlLWZucy9pc0FmdGVyJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0lzQWZ0ZXInIH0pXG5leHBvcnQgY2xhc3MgSXNBZnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVUb0NvbXBhcmU6IERhdGVGbnNJbnB1dERhdGUpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVRvQ29tcGFyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVUb0NvbXBhcmUgPSBuZXcgRGF0ZShkYXRlVG9Db21wYXJlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQWZ0ZXIoZGF0ZSwgZGF0ZVRvQ29tcGFyZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSXNBZnRlclBpcGVdLFxuICBleHBvcnRzOiBbSXNBZnRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIElzQWZ0ZXJQaXBlTW9kdWxlIHt9XG4iXX0=