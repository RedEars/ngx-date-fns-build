import { NgModule, Pipe } from '@angular/core';
import lastDayOfDecade from 'date-fns/lastDayOfDecade';
export class LastDayOfDecadePipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return lastDayOfDecade(date);
    }
}
LastDayOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfDecade' },] }
];
export class LastDayOfDecadePipeModule {
}
LastDayOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfDecadePipe],
                exports: [LastDayOfDecadePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtZGVjYWRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9sYXN0LWRheS1vZi1kZWNhZGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxlQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHdkQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFOztBQWNyQyxNQUFNLE9BQU8seUJBQXlCOzs7WUFKckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbGFzdERheU9mRGVjYWRlIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZkRlY2FkZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNMYXN0RGF5T2ZEZWNhZGUnIH0pXG5leHBvcnQgY2xhc3MgTGFzdERheU9mRGVjYWRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3REYXlPZkRlY2FkZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMYXN0RGF5T2ZEZWNhZGVQaXBlXSxcbiAgZXhwb3J0czogW0xhc3REYXlPZkRlY2FkZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZkRlY2FkZVBpcGVNb2R1bGUge31cbiJdfQ==