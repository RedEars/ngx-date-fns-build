import { NgModule, Pipe } from '@angular/core';
import getDay from 'date-fns/getDay';
export class GetDayPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getDay(date);
    }
}
GetDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDay' },] }
];
export class GetDayPipeModule {
}
GetDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayPipe],
                exports: [GetDayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LWRheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBUztRQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOztBQWM1QixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFKNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXREYXkgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF5JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldERheScgfSlcbmV4cG9ydCBjbGFzcyBHZXREYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBhbnkpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldERheShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREYXlQaXBlXSxcbiAgZXhwb3J0czogW0dldERheVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERheVBpcGVNb2R1bGUge31cbiJdfQ==