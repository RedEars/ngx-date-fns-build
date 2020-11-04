import { NgModule, Pipe } from '@angular/core';
import getMilliseconds from 'date-fns/getMilliseconds';
export class GetMillisecondsPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getMilliseconds(date);
    }
}
GetMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetMilliseconds' },] }
];
export class GetMillisecondsPipeModule {
}
GetMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetMillisecondsPipe],
                exports: [GetMillisecondsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW1pbGxpc2Vjb25kcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LW1pbGxpc2Vjb25kcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7O0FBY3JDLE1BQU0sT0FBTyx5QkFBeUI7OztZQUpyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXRNaWxsaXNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvZ2V0TWlsbGlzZWNvbmRzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldE1pbGxpc2Vjb25kcycgfSlcbmV4cG9ydCBjbGFzcyBHZXRNaWxsaXNlY29uZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRNaWxsaXNlY29uZHMoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0TWlsbGlzZWNvbmRzUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRNaWxsaXNlY29uZHNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRNaWxsaXNlY29uZHNQaXBlTW9kdWxlIHt9XG4iXX0=