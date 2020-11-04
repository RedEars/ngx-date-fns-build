import { NgModule, Pipe } from '@angular/core';
import startOfQuarter from 'date-fns/startOfQuarter';
export class StartOfQuarterPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfQuarter(date);
    }
}
StartOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfQuarter' },] }
];
export class StartOfQuarterPipeModule {
}
StartOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfQuarterPipe],
                exports: [StartOfQuarterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtcXVhcnRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvc3RhcnQtb2YtcXVhcnRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGNBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBY3BDLE1BQU0sT0FBTyx3QkFBd0I7OztZQUpwQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdGFydE9mUXVhcnRlciBmcm9tICdkYXRlLWZucy9zdGFydE9mUXVhcnRlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mUXVhcnRlcicgfSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mUXVhcnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydE9mUXVhcnRlcihkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mUXVhcnRlclBpcGVdLFxuICBleHBvcnRzOiBbU3RhcnRPZlF1YXJ0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mUXVhcnRlclBpcGVNb2R1bGUge31cbiJdfQ==