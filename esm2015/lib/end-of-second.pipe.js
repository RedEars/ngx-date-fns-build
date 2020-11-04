import { NgModule, Pipe } from '@angular/core';
import endOfSecond from 'date-fns/endOfSecond';
export class EndOfSecondPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return endOfSecond(date);
    }
}
EndOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfSecond' },] }
];
export class EndOfSecondPipeModule {
}
EndOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfSecondPipe],
                exports: [EndOfSecondPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXNlY29uZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZW5kLW9mLXNlY29uZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQWNqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZlNlY29uZCBmcm9tICdkYXRlLWZucy9lbmRPZlNlY29uZCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNFbmRPZlNlY29uZCcgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZlNlY29uZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbmRPZlNlY29uZChkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZlNlY29uZFBpcGVdLFxuICBleHBvcnRzOiBbRW5kT2ZTZWNvbmRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBFbmRPZlNlY29uZFBpcGVNb2R1bGUge31cbiJdfQ==