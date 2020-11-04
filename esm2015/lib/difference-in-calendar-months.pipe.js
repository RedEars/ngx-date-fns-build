import { NgModule, Pipe } from '@angular/core';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
export class DifferenceInCalendarMonthsPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInCalendarMonths(dateLeft, dateRight);
    }
}
DifferenceInCalendarMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarMonths' },] }
];
export class DifferenceInCalendarMonthsPipeModule {
}
DifferenceInCalendarMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarMonthsPipe],
                exports: [DifferenceInCalendarMonthsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1jYWxlbmRhci1tb250aHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2RpZmZlcmVuY2UtaW4tY2FsZW5kYXItbW9udGhzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sMEJBQTBCLE1BQU0scUNBQXFDLENBQUM7QUFHN0UsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUU7O0FBaUJoRCxNQUFNLE9BQU8sb0NBQW9DOzs7WUFKaEQsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMnIH0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGRhdGVMZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZUxlZnQgPSBuZXcgRGF0ZShkYXRlTGVmdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVJpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZVJpZ2h0ID0gbmV3IERhdGUoZGF0ZVJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzUGlwZV0sXG4gIGV4cG9ydHM6IFtEaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzUGlwZU1vZHVsZSB7fVxuIl19