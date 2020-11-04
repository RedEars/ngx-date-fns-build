import { NgModule, Pipe } from '@angular/core';
import addBusinessDays from 'date-fns/addBusinessDays';
export class AddBusinessDaysPipe {
    transform(date, amount) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return addBusinessDays(date, amount);
    }
}
AddBusinessDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddBusinessDays' },] }
];
export class AddBusinessDaysPipeModule {
}
AddBusinessDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddBusinessDaysPipe],
                exports: [AddBusinessDaysPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1c2luZXNzLWRheXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2FkZC1idXNpbmVzcy1kYXlzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sZUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFOztBQWNyQyxNQUFNLE9BQU8seUJBQXlCOzs7WUFKckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgYWRkQnVzaW5lc3NEYXlzIGZyb20gJ2RhdGUtZm5zL2FkZEJ1c2luZXNzRGF5cyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNBZGRCdXNpbmVzc0RheXMnIH0pXG5leHBvcnQgY2xhc3MgQWRkQnVzaW5lc3NEYXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSwgYW1vdW50OiBudW1iZXIpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRCdXNpbmVzc0RheXMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBZGRCdXNpbmVzc0RheXNQaXBlXSxcbiAgZXhwb3J0czogW0FkZEJ1c2luZXNzRGF5c1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFkZEJ1c2luZXNzRGF5c1BpcGVNb2R1bGUge31cbiJdfQ==