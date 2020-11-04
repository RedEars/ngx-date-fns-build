import { NgModule, Pipe } from '@angular/core';
import endOfMinute from 'date-fns/endOfMinute';
export class EndOfMinutePipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return endOfMinute(date);
    }
}
EndOfMinutePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfMinute' },] }
];
export class EndOfMinutePipeModule {
}
EndOfMinutePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfMinutePipe],
                exports: [EndOfMinutePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLW1pbnV0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZW5kLW9mLW1pbnV0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQWNqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZk1pbnV0ZSBmcm9tICdkYXRlLWZucy9lbmRPZk1pbnV0ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNFbmRPZk1pbnV0ZScgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZk1pbnV0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbmRPZk1pbnV0ZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZk1pbnV0ZVBpcGVdLFxuICBleHBvcnRzOiBbRW5kT2ZNaW51dGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBFbmRPZk1pbnV0ZVBpcGVNb2R1bGUge31cbiJdfQ==