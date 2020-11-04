import { NgModule, Pipe } from '@angular/core';
import startOfSecond from 'date-fns/startOfSecond';
export class StartOfSecondPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfSecond(date);
    }
}
StartOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfSecond' },] }
];
export class StartOfSecondPipeModule {
}
StartOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfSecondPipe],
                exports: [StartOfSecondPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2Ytc2Vjb25kLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1zZWNvbmQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFOztBQWNuQyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZlNlY29uZCBmcm9tICdkYXRlLWZucy9zdGFydE9mU2Vjb25kJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZTZWNvbmQnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlNlY29uZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydE9mU2Vjb25kKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZTZWNvbmRQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZTZWNvbmRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mU2Vjb25kUGlwZU1vZHVsZSB7fVxuIl19