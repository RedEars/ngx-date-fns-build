import { NgModule, Pipe } from '@angular/core';
import differenceInCalendarWeeks from 'date-fns/differenceInCalendarWeeks';
export class DifferenceInCalendarWeeksPipe {
    transform(dateLeft, dateRight, options) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInCalendarWeeks(dateLeft, dateRight, options);
    }
}
DifferenceInCalendarWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarWeeks' },] }
];
export class DifferenceInCalendarWeeksPipeModule {
}
DifferenceInCalendarWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarWeeksPipe],
                exports: [DifferenceInCalendarWeeksPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1jYWxlbmRhci13ZWVrcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZGlmZmVyZW5jZS1pbi1jYWxlbmRhci13ZWVrcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLHlCQUF5QixNQUFNLG9DQUFvQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsU0FBUyxDQUNQLFFBQTBCLEVBQzFCLFNBQTJCLEVBQzNCLE9BRUM7UUFFRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBRTs7QUF1Qi9DLE1BQU0sT0FBTyxtQ0FBbUM7OztZQUovQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUsIERhdGVGbnNXZWVrSW5kZXggfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcycgfSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB3ZWVrU3RhcnRzT24/OiBEYXRlRm5zV2Vla0luZGV4O1xuICAgIH1cbiAgKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGRhdGVMZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZUxlZnQgPSBuZXcgRGF0ZShkYXRlTGVmdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVJpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZVJpZ2h0ID0gbmV3IERhdGUoZGF0ZVJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrc1BpcGVdLFxuICBleHBvcnRzOiBbRGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3NQaXBlTW9kdWxlIHt9XG4iXX0=