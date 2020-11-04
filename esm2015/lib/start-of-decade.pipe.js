import { NgModule, Pipe } from '@angular/core';
import startOfDecade from 'date-fns/startOfDecade';
export class StartOfDecadePipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfDecade(date);
    }
}
StartOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfDecade' },] }
];
export class StartOfDecadePipeModule {
}
StartOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfDecadePipe],
                exports: [StartOfDecadePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtZGVjYWRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1kZWNhZGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFOztBQWNuQyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZkRlY2FkZSBmcm9tICdkYXRlLWZucy9zdGFydE9mRGVjYWRlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZEZWNhZGUnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkRlY2FkZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydE9mRGVjYWRlKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZEZWNhZGVQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZEZWNhZGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mRGVjYWRlUGlwZU1vZHVsZSB7fVxuIl19