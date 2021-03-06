import { NgModule, Pipe } from '@angular/core';
import endOfHour from 'date-fns/endOfHour';
export class EndOfHourPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return endOfHour(date);
    }
}
EndOfHourPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfHour' },] }
];
export class EndOfHourPipeModule {
}
EndOfHourPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfHourPipe],
                exports: [EndOfHourPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLWhvdXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2VuZC1vZi1ob3VyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztBQWMvQixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZkhvdXIgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZIb3VyJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0VuZE9mSG91cicgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZkhvdXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogRGF0ZSB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZW5kT2ZIb3VyKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VuZE9mSG91clBpcGVdLFxuICBleHBvcnRzOiBbRW5kT2ZIb3VyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZIb3VyUGlwZU1vZHVsZSB7fVxuIl19