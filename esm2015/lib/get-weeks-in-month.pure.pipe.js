import { NgModule, Pipe } from '@angular/core';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class GetWeeksInMonthPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getWeeksInMonth(date, calculateLocale(options, this.config));
    }
}
GetWeeksInMonthPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeeksInMonthPure' },] }
];
GetWeeksInMonthPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class GetWeeksInMonthPurePipeModule {
}
GetWeeksInMonthPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeeksInMonthPurePipe],
                exports: [GetWeeksInMonthPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdlZWtzLWluLW1vbnRoLnB1cmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC13ZWVrcy1pbi1tb250aC5wdXJlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sZUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxlQUFlLEVBQ2YsMkJBQTJCLEVBQzVCLE1BQU0sa0NBQWtDLENBQUM7QUFJMUMsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixNQUFtQztRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUE2QjtJQUFHLENBQUM7SUFFMUQsU0FBUyxDQUNQLElBQXNCLEVBQ3RCLE9BR0M7UUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7OztZQUp2QywyQkFBMkI7O0FBMEI3QixNQUFNLE9BQU8sNkJBQTZCOzs7WUFKekMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgZ2V0V2Vla3NJbk1vbnRoIGZyb20gJ2RhdGUtZm5zL2dldFdlZWtzSW5Nb250aCc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVMb2NhbGUsXG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlLCBEYXRlRm5zV2Vla0luZGV4IH0gZnJvbSAnLi90eXBlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRXZWVrc0luTW9udGhQdXJlJyB9KVxuZXhwb3J0IGNsYXNzIEdldFdlZWtzSW5Nb250aFB1cmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgICAgd2Vla1N0YXJ0c09uPzogRGF0ZUZuc1dlZWtJbmRleDtcbiAgICB9XG4gICk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0V2Vla3NJbk1vbnRoKGRhdGUsIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZykpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dldFdlZWtzSW5Nb250aFB1cmVQaXBlXSxcbiAgZXhwb3J0czogW0dldFdlZWtzSW5Nb250aFB1cmVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRXZWVrc0luTW9udGhQdXJlUGlwZU1vZHVsZSB7fVxuIl19