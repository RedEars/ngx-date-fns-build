import { NgModule, Pipe } from '@angular/core';
import getDaysInYear from 'date-fns/getDaysInYear';
export class GetDaysInYearPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getDaysInYear(date);
    }
}
GetDaysInYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDaysInYear' },] }
];
export class GetDaysInYearPipeModule {
}
GetDaysInYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDaysInYearPipe],
                exports: [GetDaysInYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheXMtaW4teWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LWRheXMtaW4teWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUduRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7O0FBY25DLE1BQU0sT0FBTyx1QkFBdUI7OztZQUpuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXREYXlzSW5ZZWFyIGZyb20gJ2RhdGUtZm5zL2dldERheXNJblllYXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zR2V0RGF5c0luWWVhcicgfSlcbmV4cG9ydCBjbGFzcyBHZXREYXlzSW5ZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0RGF5c0luWWVhcihkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREYXlzSW5ZZWFyUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXREYXlzSW5ZZWFyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0RGF5c0luWWVhclBpcGVNb2R1bGUge31cbiJdfQ==