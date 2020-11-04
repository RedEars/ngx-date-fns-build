import { NgModule, Pipe } from '@angular/core';
import lastDayOfQuarter from 'date-fns/lastDayOfQuarter';
export class LastDayOfQuarterPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return lastDayOfQuarter(date);
    }
}
LastDayOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfQuarter' },] }
];
export class LastDayOfQuarterPipeModule {
}
LastDayOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfQuarterPipe],
                exports: [LastDayOfQuarterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtcXVhcnRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvbGFzdC1kYXktb2YtcXVhcnRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGdCQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBR3pELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFOztBQWN0QyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFKdEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbGFzdERheU9mUXVhcnRlciBmcm9tICdkYXRlLWZucy9sYXN0RGF5T2ZRdWFydGVyJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0xhc3REYXlPZlF1YXJ0ZXInIH0pXG5leHBvcnQgY2xhc3MgTGFzdERheU9mUXVhcnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0RGF5T2ZRdWFydGVyKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhc3REYXlPZlF1YXJ0ZXJQaXBlXSxcbiAgZXhwb3J0czogW0xhc3REYXlPZlF1YXJ0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZRdWFydGVyUGlwZU1vZHVsZSB7fVxuIl19