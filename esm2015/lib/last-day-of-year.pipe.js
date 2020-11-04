import { NgModule, Pipe } from '@angular/core';
import lastDayOfYear from 'date-fns/lastDayOfYear';
export class LastDayOfYearPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return lastDayOfYear(date);
    }
}
LastDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfYear' },] }
];
export class LastDayOfYearPipeModule {
}
LastDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfYearPipe],
                exports: [LastDayOfYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YteWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvbGFzdC1kYXktb2YteWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUduRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7O0FBY25DLE1BQU0sT0FBTyx1QkFBdUI7OztZQUpuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBsYXN0RGF5T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZlllYXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zTGFzdERheU9mWWVhcicgfSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3REYXlPZlllYXIoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGFzdERheU9mWWVhclBpcGVdLFxuICBleHBvcnRzOiBbTGFzdERheU9mWWVhclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZlllYXJQaXBlTW9kdWxlIHt9XG4iXX0=