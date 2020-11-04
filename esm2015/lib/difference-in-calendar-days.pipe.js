import { NgModule, Pipe } from '@angular/core';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
export class DifferenceInCalendarDaysPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInCalendarDays(dateLeft, dateRight);
    }
}
DifferenceInCalendarDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarDays' },] }
];
export class DifferenceInCalendarDaysPipeModule {
}
DifferenceInCalendarDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarDaysPipe],
                exports: [DifferenceInCalendarDaysPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1jYWxlbmRhci1kYXlzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9kaWZmZXJlbmNlLWluLWNhbGVuZGFyLWRheXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyx3QkFBd0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFNBQVMsQ0FBQyxRQUEwQixFQUFFLFNBQTJCO1FBQy9ELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sd0JBQXdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRTs7QUFpQjlDLE1BQU0sT0FBTyxrQ0FBa0M7OztZQUo5QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cycgfSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5DYWxlbmRhckRheXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGRhdGVMZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZUxlZnQgPSBuZXcgRGF0ZShkYXRlTGVmdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVJpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZVJpZ2h0ID0gbmV3IERhdGUoZGF0ZVJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEaWZmZXJlbmNlSW5DYWxlbmRhckRheXNQaXBlXSxcbiAgZXhwb3J0czogW0RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1BpcGVNb2R1bGUge31cbiJdfQ==