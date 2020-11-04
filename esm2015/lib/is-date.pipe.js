import { NgModule, Pipe } from '@angular/core';
import isDate from 'date-fns/isDate';
export class IsDatePipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return isDate(date);
    }
}
IsDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsDate' },] }
];
export class IsDatePipeModule {
}
IsDatePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsDatePipe],
                exports: [IsDatePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvaXMtZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBUztRQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOztBQWM1QixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFKNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnZGF0ZS1mbnMvaXNEYXRlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0lzRGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBJc0RhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0RhdGUoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSXNEYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtJc0RhdGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc0RhdGVQaXBlTW9kdWxlIHt9XG4iXX0=